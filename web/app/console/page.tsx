'use client'

import { useState, FormEvent } from 'react'
import Link from 'next/link'
import axios from 'axios'

interface AgentResponse {
  success: boolean
  text: string
  provider: string
  error?: string
  metadata?: {
    model?: string
    execution_time?: number
    tokens_used?: number
  }
  timestamp?: string
}

export default function Console() {
  const [provider, setProvider] = useState<string>('openai')
  const [prompt, setPrompt] = useState<string>('')
  const [response, setResponse] = useState<AgentResponse | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    
    if (!prompt.trim()) {
      setError('Please enter a prompt')
      return
    }

    setLoading(true)
    setError('')
    setResponse(null)

    try {
      const apiEndpoint = process.env.NEXT_PUBLIC_API_ENDPOINT || '/api/agent'
      
      const result = await axios.post<AgentResponse>(apiEndpoint, {
        prompt: prompt,
        provider: provider,
      })

      setResponse(result.data)
    } catch (err: any) {
      setError(
        err.response?.data?.error || 
        err.message || 
        'An error occurred while processing your request'
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-nexora-primary hover:text-blue-700">
                Nexora AI Agent
              </Link>
            </div>
            <div className="flex space-x-4">
              <Link 
                href="/" 
                className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition"
              >
                Home
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-6 text-gray-900" data-testid="console-title">Agent Console</h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="provider" className="block text-sm font-medium text-gray-700 mb-2">
                Provider
              </label>
              <select
                id="provider"
                value={provider}
                onChange={(e) => setProvider(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nexora-primary focus:border-transparent"
                data-testid="provider-select"
              >
                <option value="openai">OpenAI</option>
                <option value="google_gemini">Google Gemini</option>
                <option value="xai_grok">xAI Grok</option>
                <option value="generic_http">Generic HTTP</option>
              </select>
            </div>

            <div>
              <label htmlFor="prompt" className="block text-sm font-medium text-gray-700 mb-2">
                Prompt
              </label>
              <textarea
                id="prompt"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nexora-primary focus:border-transparent"
                placeholder="Enter your prompt here..."
                data-testid="prompt-input"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full px-6 py-3 bg-nexora-primary text-white font-semibold rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition"
              data-testid="execute-button"
            >
              {loading ? 'Processing...' : 'Execute'}
            </button>
          </form>

          {error && (
            <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg" data-testid="error-message">
              <p className="text-red-800">{error}</p>
            </div>
          )}

          {response && (
            <div className="mt-6 space-y-4" data-testid="response-container">
              <div className="border-t border-gray-200 pt-4">
                <h2 className="text-xl font-semibold mb-4">Response</h2>
                
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium">Provider:</span>
                      <span className="ml-2 text-gray-600" data-testid="response-provider">{response.provider}</span>
                    </div>
                    {response.metadata?.execution_time && (
                      <div>
                        <span className="font-medium">Execution Time:</span>
                        <span className="ml-2 text-gray-600">{response.metadata.execution_time.toFixed(2)}s</span>
                      </div>
                    )}
                    {response.metadata?.tokens_used && (
                      <div>
                        <span className="font-medium">Tokens Used:</span>
                        <span className="ml-2 text-gray-600">{response.metadata.tokens_used}</span>
                      </div>
                    )}
                    {response.metadata?.model && (
                      <div>
                        <span className="font-medium">Model:</span>
                        <span className="ml-2 text-gray-600">{response.metadata.model}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <pre className="whitespace-pre-wrap text-gray-800" data-testid="response-text">{response.text}</pre>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-3">Note: API Configuration Required</h3>
          <p className="text-gray-700">
            This console requires a backend API endpoint to be configured. For local development,
            you can run the Python agent with an API server, or configure NEXT_PUBLIC_API_ENDPOINT
            to point to your deployed backend.
          </p>
        </div>
      </main>
    </div>
  )
}
