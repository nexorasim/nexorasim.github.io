"""Tests for Nexora Agent core."""

import pytest
from nexora_agent import NexoraAgent
from nexora_agent.config import ConfigLoader
from nexora_agent.providers.base import AgentResponse


def test_agent_initialization():
    """Test agent can be initialized."""
    agent = NexoraAgent()
    assert agent is not None
    assert agent.config is not None


def test_config_loader():
    """Test configuration loading."""
    config = ConfigLoader()
    assert config.config is not None
    assert 'providers' in config.config
    assert 'agent' in config.config


def test_provider_status():
    """Test getting provider status."""
    agent = NexoraAgent()
    status = agent.get_provider_status()
    
    assert isinstance(status, dict)
    assert 'openai' in status
    assert 'google_gemini' in status
    assert 'xai_grok' in status
    assert 'generic_http' in status


def test_list_providers():
    """Test listing available providers."""
    agent = NexoraAgent()
    providers = agent.list_providers()
    
    assert isinstance(providers, list)


def test_agent_response_structure():
    """Test AgentResponse dataclass structure."""
    response = AgentResponse(
        success=True,
        text="Test response",
        provider="test_provider"
    )
    
    assert response.success is True
    assert response.text == "Test response"
    assert response.provider == "test_provider"
    assert response.timestamp is not None
    assert response.metadata is not None


@pytest.mark.skip(reason="Requires valid API keys")
def test_execute_with_openai():
    """Test execution with OpenAI provider."""
    agent = NexoraAgent()
    response = agent.execute("Say hello", provider="openai")
    
    if response.success:
        assert response.text
        assert response.provider == "openai"
        assert response.metadata is not None


@pytest.mark.skip(reason="Requires valid API keys")
def test_execute_with_gemini():
    """Test execution with Google Gemini provider."""
    agent = NexoraAgent()
    response = agent.execute("Say hello", provider="google_gemini")
    
    if response.success:
        assert response.text
        assert response.provider == "google_gemini"
        assert response.metadata is not None


def test_execute_with_invalid_provider():
    """Test execution with invalid provider name."""
    agent = NexoraAgent()
    
    with pytest.raises(ValueError):
        agent.execute("Test prompt", provider="invalid_provider")
