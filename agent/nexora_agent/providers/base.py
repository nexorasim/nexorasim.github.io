"""Base provider interface."""

from abc import ABC, abstractmethod
from dataclasses import dataclass
from typing import Optional, Dict, Any
from datetime import datetime


@dataclass
class AgentResponse:
    """Standardized response from any provider."""
    success: bool
    text: str
    provider: str
    error: Optional[str] = None
    metadata: Optional[Dict[str, Any]] = None
    timestamp: datetime = None
    
    def __post_init__(self):
        if self.timestamp is None:
            self.timestamp = datetime.now()
        if self.metadata is None:
            self.metadata = {}


class BaseProvider(ABC):
    """Abstract base class for all AI providers."""

    def __init__(self, config: Dict[str, Any]):
        """Initialize provider with configuration.
        
        Args:
            config: Provider-specific configuration dictionary
        """
        self.config = config
        self.api_key = config.get("api_key", "")
        self.enabled = config.get("enabled", False)

    @abstractmethod
    def execute(self, prompt: str, **kwargs) -> AgentResponse:
        """Execute request to AI provider.
        
        Args:
            prompt: User prompt/query
            **kwargs: Additional provider-specific parameters
            
        Returns:
            AgentResponse with results and metadata
        """
        pass

    def is_configured(self) -> bool:
        """Check if provider is properly configured."""
        return bool(self.api_key) and self.enabled

    def validate_config(self) -> bool:
        """Validate provider configuration."""
        if not self.enabled:
            return False
        if not self.api_key:
            return False
        return True
