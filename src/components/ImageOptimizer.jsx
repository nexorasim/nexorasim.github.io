import React, { useState, useEffect } from 'react'

const ImageOptimizer = ({ 
  src, 
  alt, 
  className = '', 
  width, 
  height, 
  loading = 'lazy',
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
}) => {
  const [imageSrc, setImageSrc] = useState('')
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)

  // Generate WebP and fallback sources
  const generateSources = (originalSrc) => {
    if (!originalSrc) return { webp: '', fallback: originalSrc }
    
    const extension = originalSrc.split('.').pop()
    const basePath = originalSrc.replace(`.${extension}`, '')
    
    return {
      webp: `${basePath}.webp`,
      fallback: originalSrc
    }
  }

  const { webp, fallback } = generateSources(src)

  useEffect(() => {
    if (!src) return

    // Check if WebP is supported
    const checkWebPSupport = () => {
      return new Promise((resolve) => {
        const webP = new Image()
        webP.onload = webP.onerror = () => {
          resolve(webP.height === 2)
        }
        webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA'
      })
    }

    const loadOptimalImage = async () => {
      try {
        const supportsWebP = await checkWebPSupport()
        const optimalSrc = supportsWebP && webp ? webp : fallback
        
        // Preload the image
        const img = new Image()
        img.onload = () => {
          setImageSrc(optimalSrc)
          setImageLoaded(true)
        }
        img.onerror = () => {
          // Fallback to original if WebP fails
          if (optimalSrc === webp && fallback) {
            const fallbackImg = new Image()
            fallbackImg.onload = () => {
              setImageSrc(fallback)
              setImageLoaded(true)
            }
            fallbackImg.onerror = () => {
              setImageError(true)
            }
            fallbackImg.src = fallback
          } else {
            setImageError(true)
          }
        }
        img.src = optimalSrc
      } catch (error) {
        setImageSrc(fallback)
        setImageLoaded(true)
      }
    }

    loadOptimalImage()
  }, [src, webp, fallback])

  // Placeholder while loading
  const PlaceholderDiv = () => (
    <div 
      className={`image-placeholder ${className}`}
      style={{
        width: width || '100%',
        height: height || 'auto',
        backgroundColor: '#f0f0f0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#666',
        fontSize: '14px'
      }}
    >
      {imageError ? 'Image unavailable' : 'Loading...'}
    </div>
  )

  // Error state
  if (imageError) {
    return <PlaceholderDiv />
  }

  // Loading state
  if (!imageLoaded || !imageSrc) {
    return <PlaceholderDiv />
  }

  // Optimized image with proper attributes
  return (
    <picture>
      {webp && (
        <source 
          srcSet={webp} 
          type="image/webp" 
          sizes={sizes}
        />
      )}
      <img
        src={imageSrc}
        alt={alt || ''}
        className={className}
        width={width}
        height={height}
        loading={loading}
        decoding="async"
        sizes={sizes}
        style={{
          maxWidth: '100%',
          height: 'auto',
          transition: 'opacity 0.3s ease'
        }}
        onLoad={() => setImageLoaded(true)}
        onError={() => setImageError(true)}
      />
    </picture>
  )
}

export default ImageOptimizer