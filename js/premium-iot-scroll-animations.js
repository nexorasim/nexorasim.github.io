class PremiumIoTScrollAnimations {
  constructor() {
    this.scrollY = 0;
    this.targetScrollY = 0;
    this.ease = 0.1;
    this.isScrolling = false;
    this.init();
  }

  init() {
    this.setupSmoothScroll();
    this.setupScrollTriggers();
    this.setupIntersectionObserver();
    this.setupParallaxLayers();
    this.setupMagneticElements();
    this.startAnimationLoop();
  }

  setupSmoothScroll() {
    // Custom smooth scroll implementation
    let isScrolling = false;
    
    window.addEventListener('wheel', (e) => {
      e.preventDefault();
      
      if (!isScrolling) {
        isScrolling = true;
        requestAnimationFrame(() => {
          this.targetScrollY += e.deltaY * 0.8;
          this.targetScrollY = Math.max(0, Math.min(this.targetScrollY, document.body.scrollHeight - window.innerHeight));
          isScrolling = false;
        });
      }
    }, { passive: false });

    // Touch scroll for mobile
    let touchStartY = 0;
    let touchEndY = 0;

    window.addEventListener('touchstart', (e) => {
      touchStartY = e.touches[0].clientY;
    });

    window.addEventListener('touchmove', (e) => {
      e.preventDefault();
      touchEndY = e.touches[0].clientY;
      const deltaY = touchStartY - touchEndY;
      this.targetScrollY += deltaY * 2;
      this.targetScrollY = Math.max(0, Math.min(this.targetScrollY, document.body.scrollHeight - window.innerHeight));
      touchStartY = touchEndY;
    }, { passive: false });
  }

  setupScrollTriggers() {
    const sections = document.querySelectorAll('section');
    
    sections.forEach((section, index) => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.animateSection(entry.target, index);
          }
        });
      }, {
        threshold: 0.3,
        rootMargin: '-10% 0px -10% 0px'
      });
      
      observer.observe(section);
    });
  }

  animateSection(section, index) {
    const sectionClass = section.className;
    
    switch (true) {
      case sectionClass.includes('hero-3d-iot'):
        this.animateHeroSection(section);
        break;
      case sectionClass.includes('features-iot'):
        this.animateFeaturesSection(section);
        break;
      case sectionClass.includes('architecture-iot'):
        this.animateArchitectureSection(section);
        break;
      case sectionClass.includes('iot-dashboard'):
        this.animateDashboardSection(section);
        break;
      default:
        this.animateGenericSection(section);
    }
  }

  animateHeroSection(section) {
    const elements = section.querySelectorAll('.hero-glass-card, .iot-indicators .indicator-item');
    
    elements.forEach((el, index) => {
      el.style.transform = 'translateY(0px) scale(1)';
      el.style.opacity = '1';
      el.style.transition = `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s`;
    });

    // Animate stats counters
    this.animateCounters(section);
  }

  animateFeaturesSection(section) {
    const cards = section.querySelectorAll('.feature-card');
    
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.style.transform = 'translateY(0px) scale(1)';
        card.style.opacity = '1';
        card.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        
        // Add stagger effect
        card.style.animationDelay = `${index * 0.05}s`;
      }, index * 50);
    });
  }

  animateArchitectureSection(section) {
    const layers = section.querySelectorAll('.arch-layer');
    
    layers.forEach((layer, index) => {
      setTimeout(() => {
        layer.style.transform = 'translateY(0px) rotateX(0deg)';
        layer.style.opacity = '1';
        layer.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        
        // Animate components within layer
        const components = layer.querySelectorAll('.arch-component');
        components.forEach((comp, compIndex) => {
          setTimeout(() => {
            comp.style.transform = 'translateX(0px)';
            comp.style.opacity = '1';
            comp.style.transition = 'all 0.4s ease-out';
          }, compIndex * 100);
        });
      }, index * 200);
    });
  }

  animateDashboardSection(section) {
    const cards = section.querySelectorAll('.dashboard-card');
    
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.style.transform = 'translateY(0px) scale(1)';
        card.style.opacity = '1';
        card.style.transition = 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)';
        
        // Start real-time data animation
        this.startDashboardDataAnimation(card);
      }, index * 150);
    });
  }

  animateGenericSection(section) {
    const elements = section.querySelectorAll('h2, h3, p, .glass-card');
    
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.style.transform = 'translateY(0px)';
        el.style.opacity = '1';
        el.style.transition = 'all 0.6s ease-out';
      }, index * 100);
    });
  }

  animateCounters(section) {
    const counters = section.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
      const target = parseInt(counter.textContent.replace(/,/g, '')) || 0;
      let current = 0;
      const increment = target / 60; // 60 frames for 1 second at 60fps
      
      const updateCounter = () => {
        current += increment;
        if (current < target) {
          counter.textContent = Math.floor(current).toLocaleString();
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target.toLocaleString();
        }
      };
      
      updateCounter();
    });
  }

  startDashboardDataAnimation(card) {
    const metrics = card.querySelectorAll('.metric-value');
    
    setInterval(() => {
      metrics.forEach(metric => {
        // Add pulse effect for data updates
        metric.style.transform = 'scale(1.1)';
        metric.style.transition = 'transform 0.2s ease-out';
        
        setTimeout(() => {
          metric.style.transform = 'scale(1)';
        }, 200);
      });
    }, 3000);
  }

  setupIntersectionObserver() {
    const observerOptions = {
      threshold: [0, 0.25, 0.5, 0.75, 1],
      rootMargin: '0px 0px -10% 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const element = entry.target;
        const ratio = entry.intersectionRatio;
        
        // Apply visibility-based animations
        if (ratio > 0.3) {
          element.classList.add('in-view');
          this.applyInViewAnimations(element);
        } else {
          element.classList.remove('in-view');
        }
      });
    }, observerOptions);

    // Observe all animatable elements
    document.querySelectorAll('.glass-card, .feature-card, .arch-layer, .dashboard-card').forEach(el => {
      observer.observe(el);
    });
  }

  applyInViewAnimations(element) {
    if (element.classList.contains('glass-card')) {
      element.style.transform = 'translateY(0px) scale(1)';
      element.style.opacity = '1';
      element.style.filter = 'blur(0px)';
    }
    
    if (element.classList.contains('feature-card')) {
      element.style.transform = 'translateY(0px) rotateX(0deg)';
      element.style.opacity = '1';
    }
  }

  setupParallaxLayers() {
    const parallaxElements = document.querySelectorAll('.parallax-layer, .hero-content, .iot-indicators');
    
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      
      parallaxElements.forEach((element, index) => {
        const rate = scrolled * (0.5 + index * 0.1);
        element.style.transform = `translateY(${rate}px)`;
      });
    });
  }

  setupMagneticElements() {
    const magneticElements = document.querySelectorAll('.feature-card, .arch-component, .nav-link');
    
    magneticElements.forEach(element => {
      element.addEventListener('mousemove', (e) => {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        element.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px) scale(1.02)`;
        element.style.transition = 'transform 0.1s ease-out';
      });
      
      element.addEventListener('mouseleave', () => {
        element.style.transform = 'translate(0px, 0px) scale(1)';
        element.style.transition = 'transform 0.3s ease-out';
      });
    });
  }

  startAnimationLoop() {
    const animate = () => {
      // Smooth scroll interpolation
      this.scrollY += (this.targetScrollY - this.scrollY) * this.ease;
      window.scrollTo(0, this.scrollY);
      
      // Update parallax effects
      this.updateParallaxEffects();
      
      // Update floating elements
      this.updateFloatingElements();
      
      requestAnimationFrame(animate);
    };
    
    animate();
  }

  updateParallaxEffects() {
    const scrollProgress = this.scrollY / (document.body.scrollHeight - window.innerHeight);
    
    // Update header opacity based on scroll
    const header = document.querySelector('.dynamic-island-header');
    if (header) {
      const opacity = Math.max(0.8, 1 - scrollProgress * 0.3);
      header.style.opacity = opacity;
    }
    
    // Update background elements
    const indicators = document.querySelectorAll('.indicator-item');
    indicators.forEach((indicator, index) => {
      const offset = Math.sin(Date.now() * 0.001 + index) * 10;
      indicator.style.transform = `translateY(${offset}px)`;
    });
  }

  updateFloatingElements() {
    const time = Date.now() * 0.001;
    
    // Floating copilot orb
    const orb = document.getElementById('copilotOrb');
    if (orb) {
      const floatY = Math.sin(time * 0.5) * 15;
      orb.style.transform = `translateY(${floatY}px)`;
    }
    
    // Floating feature cards
    const cards = document.querySelectorAll('.feature-card.in-view');
    cards.forEach((card, index) => {
      const floatY = Math.sin(time * 0.3 + index * 0.5) * 5;
      const currentTransform = card.style.transform || '';
      if (!currentTransform.includes('scale')) {
        card.style.transform = `translateY(${floatY}px)`;
      }
    });
  }

  // Public methods for external control
  scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      this.targetScrollY = section.offsetTop - 100;
    }
  }

  pauseAnimations() {
    document.body.style.animationPlayState = 'paused';
  }

  resumeAnimations() {
    document.body.style.animationPlayState = 'running';
  }

  setScrollSpeed(speed) {
    this.ease = Math.max(0.05, Math.min(0.3, speed));
  }
}

// Initialize scroll animations
document.addEventListener('DOMContentLoaded', () => {
  const scrollAnimations = new PremiumIoTScrollAnimations();
  
  // Export for external access
  window.scrollAnimations = scrollAnimations;
  
  // Setup reduced motion preference
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    scrollAnimations.setScrollSpeed(0.3);
  }
});

export default PremiumIoTScrollAnimations;