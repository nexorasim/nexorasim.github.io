"""
Groq provider implementation for fast inference
"""

import requests
from typing import Dict, Any, Optional
from .base import BaseProvider, AgentResponse


class GroqProvider(BaseProvider):
    """Groq provider for fast LLM inference"""
    
    def __init__(self, config: Dict[str, Any]):
        super().__init__(config)
        self.base_url = "https://api.groq.com/openai/v1"
        self.headers = {
            "Authorization": f"Bearer {self.api_key}",
            "Content-Type": "application/json",
            "User-Agent": "NexoraSIM-Agent/1.0.0"
        }
    
    def execute(self, prompt: str, **kwargs) -> AgentResponse:
        """Execute request using Groq API"""
        self.validate_request(prompt)
        
        model = kwargs.get('model', self.config.get('model', 'mixtral-8x7b-32768'))
        temperature = kwargs.get('temperature', self.config.get('temperature', 0.7))
        max_tokens = kwargs.get('max_tokens', self.config.get('max_tokens', 2000))
        
        payload = {
            "model": model,
            "messages": [
                {
                    "role": "user",
                    "content": prompt
                }
            ],
            "temperature": temperature,
            "max_tokens": max_tokens,
            "stream": False
        }
        
        return self._execute_with_retry(
            lambda: self._make_request(payload),
            max_retries=self.config.get('retries', 3)
        )
    
    def _make_request(self, payload: Dict[str, Any]) -> AgentResponse:
        """Make HTTP request to Groq API"""
        response = requests.post(
            f"{self.base_url}/chat/completions",
            json=payload,
            headers=self.headers,
            timeout=self.config.get('timeout', 30)
        )
        
        if response.status_code != 200:
            raise Exception(f"Groq API error: {response.status_code} - {response.text}")
        
        data = response.json()
        choice = data.get('choices', [{}])[0]
        message = choice.get('message', {})
        
        if not message.get('content'):
            raise Exception("No content in Groq response")
        
        return AgentResponse(
            success=True,
            text=message['content'].strip(),
            provider="groq",
            model=data.get('model'),
            metadata={
                'tokens_used': data.get('usage', {}).get('total_tokens'),
                'prompt_tokens': data.get('usage', {}).get('prompt_tokens'),
                'completion_tokens': data.get('usage', {}).get('completion_tokens'),
                'finish_reason': choice.get('finish_reason'),
                'response_id': data.get('id'),
                'system_fingerprint': data.get('system_fingerprint')
            }
        )
    
    def get_available_models(self) -> list:
        """Get list of available Groq models"""
        try:
            response = requests.get(
                f"{self.base_url}/models",
                headers=self.headers,
                timeout=10
            )
            
            if response.status_code == 200:
                data = response.json()
                return [model['id'] for model in data.get('data', [])]
            
        except Exception:
            pass
        
        # Return known models if API call fails
        return [
            'mixtral-8x7b-32768',
            'llama2-70b-4096',
            'gemma-7b-it',
            'llama3-8b-8192',
            'llama3-70b-8192'
        ]