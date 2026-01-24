"""Nexora AI Agent Core - Multi-provider AI orchestration."""

__version__ = "1.0.0"
__author__ = "NexoraSIM"

from .core.agent import NexoraAgent
from .providers.base import BaseProvider

__all__ = ["NexoraAgent", "BaseProvider"]
