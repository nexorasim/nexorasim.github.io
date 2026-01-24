"""xAI Grok provider implementation."""

import logging
import requests
from typing import Dict, Any
from datetime import datetime

from .base import BaseProvider, AgentResponse


class XAIGrokProvider(BaseProvider):
    """xAI Grok provider implementation."""

    def __init__(self, config: Dict[str, Any]):
        super().__init__(config)
        self.endpoint = config.get("endpoint", "https://api.x.ai/v1")
        self.model = config.get("model", "grok-1")
        self.logger = logging.getLogger("nexora_agent.providers.xai_grok")

    def execute(self, prompt: str, **kwargs) -> AgentResponse:
        """Execute request to xAI Grok API."""
        start_time = datetime.now()
        
        if not self.is_configured():
            return AgentResponse(
                success=False,
                text="",
                provider="xai_grok",
                error="xAI Grok provider not configured"
            )
        
        try:
            model = kwargs.get("model", self.model)
            temperature = kwargs.get("temperature", 0.7)
            max_tokens = kwargs.get("max_tokens", 1000)
            timeout = kwargs.get("timeout", 30)
            
            headers = {
                "Authorization": f"Bearer {self.api_key}",
                "Content-Type": "application/json",
            }
            
            payload = {
                "model": model,
                "messages": [
                    {"role": "user", "content": prompt}
                ],
                "temperature": temperature,
                "max_tokens": max_tokens,
            }
            
            response = requests.post(
                f"{self.endpoint}/chat/completions",
                json=payload,
                headers=headers,
                timeout=timeout
            )
            
            response.raise_for_status()
            data = response.json()
            
            text = data.get("choices", [{}])[0].get("message", {}).get("content", "")
            execution_time = (datetime.now() - start_time).total_seconds()
            
            return AgentResponse(
                success=True,
                text=text,
                provider="xai_grok",
                metadata={
                    "model": model,
                    "execution_time": execution_time,
                    "tokens_used": data.get("usage", {}).get("total_tokens", 0),
                }
            )
            
        except Exception as e:
            self.logger.error(f"xAI Grok execution failed: {e}")
            return AgentResponse(
                success=False,
                text="",
                provider="xai_grok",
                error=str(e)
            )
