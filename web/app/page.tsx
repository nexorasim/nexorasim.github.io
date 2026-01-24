import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-nexora-primary">Nexora AI Agent</h1>
            </div>
            <div className="flex space-x-4">
              <Link 
                href="/console" 
                className="px-4 py-2 rounded-lg bg-nexora-primary text-white hover:bg-blue-700 transition"
                data-testid="nav-console-link"
              >
                Console
              </Link>
              <a 
                href="https://github.com/nexorasim" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Multi-Provider AI Orchestration
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nexora AI Agent Mode provides seamless integration with OpenAI, Google Gemini, xAI Grok, and custom AI providers through a unified interface.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-md" data-testid="feature-multi-provider">
            <div className="w-12 h-12 bg-nexora-primary rounded-lg flex items-center justify-center text-white text-2xl mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Multi-Provider Support</h3>
            <p className="text-gray-600">
              Seamlessly switch between OpenAI, Google Gemini, xAI Grok, and custom endpoints without code changes.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md" data-testid="feature-fallback">
            <div className="w-12 h-12 bg-nexora-secondary rounded-lg flex items-center justify-center text-white text-2xl mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Automatic Fallback</h3>
            <p className="text-gray-600">
              Built-in retry logic and provider fallback ensures high availability and resilience.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md" data-testid="feature-deployment">
            <div className="w-12 h-12 bg-nexora-primary rounded-lg flex items-center justify-center text-white text-2xl mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Enterprise Ready</h3>
            <p className="text-gray-600">
              MCP-style CLI for deployment automation, comprehensive testing, and audit-ready documentation.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h3 className="text-2xl font-bold mb-6">Deployment Options</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-lg p-6" data-testid="deployment-python">
              <h4 className="text-lg font-semibold mb-3">Python Agent Core</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Provider abstraction layer</li>
                <li>• CLI and Python API</li>
                <li>• Configuration management</li>
                <li>• Extensible architecture</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-6" data-testid="deployment-desktop">
              <h4 className="text-lg font-semibold mb-3">Desktop Application</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Cross-platform GUI (PySide6)</li>
                <li>• PyInstaller packaging</li>
                <li>• Windows, macOS, Linux</li>
                <li>• Standalone executables</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link 
            href="/console" 
            className="inline-block px-8 py-4 bg-nexora-primary text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition shadow-lg"
            data-testid="cta-console-link"
          >
            Open Agent Console
          </Link>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200 text-center text-gray-600">
          <p>Documentation and source code available on GitHub</p>
          <p className="mt-2">
            <a 
              href="https://github.com/nexorasim" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-nexora-primary hover:underline"
            >
              github.com/nexorasim
            </a>
          </p>
        </div>
      </main>
    </div>
  )
}
