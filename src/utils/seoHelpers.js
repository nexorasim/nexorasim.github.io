/**
 * SEO Helper Functions
 * Utilities for managing SEO metadata and structured data
 */

// Update document title and meta tags
export const updatePageMeta = ({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogImage,
  canonicalUrl,
  structuredData
}) => {
  // Update title
  if (title) {
    document.title = title
  }

  // Update or create meta tags
  const updateMetaTag = (name, content, property = false) => {
    if (!content) return

    const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`
    let meta = document.querySelector(selector)
    
    if (!meta) {
      meta = document.createElement('meta')
      if (property) {
        meta.setAttribute('property', name)
      } else {
        meta.setAttribute('name', name)
      }
      document.head.appendChild(meta)
    }
    
    meta.setAttribute('content', content)
  }

  // Standard meta tags
  updateMetaTag('description', description)
  updateMetaTag('keywords', keywords)

  // Open Graph tags
  updateMetaTag('og:title', ogTitle || title, true)
  updateMetaTag('og:description', ogDescription || description, true)
  updateMetaTag('og:image', ogImage, true)
  updateMetaTag('og:url', canonicalUrl || window.location.href, true)
  updateMetaTag('og:type', 'website', true)

  // Twitter Card tags
  updateMetaTag('twitter:card', 'summary_large_image')
  updateMetaTag('twitter:title', ogTitle || title)
  updateMetaTag('twitter:description', ogDescription || description)
  updateMetaTag('twitter:image', ogImage)

  // Canonical URL
  if (canonicalUrl) {
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', canonicalUrl)
  }

  // Structured Data (JSON-LD)
  if (structuredData) {
    addStructuredData(structuredData)
  }
}

// Add structured data to page
export const addStructuredData = (data) => {
  // Remove existing structured data
  const existingScript = document.querySelector('script[type="application/ld+json"]')
  if (existingScript) {
    existingScript.remove()
  }

  // Add new structured data
  const script = document.createElement('script')
  script.type = 'application/ld+json'
  script.textContent = JSON.stringify(data)
  document.head.appendChild(script)
}

// Generate structured data for different page types
export const generateStructuredData = {
  // Organization schema
  organization: (data) => ({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: data.name || 'NexoraSIM',
    url: data.url || 'https://nexorasim.github.io',
    logo: data.logo || 'https://nexorasim.github.io/logo.png',
    description: data.description || 'Premium eSIM platform for Myanmar networks',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: data.phone || '+1-800-NEXORA-SIM',
      contactType: 'customer service',
      email: data.email || 'info@nexorasim.com'
    },
    sameAs: data.socialMedia || [
      'https://twitter.com/nexorasim',
      'https://linkedin.com/company/nexorasim'
    ]
  }),

  // Product schema
  product: (data) => ({
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: data.name,
    description: data.description,
    brand: {
      '@type': 'Brand',
      name: 'NexoraSIM'
    },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      price: data.price,
      priceCurrency: data.currency || 'USD'
    },
    aggregateRating: data.rating && {
      '@type': 'AggregateRating',
      ratingValue: data.rating.value,
      reviewCount: data.rating.count
    }
  }),

  // Article schema
  article: (data) => ({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: data.title,
    description: data.description,
    author: {
      '@type': 'Organization',
      name: 'NexoraSIM'
    },
    publisher: {
      '@type': 'Organization',
      name: 'NexoraSIM',
      logo: {
        '@type': 'ImageObject',
        url: 'https://nexorasim.github.io/logo.png'
      }
    },
    datePublished: data.publishDate,
    dateModified: data.modifiedDate || data.publishDate,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': data.url || window.location.href
    }
  }),

  // FAQ schema
  faq: (questions) => ({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map(q => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.answer
      }
    }))
  }),

  // Service schema
  service: (data) => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: data.name,
    description: data.description,
    provider: {
      '@type': 'Organization',
      name: 'NexoraSIM'
    },
    areaServed: data.coverage || [
      {
        '@type': 'Country',
        name: 'Myanmar'
      }
    ],
    serviceType: data.type || 'eSIM Services'
  })
}

// SEO-friendly URL generation
export const generateSEOUrl = (title) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .trim('-') // Remove leading/trailing hyphens
}

// Generate sitemap entry
export const generateSitemapEntry = ({
  url,
  lastModified = new Date(),
  changeFrequency = 'weekly',
  priority = 0.5
}) => ({
  url: url.startsWith('http') ? url : `https://nexorasim.github.io${url}`,
  lastModified: lastModified.toISOString().split('T')[0],
  changeFrequency,
  priority
})

// Validate and clean meta content
export const cleanMetaContent = (content, maxLength = 160) => {
  if (!content) return ''
  
  return content
    .replace(/\s+/g, ' ') // Replace multiple spaces with single
    .trim()
    .substring(0, maxLength)
}

// Generate page-specific meta data
export const getPageMeta = (pageType, data = {}) => {
  const baseMeta = {
    title: 'NexoraSIM Entertainment Server - Premium eSIM Platform',
    description: 'Enterprise eSIM platform for Myanmar networks with Microsoft-only architecture, 5G streaming, and enterprise-grade security.',
    keywords: 'eSIM, entertainment server, Myanmar telecom, MPT, MYTEL, ATOM, U9, 5G streaming, VoLTE',
    ogImage: 'https://nexorasim.github.io/og-image.jpg'
  }

  const pageMetaMap = {
    home: {
      ...baseMeta,
      structuredData: generateStructuredData.organization({
        name: 'NexoraSIM',
        description: baseMeta.description
      })
    },
    features: {
      title: 'Features - Interactive 3D Feature Grid | NexoraSIM',
      description: 'Explore NexoraSIM platform capabilities with interactive 3D feature grid, real-time analytics, and enterprise-grade eSIM solutions.',
      keywords: 'eSIM features, 3D interface, real-time analytics, platform capabilities, enterprise solutions',
      structuredData: generateStructuredData.service({
        name: 'NexoraSIM Platform Features',
        description: 'Interactive platform showcasing eSIM capabilities and enterprise solutions'
      })
    },
    api: {
      title: 'API Documentation - Interactive Playground | NexoraSIM',
      description: 'Comprehensive API documentation with interactive playground for NexoraSIM eSIM platform integration.',
      keywords: 'API documentation, eSIM API, developer tools, integration guide, SDK',
      structuredData: generateStructuredData.article({
        title: 'NexoraSIM API Documentation',
        description: 'Complete developer guide for eSIM platform integration',
        publishDate: new Date().toISOString()
      })
    },
    enterprise: {
      title: 'Enterprise Solutions - Business eSIM Management | NexoraSIM',
      description: 'Enterprise-grade eSIM management solutions for business customers with advanced security and scalability.',
      keywords: 'enterprise eSIM, business solutions, corporate telecom, managed services',
      structuredData: generateStructuredData.service({
        name: 'Enterprise eSIM Solutions',
        description: 'Business-grade eSIM management and telecommunications services'
      })
    }
  }

  return {
    ...baseMeta,
    ...pageMetaMap[pageType],
    ...data
  }
}

export default {
  updatePageMeta,
  addStructuredData,
  generateStructuredData,
  generateSEOUrl,
  generateSitemapEntry,
  cleanMetaContent,
  getPageMeta
}