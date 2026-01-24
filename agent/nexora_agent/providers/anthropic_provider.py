"""
Anthropic Claude provider implementation
"""

import requests
from typing import Dict, Any, Optional
from .base import BaseProvider, AgentResponse


class AnthropicProvider(BaseProvider):
    """Anthropic Claude provider"""
    
    def __init__(self, config: Dict[str, Any]):
        super().__init__(config)
        self.base_url = "https://api.anthropic.com/v1"
        self.headers = {
            "x-api-key": self.api_key,
            "Content-Type": "application/json",
            "anthropic-version": "2023-06-01",
            "User-Agent": "NexoraSIM-Agent/1.0.0"
        }
    
    def execute(self, prompt: str, **kwargs) -> AgentResponse:
        """Execute request using Anthropic API"""
        self.validate_request(prompt)
        
        model = kwargs.get('model', self.config.get('model', 'claude-3-sonnet-20240229'))
        temperature = kwargs.get('temperature', self.config.get('temperature', 0.7))
        max_tokens = kwargs.get('max_tokens', self.config.get('max_tokens', 2000))
        
        payload = {
            "model": model,
            "max_tokens": max_tokens,
            "temperature": temperature,
            "messages": [
                {
                    "role": "user",
                    "content": prompt
                }
            ]
        }
        
        return self._execute_with_retry(
            lambda: self._make_request(payload),
            max_retries=self.config.get('retries', 3)
        )
    
    def _make_request(self, payload: Dict[str, Any]) -> AgentResponse:
        """Make HTTP request to Anthropic API"""
        response = requests.post(
            f"{self.base_url}/messages",
            json=payload,
            headers=self.headers,
            timeout=self.config.get('timeout', 30)
        )
        
        if response.status_code != 200:
            raise Exception(f"Anthropic API error: {response.status_code} - {response.text}")
        
        data = response.json()
        content = data.get('content', [])
        
        if not content or not content[0].get('text'):
            raise Exception("No content in Anthropic response")
        
        return AgentResponse(
            success=True,
            text=content[0]['text'].strip(),
            provider="anthropic",
            model=data.get('model'),
            metadata={
                'tokens_used': data.get('usage', {}).get('output_tokens', 0) + data.get('usage', {}).get('input_tokens', 0),
                'input_tokens': data.get('usage', {}).get('input_tokens'),
                'output_tokens': data.get('usage', {}).get('output_tokens'),
                'stop_reason': data.get('stop_reason'),
                'response_id': data.get('id'),
                'stop_sequence': data.get('stop_sequence')
            }
        )
    
    def get_available_models(self) -> list:
        """Get list of available Anthropic models"""
        return [
            'claude-3-opus-20240229',
            'claude-3-sonnet-20240229',
            'claude-3-haiku-20240307',
            'claude-2.1',
            'claude-2.0',
            'claude-instant-1.2'
        ]