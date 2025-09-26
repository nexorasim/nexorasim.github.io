<template>
  <div class="compliance-assistant">
    <div class="chat-container" v-if="showChat">
      <div class="chat-header">
        <h3>GSMA Compliance Assistant</h3>
        <button @click="toggleChat" class="close-btn">×</button>
      </div>
      <div class="chat-messages" ref="messages">
        <div v-for="message in messages" :key="message.id" :class="message.type">
          {{ message.text }}
        </div>
      </div>
      <div class="chat-input">
        <input v-model="userInput" @keyup.enter="sendMessage" placeholder="Ask about GSMA compliance...">
        <button @click="sendMessage">Send</button>
      </div>
    </div>
    <button v-else @click="toggleChat" class="chat-toggle">
      GSMA Assistant
    </button>
  </div>
</template>

<script>
import { ref } from 'vue'
import { complianceService } from '../services/complianceService'

export default {
  name: 'ComplianceAssistant',
  setup() {
    const showChat = ref(false)
    const messages = ref([])
    const userInput = ref('')

    const toggleChat = () => {
      showChat.value = !showChat.value
      if (showChat.value && messages.value.length === 0) {
        messages.value.push({
          id: 1,
          type: 'assistant',
          text: 'Hello! I can help with GSMA compliance questions and EAL6+ device certification.'
        })
      }
    }

    const sendMessage = async () => {
      if (!userInput.value.trim()) return

      messages.value.push({
        id: Date.now(),
        type: 'user',
        text: userInput.value
      })

      const query = userInput.value
      userInput.value = ''

      try {
        const response = await complianceService.queryCompliance(query)
        messages.value.push({
          id: Date.now() + 1,
          type: 'assistant',
          text: response.answer
        })
      } catch (error) {
        messages.value.push({
          id: Date.now() + 1,
          type: 'assistant',
          text: 'Error retrieving compliance information. Please try again.'
        })
      }
    }

    return {
      showChat,
      messages,
      userInput,
      toggleChat,
      sendMessage
    }
  }
}
</script>

<style scoped>
.compliance-assistant {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
}

.chat-container {
  width: 350px;
  height: 400px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  display: flex;
  flex-direction: column;
}

.chat-header {
  padding: 15px;
  background: #1976d2;
  color: white;
  border-radius: 8px 8px 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.chat-messages {
  flex: 1;
  padding: 15px;
  overflow-y: auto;
}

.user {
  text-align: right;
  margin: 10px 0;
  padding: 8px 12px;
  background: #e3f2fd;
  border-radius: 12px;
}

.assistant {
  text-align: left;
  margin: 10px 0;
  padding: 8px 12px;
  background: #f5f5f5;
  border-radius: 12px;
}

.chat-input {
  padding: 15px;
  border-top: 1px solid #eee;
  display: flex;
  gap: 10px;
}

.chat-input input {
  flex: 1;
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.chat-toggle {
  padding: 12px 20px;
  background: #1976d2;
  color: white;
  border: none;
  border-radius: 25px;
  cursor: pointer;
}

.close-btn {
  background: none;
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
}
</style>