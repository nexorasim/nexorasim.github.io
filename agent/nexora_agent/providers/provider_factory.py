"""Provider factory for creating provider instances."""

import logging
from typing import Dict, Any

from .base import BaseProvider
from .openai_provider import OpenAIProvider
from .google_gemini import GoogleGeminiProvider
from .xai_grok import XAIGrokProvider
from .generic_http import GenericHTTPProvider


class ProviderFactory:
    """Factory for creating and managing provider instances."""

    PROVIDER_MAP = {
        "openai": OpenAIProvider,
        "google_gemini": GoogleGeminiProvider,
        "xai_grok": XAIGrokProvider,
        "generic_http": GenericHTTPProvider,
    }

    def __init__(self, config):
        """Initialize provider factory with configuration.
        
        Args:
            config: ConfigLoader instance
        """
        self.config = config
        self.logger = logging.getLogger("nexora_agent.provider_factory")
        self._provider_cache: Dict[str, BaseProvider] = {}

    def get_provider(self, provider_name: str) -> BaseProvider:
        """Get or create provider instance.
        
        Args:
            provider_name: Name of the provider
            
        Returns:
            Provider instance
            
        Raises:
            ValueError: If provider name is not recognized
        """
        if provider_name in self._provider_cache:
            return self._provider_cache[provider_name]
        
        if provider_name not in self.PROVIDER_MAP:
            raise ValueError(f"Unknown provider: {provider_name}. Available: {list(self.PROVIDER_MAP.keys())}")
        
        provider_config = self.config.get_provider_config(provider_name)
        provider_class = self.PROVIDER_MAP[provider_name]
        provider = provider_class(provider_config)
        
        self._provider_cache[provider_name] = provider
        self.logger.info(f"Created provider instance: {provider_name}")
        
        return provider

    def list_available_providers(self):
        """List all available and enabled providers."""
        available = []
        for provider_name in self.PROVIDER_MAP.keys():
            provider_config = self.config.get_provider_config(provider_name)
            if provider_config.get("enabled", False):
                available.append(provider_name)
        return available
