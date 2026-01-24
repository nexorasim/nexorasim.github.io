"""Main Nexora AI Agent orchestration logic."""

import logging
from typing import Dict, Any, Optional, List
from datetime import datetime

from ..config.config_loader import ConfigLoader
from ..providers.provider_factory import ProviderFactory
from ..providers.base import BaseProvider, AgentResponse


class NexoraAgent:
    """Main AI Agent orchestrator supporting multiple providers."""

    def __init__(self, config: Optional[ConfigLoader] = None):
        """Initialize Nexora Agent.
        
        Args:
            config: Optional configuration loader instance
        """
        self.config = config or ConfigLoader()
        self.logger = self._setup_logging()
        self.provider_factory = ProviderFactory(self.config)
        self.current_provider: Optional[BaseProvider] = None
        self.logger.info("Nexora Agent initialized")

    def _setup_logging(self) -> logging.Logger:
        """Setup logging configuration."""
        logger = logging.getLogger("nexora_agent")
        log_level = self.config.get("logging.level", "INFO")
        logger.setLevel(getattr(logging, log_level))
        
        if not logger.handlers:
            handler = logging.StreamHandler()
            formatter = logging.Formatter(self.config.get("logging.format"))
            handler.setFormatter(formatter)
            logger.addHandler(handler)
        else:
            # Update level/format dynamically if they already exist
            for handler in logger.handlers:
                handler.setLevel(getattr(logging, log_level))
                handler.setFormatter(logging.Formatter(self.config.get("logging.format")))
        
        return logger

    def execute(self, prompt: str, provider: Optional[str] = None, **kwargs) -> AgentResponse:
        """Execute agent request with specified or default provider.
        
        Args:
            prompt: User prompt/query
            provider: Optional provider name (openai, google_gemini, xai_grok, generic_http)
            **kwargs: Additional parameters for the provider
            
        Returns:
            AgentResponse object with results and metadata
        """
        start_time = datetime.now()
        provider_name = provider or self.config.get("agent.default_provider")
        
        self.logger.info(f"Executing request with provider: {provider_name}")
        
        try:
            response = self._try_provider(provider_name, prompt, **kwargs)
            if response.success:
                return response
            
            self.logger.warning(f"Provider {provider_name} failed, trying fallbacks")
            response = self._try_fallback_providers(provider_name, prompt, **kwargs)
            return response
            
        except Exception as e:
            self.logger.error(f"Agent execution failed: {e}")
            return AgentResponse(
                success=False,
                text="",
                provider="none",
                error=str(e),
                metadata={"execution_time": (datetime.now() - start_time).total_seconds()}
            )

    def _try_provider(self, provider_name: str, prompt: str, **kwargs) -> AgentResponse:
        """Try executing request with specific provider."""
        max_retries = self.config.get("agent.max_retries", 3)
        
        for attempt in range(max_retries):
            try:
                provider = self.provider_factory.get_provider(provider_name)
                self.current_provider = provider
                response = provider.execute(prompt, **kwargs)
                
                if response.success:
                    self.logger.info(f"Request succeeded with {provider_name} on attempt {attempt + 1}")
                    return response
                    
            except Exception as e:
                self.logger.warning(f"Provider {provider_name} attempt {attempt + 1} failed: {e}")
                if attempt == max_retries - 1:
                    return AgentResponse(
                        success=False,
                        text="",
                        provider=provider_name,
                        error=str(e)
                    )
        
        return AgentResponse(success=False, text="", provider=provider_name, error="Max retries exceeded")

    def _try_fallback_providers(self, failed_provider: str, prompt: str, **kwargs) -> AgentResponse:
        """Try fallback providers if primary fails."""
        fallback_providers = self.config.get("agent.fallback_providers", [])
        
        for fallback in fallback_providers:
            if fallback == failed_provider:
                continue
                
            self.logger.info(f"Trying fallback provider: {fallback}")
            response = self._try_provider(fallback, prompt, **kwargs)
            
            if response.success:
                return response
        
        return AgentResponse(
            success=False,
            text="",
            provider="none",
            error="All providers failed"
        )

    def list_providers(self) -> List[str]:
        """List all available and enabled providers."""
        return self.provider_factory.list_available_providers()

    def get_provider_status(self) -> Dict[str, Any]:
        """Get status of all configured providers."""
        providers = {}
        for provider_name in ["openai", "google_gemini", "xai_grok", "generic_http"]:
            config = self.config.get_provider_config(provider_name)
            providers[provider_name] = {
                "enabled": config.get("enabled", False),
                "configured": bool(config.get("api_key", "")),
            }
        return providers
