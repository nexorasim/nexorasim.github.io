"""OpenAI provider implementation."""

import logging
from typing import Dict, Any
from datetime import datetime

from .base import BaseProvider, AgentResponse

try:
    from openai import OpenAI
    OPENAI_AVAILABLE = True
except ImportError:
    OPENAI_AVAILABLE = False


class OpenAIProvider(BaseProvider):
    """OpenAI GPT provider implementation."""

    def __init__(self, config: Dict[str, Any]):
        super().__init__(config)
        self.model = config.get("model", "gpt-4")
        self.logger = logging.getLogger("nexora_agent.providers.openai")
        
        if not OPENAI_AVAILABLE:
            self.logger.warning("OpenAI library not installed")
            self.client = None
        elif self.is_configured():
            self.client = OpenAI(api_key=self.api_key)
        else:
            self.client = None

    def execute(self, prompt: str, **kwargs) -> AgentResponse:
        """Execute request to OpenAI API."""
        start_time = datetime.now()
        
        if not self.is_configured():
            return AgentResponse(
                success=False,
                text="",
                provider="openai",
                error="OpenAI provider not configured"
            )
        
        if not OPENAI_AVAILABLE:
            return AgentResponse(
                success=False,
                text="",
                provider="openai",
                error="OpenAI library not installed. Install with: pip install openai"
            )
        
        try:
            model = kwargs.get("model", self.model)
            temperature = kwargs.get("temperature", 0.7)
            max_tokens = kwargs.get("max_tokens", 1000)
            
            response = self.client.chat.completions.create(
                model=model,
                messages=[
                    {"role": "user", "content": prompt}
                ],
                temperature=temperature,
                max_tokens=max_tokens
            )
            
            text = response.choices[0].message.content
            execution_time = (datetime.now() - start_time).total_seconds()
            
            return AgentResponse(
                success=True,
                text=text,
                provider="openai",
                metadata={
                    "model": model,
                    "execution_time": execution_time,
                    "tokens_used": response.usage.total_tokens if response.usage else 0,
                }
            )
            
        except Exception as e:
            self.logger.error(f"OpenAI execution failed: {e}")
            return AgentResponse(
                success=False,
                text="",
                provider="openai",
                error=str(e)
            )
