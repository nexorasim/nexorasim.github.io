# Nexora AI Agent Desktop GUI

Cross-platform desktop application for Nexora AI Agent.

## Installation

```bash
cd gui
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
pip install -r ../agent/requirements.txt
```

## Running

```bash
python main.py
```

## Building with PyInstaller

### Windows

```bash
pyinstaller nexora_agent.spec
```

Binary will be in `dist/NexoraAgent/NexoraAgent.exe`

### macOS

```bash
pyinstaller nexora_agent.spec
```

App bundle will be in `dist/NexoraAgent.app`

### Linux

```bash
pyinstaller nexora_agent.spec
```

Binary will be in `dist/NexoraAgent/NexoraAgent`

## Configuration

The GUI uses the same configuration as the agent core. Ensure `.env` is properly configured in the `agent/` directory.

## Features

- Provider selection (OpenAI, Google Gemini, xAI Grok, Generic HTTP)
- Real-time execution with progress indication
- Response display with metadata
- Cross-platform support
- Standalone executable packaging
