import React, { useState, useEffect, useMemo } from 'react'
import { 
  Input, 
  Button, 
  Card, 
  CardHeader, 
  CardPreview, 
  Badge,
  Spinner
} from '@fluentui/react-components'
import { Search24Regular, Filter24Regular } from '@fluentui/react-icons'
import { Link } from 'react-router-dom'

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('all')

  // Mock search data - in production, this would come from a search API
  const searchData = [
    {
      id: 1,
      title: 'eSIM Transfer Guide',
      description: 'Complete guide for transferring eSIM profiles between Android and Apple devices',
      category: 'guide',
      url: '/features',
      keywords: ['esim', 'transfer', 'android', 'apple', 'guide']
    },
    {
      id: 2,
      title: 'Network Coverage Maps',
      description: 'Real-time coverage maps for MPT, MYTEL, ATOM, and U9 networks in Myanmar',
      category: 'network',
      url: '/operators/mpt',
      keywords: ['coverage', 'network', 'mpt', 'mytel', 'atom', 'u9', 'myanmar']
    },
    {
      id: 3,
      title: 'API Documentation',
      description: 'Interactive API playground and comprehensive developer documentation',
      category: 'technical',
      url: '/api',
      keywords: ['api', 'documentation', 'developer', 'integration', 'sdk']
    },
    {
      id: 4,
      title: '5G Network Integration',
      description: 'Next-generation 5G connectivity with VoLTE HD voice support',
      category: 'technology',
      url: '/5g',
      keywords: ['5g', 'volte', 'network', 'technology', 'connectivity']
    },
    {
      id: 5,
      title: 'Enterprise Solutions',
      description: 'Business-grade eSIM management for enterprise customers',
      category: 'business',
      url: '/enterprise',
      keywords: ['enterprise', 'business', 'management', 'corporate', 'solutions']
    },
    {
      id: 6,
      title: 'Global Roaming Plans',
      description: 'International roaming across 200+ countries with competitive rates',
      category: 'service',
      url: '/roaming',
      keywords: ['roaming', 'international', 'global', 'travel', 'plans']
    },
    {
      id: 7,
      title: 'Security Architecture',
      description: 'Zero Trust security model with end-to-end encryption',
      category: 'security',
      url: '/security',
      keywords: ['security', 'zero trust', 'encryption', 'protection', 'privacy']
    },
    {
      id: 8,
      title: 'Technical Architecture',
      description: 'System architecture overview with Microsoft-only technology stack',
      category: 'technical',
      url: '/architecture',
      keywords: ['architecture', 'system', 'microsoft', 'technical', 'infrastructure']
    }
  ]

  const categories = [
    { value: 'all', label: 'All Results' },
    { value: 'guide', label: 'Guides' },
    { value: 'network', label: 'Network' },
    { value: 'technical', label: 'Technical' },
    { value: 'technology', label: 'Technology' },
    { value: 'business', label: 'Business' },
    { value: 'service', label: 'Services' },
    { value: 'security', label: 'Security' }
  ]

  // Perform search with fuzzy matching
  const performSearch = useMemo(() => {
    if (!searchQuery.trim()) {
      return []
    }

    const query = searchQuery.toLowerCase()
    const results = searchData.filter(item => {
      // Check if category matches filter
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false
      }

      // Search in title, description, and keywords
      const searchableText = [
        item.title,
        item.description,
        ...item.keywords
      ].join(' ').toLowerCase()

      // Simple fuzzy search - check if query words are in searchable text
      const queryWords = query.split(' ').filter(word => word.length > 0)
      return queryWords.every(word => searchableText.includes(word))
    })

    // Sort by relevance (title matches first, then description, then keywords)
    return results.sort((a, b) => {
      const aTitle = a.title.toLowerCase().includes(query) ? 1 : 0
      const bTitle = b.title.toLowerCase().includes(query) ? 1 : 0
      return bTitle - aTitle
    })
  }, [searchQuery, selectedCategory])

  useEffect(() => {
    if (searchQuery.trim()) {
      setIsLoading(true)
      // Simulate API delay
      const timer = setTimeout(() => {
        setSearchResults(performSearch)
        setIsLoading(false)
      }, 300)
      return () => clearTimeout(timer)
    } else {
      setSearchResults([])
      setIsLoading(false)
    }
  }, [performSearch, searchQuery])

  const handleSearch = (e) => {
    e.preventDefault()
    // Search is handled by useEffect
  }

  return (
    <div className="search-page">
      <section className="search-hero-section parallax-section">
        <div className="section-content">
          <div className="search-hero-content">
            <h1 className="search-title">Search NexoraSIM</h1>
            <p className="search-subtitle">
              Find information about eSIM services, network coverage, API documentation, and more
            </p>
            
            <form onSubmit={handleSearch} className="search-form">
              <div className="search-input-container">
                <Input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for guides, documentation, network info..."
                  size="large"
                  contentBefore={<Search24Regular />}
                  className="search-input"
                />
                <Button 
                  type="submit" 
                  appearance="primary" 
                  size="large"
                  className="search-button"
                >
                  Search
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="search-results-section parallax-section">
        <div className="section-content">
          {searchQuery && (
            <div className="search-filters">
              <div className="filter-header">
                <Filter24Regular />
                <span>Filter by category:</span>
              </div>
              <div className="filter-buttons">
                {categories.map(category => (
                  <Button
                    key={category.value}
                    appearance={selectedCategory === category.value ? 'primary' : 'outline'}
                    size="small"
                    onClick={() => setSelectedCategory(category.value)}
                    className="filter-button"
                  >
                    {category.label}
                  </Button>
                ))}
              </div>
            </div>
          )}

          <div className="search-results">
            {isLoading && (
              <div className="loading-container">
                <Spinner size="large" label="Searching..." />
              </div>
            )}

            {!isLoading && searchQuery && searchResults.length === 0 && (
              <div className="no-results">
                <h3>No results found</h3>
                <p>Try adjusting your search terms or browse our main sections:</p>
                <div className="suggestion-links">
                  <Link to="/features">Features</Link>
                  <Link to="/api">API Documentation</Link>
                  <Link to="/enterprise">Enterprise Solutions</Link>
                  <Link to="/operators/mpt">Network Coverage</Link>
                </div>
              </div>
            )}

            {!isLoading && searchResults.length > 0 && (
              <>
                <div className="results-header">
                  <h2>Search Results ({searchResults.length})</h2>
                  <p>Found {searchResults.length} result{searchResults.length !== 1 ? 's' : ''} for "{searchQuery}"</p>
                </div>

                <div className="results-grid">
                  {searchResults.map(result => (
                    <Card key={result.id} className="result-card glass-card">
                      <CardHeader>
                        <div className="result-header">
                          <h3 className="result-title">
                            <Link to={result.url}>{result.title}</Link>
                          </h3>
                          <Badge appearance="outline" size="small">
                            {categories.find(cat => cat.value === result.category)?.label}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardPreview>
                        <p className="result-description">{result.description}</p>
                        <div className="result-keywords">
                          {result.keywords.slice(0, 4).map(keyword => (
                            <Badge key={keyword} appearance="outline" size="extra-small">
                              {keyword}
                            </Badge>
                          ))}
                        </div>
                        <Link to={result.url} className="result-link">
                          <Button appearance="transparent" size="small">
                            View Details 
                          </Button>
                        </Link>
                      </CardPreview>
                    </Card>
                  ))}
                </div>
              </>
            )}

            {!searchQuery && (
              <div className="search-suggestions">
                <h3>Popular Searches</h3>
                <div className="suggestion-tags">
                  {['eSIM transfer', 'API documentation', '5G coverage', 'Enterprise solutions', 'Global roaming', 'Security features'].map(suggestion => (
                    <Button
                      key={suggestion}
                      appearance="outline"
                      size="small"
                      onClick={() => setSearchQuery(suggestion)}
                      className="suggestion-tag"
                    >
                      {suggestion}
                    </Button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <style jsx>{`
        .search-page {
          min-height: 100vh;
        }

        .search-hero-content {
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
        }

        .search-title {
          font-size: clamp(2.5rem, 6vw, 4rem);
          font-weight: 700;
          margin: var(--space-lg) 0;
          color: var(--black);
        }

        .search-subtitle {
          font-size: clamp(1.1rem, 2.5vw, 1.4rem);
          color: var(--graphite);
          margin-bottom: var(--space-2xl);
          line-height: 1.6;
        }

        .search-form {
          margin-bottom: var(--space-2xl);
        }

        .search-input-container {
          display: flex;
          gap: var(--space-md);
          max-width: 600px;
          margin: 0 auto;
        }

        .search-input {
          flex: 1;
        }

        .search-button {
          white-space: nowrap;
        }

        .search-filters {
          margin-bottom: var(--space-xl);
          padding: var(--space-lg);
          background: var(--glass);
          border-radius: var(--radius-lg);
          backdrop-filter: var(--glass-blur);
        }

        .filter-header {
          display: flex;
          align-items: center;
          gap: var(--space-sm);
          margin-bottom: var(--space-md);
          font-weight: 600;
          color: var(--black);
        }

        .filter-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: var(--space-sm);
        }

        .filter-button {
          font-size: 0.9rem;
        }

        .loading-container {
          text-align: center;
          padding: var(--space-3xl);
        }

        .no-results {
          text-align: center;
          padding: var(--space-3xl);
        }

        .no-results h3 {
          font-size: 1.5rem;
          color: var(--black);
          margin-bottom: var(--space-md);
        }

        .no-results p {
          color: var(--graphite);
          margin-bottom: var(--space-lg);
        }

        .suggestion-links {
          display: flex;
          flex-wrap: wrap;
          gap: var(--space-md);
          justify-content: center;
        }

        .suggestion-links a {
          color: var(--accent);
          text-decoration: none;
          padding: var(--space-sm) var(--space-md);
          border: 1px solid var(--accent);
          border-radius: var(--radius-md);
          transition: all 0.2s ease;
        }

        .suggestion-links a:hover {
          background: var(--accent);
          color: white;
        }

        .results-header {
          margin-bottom: var(--space-xl);
        }

        .results-header h2 {
          font-size: 1.8rem;
          color: var(--black);
          margin-bottom: var(--space-sm);
        }

        .results-header p {
          color: var(--graphite);
        }

        .results-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: var(--space-xl);
        }

        .result-card {
          padding: var(--space-xl);
          transition: all 0.3s ease;
        }

        .result-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-xl);
        }

        .result-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: var(--space-md);
        }

        .result-title {
          font-size: 1.3rem;
          font-weight: 600;
          margin: 0;
        }

        .result-title a {
          color: var(--black);
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .result-title a:hover {
          color: var(--accent);
        }

        .result-description {
          color: var(--graphite);
          line-height: 1.6;
          margin-bottom: var(--space-md);
        }

        .result-keywords {
          display: flex;
          flex-wrap: wrap;
          gap: var(--space-xs);
          margin-bottom: var(--space-md);
        }

        .result-link {
          text-decoration: none;
        }

        .search-suggestions {
          text-align: center;
          padding: var(--space-3xl);
        }

        .search-suggestions h3 {
          font-size: 1.5rem;
          color: var(--black);
          margin-bottom: var(--space-lg);
        }

        .suggestion-tags {
          display: flex;
          flex-wrap: wrap;
          gap: var(--space-sm);
          justify-content: center;
        }

        .suggestion-tag {
          font-size: 0.9rem;
        }

        @media (max-width: 768px) {
          .search-input-container {
            flex-direction: column;
          }

          .filter-buttons {
            justify-content: center;
          }

          .results-grid {
            grid-template-columns: 1fr;
          }

          .result-header {
            flex-direction: column;
            gap: var(--space-sm);
          }
        }
      `}</style>
    </div>
  )
}

export default SearchPage