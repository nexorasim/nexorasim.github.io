"""Generic HTTP provider for custom AI endpoints."""

import logging
import requests
from typing import Dict, Any
from datetime import datetime

from .base import BaseProvider, AgentResponse


class GenericHTTPProvider(BaseProvider):
    """Generic HTTP provider for custom AI API endpoints."""

    def __init__(self, config: Dict[str, Any]):
        super().__init__(config)
        self.endpoint = config.get("endpoint", "")
        self.logger = logging.getLogger("nexora_agent.providers.generic_http")

    def execute(self, prompt: str, **kwargs) -> AgentResponse:
        """Execute request to generic HTTP endpoint."""
        start_time = datetime.now()
        
        if not self.is_configured() or not self.endpoint:
            return AgentResponse(
                success=False,
                text="",
                provider="generic_http",
                error="Generic HTTP provider not configured or endpoint missing"
            )
        
        try:
            timeout = kwargs.get("timeout", 30)
            method = kwargs.get("method", "POST")
            
            headers = {
                "Authorization": f"Bearer {self.api_key}",
                "Content-Type": "application/json",
            }
            
            custom_headers = kwargs.get("headers", {})
            headers.update(custom_headers)
            
            payload = kwargs.get("payload", {
                "prompt": prompt,
                "temperature": kwargs.get("temperature", 0.7),
                "max_tokens": kwargs.get("max_tokens", 1000),
            })
            
            if method.upper() == "POST":
                response = requests.post(
                    self.endpoint,
                    json=payload,
                    headers=headers,
                    timeout=timeout
                )
            else:
                response = requests.get(
                    self.endpoint,
                    params=payload,
                    headers=headers,
                    timeout=timeout
                )
            
            response.raise_for_status()
            data = response.json()
            
            text = data.get("text", data.get("response", data.get("output", "")))
            execution_time = (datetime.now() - start_time).total_seconds()
            
            return AgentResponse(
                success=True,
                text=text,
                provider="generic_http",
                metadata={
                    "endpoint": self.endpoint,
                    "execution_time": execution_time,
                    "status_code": response.status_code,
                }
            )
            
        except Exception as e:
            self.logger.error(f"Generic HTTP execution failed: {e}")
            return AgentResponse(
                success=False,
                text="",
                provider="generic_http",
                error=str(e)
            )
