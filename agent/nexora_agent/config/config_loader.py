"""Configuration loader for Nexora Agent."""

import os
import yaml
from pathlib import Path
from typing import Dict, Any, Optional, List
from dotenv import load_dotenv
from pydantic import BaseModel, Field, validator, ValidationError


class OpenAIConfig(BaseModel):
    api_key: str = ""
    model: str = "gpt-4"
    enabled: bool = True

    @validator("api_key")
    def require_key_when_enabled(cls, v: str, values: Dict[str, Any]) -> str:
        if values.get("enabled", False) and not v:
            raise ValueError("OPENAI_API_KEY is required when OpenAI is enabled")
        return v


class GoogleGeminiConfig(BaseModel):
    api_key: str = ""
    model: str = "gemini-pro"
    enabled: bool = True

    @validator("api_key")
    def require_key_when_enabled(cls, v: str, values: Dict[str, Any]) -> str:
        if values.get("enabled", False) and not v:
            raise ValueError("GOOGLE_API_KEY is required when Google Gemini is enabled")
        return v


class XAIGrokConfig(BaseModel):
    api_key: str = ""
    endpoint: str = "https://api.x.ai/v1"
    model: str = "grok-1"
    enabled: bool = False

    @validator("api_key")
    def require_key_when_enabled(cls, v: str, values: Dict[str, Any]) -> str:
        if values.get("enabled", False) and not v:
            raise ValueError("XAI_API_KEY is required when xAI Grok is enabled")
        return v

    @validator("endpoint")
    def https_only(cls, v: str) -> str:
        if v and not v.startswith("https://"):
            raise ValueError("XAI endpoint must use HTTPS")
        return v


class GenericHTTPConfig(BaseModel):
    api_key: str = ""
    endpoint: str = ""
    enabled: bool = False

    @validator("endpoint")
    def https_and_nonempty_when_enabled(cls, v: str, values: Dict[str, Any]) -> str:
        enabled = values.get("enabled", False)
        if enabled:
            if not v:
                raise ValueError("GENERIC_ENDPOINT is required when Generic HTTP provider is enabled")
            if not v.startswith("https://"):
                raise ValueError("Generic HTTP endpoint must use HTTPS")
        return v


class ProvidersConfigModel(BaseModel):
    openai: OpenAIConfig
    google_gemini: GoogleGeminiConfig
    xai_grok: XAIGrokConfig
    generic_http: GenericHTTPConfig


class AgentConfigModel(BaseModel):
    default_provider: str = Field(default="openai")
    fallback_providers: List[str] = Field(default_factory=lambda: ["google_gemini", "xai_grok"])
    max_retries: int = Field(default=3, ge=0, le=10)
    timeout: int = Field(default=30, ge=1, le=300)

    @validator("default_provider")
    def check_default_provider(cls, v: str) -> str:
        allowed = {"openai", "google_gemini", "xai_grok", "generic_http"}
        if v not in allowed:
            raise ValueError(f"Invalid default provider: {v}")
        return v

    @validator("fallback_providers")
    def check_fallbacks(cls, v: List[str]) -> List[str]:
        allowed = {"openai", "google_gemini", "xai_grok", "generic_http"}
        invalid = [p for p in v if p not in allowed]
        if invalid:
            raise ValueError(f"Invalid fallback providers: {invalid}")
        return v


class LoggingConfigModel(BaseModel):
    level: str = Field(default="INFO")
    format: str = Field(default="%(asctime)s - %(name)s - %(levelname)s - %(message)s")

    @validator("level")
    def validate_level(cls, v: str) -> str:
        allowed = {"CRITICAL", "ERROR", "WARNING", "INFO", "DEBUG"}
        upper = v.upper()
        if upper not in allowed:
            raise ValueError(f"Invalid log level: {v}")
        return upper


class ConfigModel(BaseModel):
    providers: ProvidersConfigModel
    agent: AgentConfigModel
    logging: LoggingConfigModel


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
        """Load configuration from file and environment, then validate schema."""
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
                "fallback_providers": [p for p in os.getenv("FALLBACK_PROVIDERS", "google_gemini,xai_grok").split(",") if p],
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

        # Validate schema
        try:
            model = ConfigModel(
                providers=ProvidersConfigModel(**config["providers"]),
                agent=AgentConfigModel(**config["agent"]),
                logging=LoggingConfigModel(**config["logging"]),
            )
        except ValidationError as e:
            raise ValueError(f"Configuration validation error: {e}")

        # Normalize log level back into dict
        config["logging"]["level"] = model.logging.level
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
