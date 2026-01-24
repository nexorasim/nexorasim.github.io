"""Google Gemini provider implementation."""

import logging
from typing import Dict, Any
from datetime import datetime

from .base import BaseProvider, AgentResponse

try:
    import google.generativeai as genai
    GEMINI_AVAILABLE = True
except ImportError:
    GEMINI_AVAILABLE = False


class GoogleGeminiProvider(BaseProvider):
    """Google Gemini provider implementation."""

    def __init__(self, config: Dict[str, Any]):
        super().__init__(config)
        self.model_name = config.get("model", "gemini-pro")
        self.logger = logging.getLogger("nexora_agent.providers.gemini")
        
        if not GEMINI_AVAILABLE:
            self.logger.warning("Google Gemini library not installed")
            self.model = None
        elif self.is_configured():
            genai.configure(api_key=self.api_key)
            self.model = genai.GenerativeModel(self.model_name)
        else:
            self.model = None

    def execute(self, prompt: str, **kwargs) -> AgentResponse:
        """Execute request to Google Gemini API."""
        start_time = datetime.now()
        
        if not self.is_configured():
            return AgentResponse(
                success=False,
                text="",
                provider="google_gemini",
                error="Google Gemini provider not configured"
            )
        
        if not GEMINI_AVAILABLE:
            return AgentResponse(
                success=False,
                text="",
                provider="google_gemini",
                error="Google Gemini library not installed. Install with: pip install google-generativeai"
            )
        
        try:
            temperature = kwargs.get("temperature", 0.7)
            max_tokens = kwargs.get("max_tokens", 1000)
            timeout = kwargs.get("timeout", 30)
            
            generation_config = genai.types.GenerationConfig(
                temperature=temperature,
                max_output_tokens=max_tokens,
            )
            
            response = self.model.generate_content(
                prompt,
                generation_config=generation_config,
                request_options={"timeout": timeout},
            )
            
            text = response.text
            execution_time = (datetime.now() - start_time).total_seconds()
            
            return AgentResponse(
                success=True,
                text=text,
                provider="google_gemini",
                metadata={
                    "model": self.model_name,
                    "execution_time": execution_time,
                }
            )
            
        except Exception as e:
            self.logger.error(f"Google Gemini execution failed: {e}")
            return AgentResponse(
                success=False,
                text="",
                provider="google_gemini",
                error=str(e)
            )
