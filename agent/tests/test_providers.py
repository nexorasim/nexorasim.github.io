"""Tests for provider implementations."""

import pytest
from nexora_agent.providers.base import BaseProvider, AgentResponse
from nexora_agent.providers.openai_provider import OpenAIProvider
from nexora_agent.providers.google_gemini import GoogleGeminiProvider
from nexora_agent.providers.xai_grok import XAIGrokProvider
from nexora_agent.providers.generic_http import GenericHTTPProvider


def test_base_provider_is_abstract():
    """Test that BaseProvider cannot be instantiated directly."""
    with pytest.raises(TypeError):
        BaseProvider({})


def test_openai_provider_initialization():
    """Test OpenAI provider initialization."""
    config = {
        "api_key": "test_key",
        "model": "gpt-4",
        "enabled": True
    }
    provider = OpenAIProvider(config)
    
    assert provider.api_key == "test_key"
    assert provider.model == "gpt-4"
    assert provider.enabled is True


def test_gemini_provider_initialization():
    """Test Google Gemini provider initialization."""
    config = {
        "api_key": "test_key",
        "model": "gemini-pro",
        "enabled": True
    }
    provider = GoogleGeminiProvider(config)
    
    assert provider.api_key == "test_key"
    assert provider.model_name == "gemini-pro"
    assert provider.enabled is True


def test_xai_provider_initialization():
    """Test xAI Grok provider initialization."""
    config = {
        "api_key": "test_key",
        "endpoint": "https://api.x.ai/v1",
        "model": "grok-1",
        "enabled": True
    }
    provider = XAIGrokProvider(config)
    
    assert provider.api_key == "test_key"
    assert provider.endpoint == "https://api.x.ai/v1"
    assert provider.model == "grok-1"
    assert provider.enabled is True


def test_generic_provider_initialization():
    """Test Generic HTTP provider initialization."""
    config = {
        "api_key": "test_key",
        "endpoint": "https://api.example.com/v1",
        "enabled": True
    }
    provider = GenericHTTPProvider(config)
    
    assert provider.api_key == "test_key"
    assert provider.endpoint == "https://api.example.com/v1"
    assert provider.enabled is True


def test_provider_is_configured():
    """Test provider configuration validation."""
    # Configured provider
    config1 = {
        "api_key": "test_key",
        "enabled": True
    }
    provider1 = OpenAIProvider(config1)
    assert provider1.is_configured() is True
    
    # Not configured (no API key)
    config2 = {
        "api_key": "",
        "enabled": True
    }
    provider2 = OpenAIProvider(config2)
    assert provider2.is_configured() is False
    
    # Not configured (disabled)
    config3 = {
        "api_key": "test_key",
        "enabled": False
    }
    provider3 = OpenAIProvider(config3)
    assert provider3.is_configured() is False


def test_provider_validation():
    """Test provider validate_config method."""
    config = {
        "api_key": "test_key",
        "enabled": True
    }
    provider = OpenAIProvider(config)
    
    assert provider.validate_config() is True
    
    # Test with missing API key
    provider.api_key = ""
    assert provider.validate_config() is False
