"""Nexora AI Agent Desktop GUI."""

import sys
import os
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent.parent))

from PySide6.QtWidgets import (
    QApplication, QMainWindow, QWidget, QVBoxLayout, QHBoxLayout,
    QTextEdit, QPushButton, QComboBox, QLabel, QStatusBar, QMessageBox
)
from PySide6.QtCore import Qt, QThread, Signal
from PySide6.QtGui import QFont

from agent.nexora_agent import NexoraAgent
from agent.nexora_agent.config.config_loader import ConfigLoader


class AgentWorker(QThread):
    """Worker thread for agent execution."""
    
    finished = Signal(object)
    error = Signal(str)
    
    def __init__(self, agent, prompt, provider):
        super().__init__()
        self.agent = agent
        self.prompt = prompt
        self.provider = provider
    
    def run(self):
        """Execute agent request in background."""
        try:
            response = self.agent.execute(self.prompt, provider=self.provider)
            self.finished.emit(response)
        except Exception as e:
            self.error.emit(str(e))


class NexoraGUI(QMainWindow):
    """Main GUI window for Nexora AI Agent."""
    
    def __init__(self):
        super().__init__()
        self.agent = None
        self.worker = None
        self.init_ui()
        self.init_agent()
    
    def init_ui(self):
        """Initialize user interface."""
        self.setWindowTitle("Nexora AI Agent")
        self.setGeometry(100, 100, 900, 700)
        
        central_widget = QWidget()
        self.setCentralWidget(central_widget)
        
        layout = QVBoxLayout(central_widget)
        layout.setSpacing(10)
        layout.setContentsMargins(20, 20, 20, 20)
        
        title_label = QLabel("Nexora AI Agent Console")
        title_font = QFont()
        title_font.setPointSize(16)
        title_font.setBold(True)
        title_label.setFont(title_font)
        title_label.setAlignment(Qt.AlignCenter)
        layout.addWidget(title_label)
        
        provider_layout = QHBoxLayout()
        provider_label = QLabel("Provider:")
        provider_label.setFixedWidth(80)
        self.provider_combo = QComboBox()
        self.provider_combo.addItems(["openai", "google_gemini", "xai_grok", "generic_http"])
        self.provider_combo.setFixedWidth(200)
        provider_layout.addWidget(provider_label)
        provider_layout.addWidget(self.provider_combo)
        provider_layout.addStretch()
        layout.addLayout(provider_layout)
        
        prompt_label = QLabel("Prompt:")
        layout.addWidget(prompt_label)
        
        self.prompt_input = QTextEdit()
        self.prompt_input.setPlaceholderText("Enter your prompt here...")
        self.prompt_input.setMaximumHeight(120)
        layout.addWidget(self.prompt_input)
        
        button_layout = QHBoxLayout()
        self.execute_button = QPushButton("Execute")
        self.execute_button.setFixedWidth(120)
        self.execute_button.clicked.connect(self.execute_agent)
        button_layout.addStretch()
        button_layout.addWidget(self.execute_button)
        layout.addLayout(button_layout)
        
        response_label = QLabel("Response:")
        layout.addWidget(response_label)
        
        self.response_display = QTextEdit()
        self.response_display.setReadOnly(True)
        self.response_display.setPlaceholderText("Agent response will appear here...")
        layout.addWidget(self.response_display)
        
        self.status_bar = QStatusBar()
        self.setStatusBar(self.status_bar)
        self.status_bar.showMessage("Ready")
    
    def init_agent(self):
        """Initialize the Nexora Agent."""
        try:
            config = ConfigLoader()
            self.agent = NexoraAgent(config)
            self.status_bar.showMessage("Agent initialized successfully")
        except Exception as e:
            self.status_bar.showMessage(f"Error initializing agent: {e}")
            QMessageBox.critical(self, "Initialization Error", 
                               f"Failed to initialize agent:\n{e}")
    
    def execute_agent(self):
        """Execute agent with current prompt and provider."""
        if not self.agent:
            QMessageBox.warning(self, "Agent Not Ready", 
                              "Agent is not initialized. Please check configuration.")
            return
        
        prompt = self.prompt_input.toPlainText().strip()
        if not prompt:
            QMessageBox.warning(self, "Empty Prompt", 
                              "Please enter a prompt before executing.")
            return
        
        provider = self.provider_combo.currentText()
        
        self.execute_button.setEnabled(False)
        self.status_bar.showMessage(f"Running with {provider}...")
        self.response_display.clear()
        self.response_display.setPlainText("Processing...")
        
        self.worker = AgentWorker(self.agent, prompt, provider)
        self.worker.finished.connect(self.on_execution_finished)
        self.worker.error.connect(self.on_execution_error)
        self.worker.start()
    
    def on_execution_finished(self, response):
        """Handle successful agent execution."""
        self.execute_button.setEnabled(True)
        
        if response.success:
            output = f"Provider: {response.provider}\n"
            output += f"Timestamp: {response.timestamp}\n"
            if response.metadata:
                output += f"Execution Time: {response.metadata.get('execution_time', 'N/A')}s\n"
                if 'tokens_used' in response.metadata:
                    output += f"Tokens Used: {response.metadata['tokens_used']}\n"
            output += f"\n{'-' * 60}\n\n"
            output += response.text
            
            self.response_display.setPlainText(output)
            self.status_bar.showMessage("Execution completed successfully")
        else:
            error_msg = f"Error: {response.error}\n\n"
            error_msg += f"Provider: {response.provider}\n"
            error_msg += "Please check your configuration and try again."
            self.response_display.setPlainText(error_msg)
            self.status_bar.showMessage("Execution failed")
    
    def on_execution_error(self, error_msg):
        """Handle execution error."""
        self.execute_button.setEnabled(True)
        self.response_display.setPlainText(f"Error: {error_msg}")
        self.status_bar.showMessage("Error occurred")
        QMessageBox.critical(self, "Execution Error", 
                           f"An error occurred:\n{error_msg}")


def main():
    """Main entry point for the GUI application."""
    app = QApplication(sys.argv)
    app.setStyle("Fusion")
    
    window = NexoraGUI()
    window.show()
    
    sys.exit(app.exec())


if __name__ == "__main__":
    main()
