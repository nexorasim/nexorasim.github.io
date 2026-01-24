"""Tests for configuration management."""

import os
import pytest
from nexora_agent.config import ConfigLoader


def test_config_loader_initialization():
    """Test ConfigLoader can be initialized."""
    config = ConfigLoader()
    assert config is not None
    assert config.config is not None


def test_config_structure():
    """Test configuration has expected structure."""
    config = ConfigLoader()
    
    assert 'providers' in config.config
    assert 'agent' in config.config
    assert 'logging' in config.config
    
    # Test providers
    providers = config.config['providers']
    assert 'openai' in providers
    assert 'google_gemini' in providers
    assert 'xai_grok' in providers
    assert 'generic_http' in providers
    
    # Test agent config
    agent = config.config['agent']
    assert 'default_provider' in agent
    assert 'fallback_providers' in agent
    assert 'max_retries' in agent
    assert 'timeout' in agent


def test_config_get_method():
    """Test config.get() method with dot notation."""
    config = ConfigLoader()
    
    # Test simple key
    assert config.get('providers') is not None
    
    # Test nested key
    assert config.get('agent.default_provider') is not None
    assert config.get('providers.openai.model') is not None
    
    # Test with default value
    assert config.get('nonexistent.key', 'default') == 'default'


def test_get_provider_config():
    """Test getting provider-specific configuration."""
    config = ConfigLoader()
    
    openai_config = config.get_provider_config('openai')
    assert isinstance(openai_config, dict)
    assert 'api_key' in openai_config
    assert 'model' in openai_config
    assert 'enabled' in openai_config
    
    gemini_config = config.get_provider_config('google_gemini')
    assert isinstance(gemini_config, dict)
    assert 'api_key' in gemini_config


def test_environment_variable_loading():
    """Test that environment variables are loaded."""
    # Set test environment variable
    os.environ['OPENAI_API_KEY'] = 'test_key_123'
    os.environ['DEFAULT_PROVIDER'] = 'openai'
    
    config = ConfigLoader()
    
    # Check if env vars are loaded
    openai_key = config.get('providers.openai.api_key')
    default_provider = config.get('agent.default_provider')
    
    # Clean up
    del os.environ['OPENAI_API_KEY']
    del os.environ['DEFAULT_PROVIDER']
    
    assert openai_key == 'test_key_123'
    assert default_provider == 'openai'
