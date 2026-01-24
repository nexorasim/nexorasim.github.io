"""Configuration loader for Nexora Agent."""

import os
import yaml
from pathlib import Path
from typing import Dict, Any, Optional
from dotenv import load_dotenv


class ConfigLoader:
    """Load and manage configuration from environment and YAML files."""

    def __init__(self, config_path: Optional[str] = None):
        """Initialize configuration loader.
        
        Args:
            config_path: Optional path to YAML config file
        """
        load_dotenv()
        self.config_path = config_path or os.getenv("NEXORA_CONFIG_PATH", "config.yaml")
        self.config = self._load_config()

    def _load_config(self) -> Dict[str, Any]:
        """Load configuration from file and environment."""
        config = {
            "providers": {
                "openai": {
                    "api_key": os.getenv("OPENAI_API_KEY", ""),
                    "model": os.getenv("OPENAI_MODEL", "gpt-4"),
                    "enabled": os.getenv("OPENAI_ENABLED", "true").lower() == "true",
                },
                "google_gemini": {
                    "api_key": os.getenv("GOOGLE_API_KEY", ""),
                    "model": os.getenv("GEMINI_MODEL", "gemini-pro"),
                    "enabled": os.getenv("GEMINI_ENABLED", "true").lower() == "true",
                },
                "xai_grok": {
                    "api_key": os.getenv("XAI_API_KEY", ""),
                    "endpoint": os.getenv("XAI_ENDPOINT", "https://api.x.ai/v1"),
                    "model": os.getenv("XAI_MODEL", "grok-1"),
                    "enabled": os.getenv("XAI_ENABLED", "false").lower() == "true",
                },
                "generic_http": {
                    "api_key": os.getenv("GENERIC_API_KEY", ""),
                    "endpoint": os.getenv("GENERIC_ENDPOINT", ""),
                    "enabled": os.getenv("GENERIC_ENABLED", "false").lower() == "true",
                },
            },
            "agent": {
                "default_provider": os.getenv("DEFAULT_PROVIDER", "openai"),
                "fallback_providers": os.getenv("FALLBACK_PROVIDERS", "google_gemini,xai_grok").split(","),
                "max_retries": int(os.getenv("MAX_RETRIES", "3")),
                "timeout": int(os.getenv("REQUEST_TIMEOUT", "30")),
            },
            "logging": {
                "level": os.getenv("LOG_LEVEL", "INFO"),
                "format": "%(asctime)s - %(name)s - %(levelname)s - %(message)s",
            },
        }

        if Path(self.config_path).exists():
            with open(self.config_path, "r") as f:
                yaml_config = yaml.safe_load(f) or {}
                config = self._merge_configs(config, yaml_config)

        return config

    def _merge_configs(self, base: Dict, override: Dict) -> Dict:
        """Recursively merge override config into base config."""
        for key, value in override.items():
            if key in base and isinstance(base[key], dict) and isinstance(value, dict):
                base[key] = self._merge_configs(base[key], value)
            else:
                base[key] = value
        return base

    def get(self, key: str, default: Any = None) -> Any:
        """Get configuration value by dot-notation key."""
        keys = key.split(".")
        value = self.config
        for k in keys:
            if isinstance(value, dict):
                value = value.get(k)
            else:
                return default
        return value if value is not None else default

    def get_provider_config(self, provider: str) -> Dict[str, Any]:
        """Get configuration for specific provider."""
        return self.config.get("providers", {}).get(provider, {})
