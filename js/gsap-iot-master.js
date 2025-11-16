import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Observer } from 'gsap/Observer';
import { Flip } from 'gsap/Flip';

gsap.registerPlugin(ScrollTrigger, Observer, Flip);

class IoTAnimationMaster {
  constructor() {
    this.init();
  }

  init() {
    this.setupScrollAnimations();
    this.setupHeroAnimations();
    this.setupFeatureAnimations();
    this.setupArchitectureAnimations();
    this.setupDashboardAnimations();
    this.setupCopilotOrb();
    this.setupMagneticCursor();
    this.setupParallaxEffects();
  }

  setupScrollAnimations() {
    // Smooth scroll behavior
    gsap.registerEffect({
      name: 'smoothScroll',
      effect: (targets, config) => {
        const tl = gsap.timeline();
        tl.to(window, {
          duration: config.duration || 1,
          scrollTo: { y: config.y || 0, autoKill: false },
          ease: 'power2.inOut'
        });
        return tl;
      }
    });

    // Navigation smooth scroll
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
          gsap.effects.smoothScroll(window, {
            y: target.offsetTop - 100,
            duration: 1.2
          });
        }
      });
    });
  }

  setupHeroAnimations() {
    const tl = gsap.timeline({ delay: 0.5 });
    
    // Hero content entrance
    tl.from('.hero-glass-card', {
      duration: 1.5,
      y: 100,
      opacity: 0,
      scale: 0.9,
      ease: 'power3.out'
    })
    .from('.hero-title', {
      duration: 1.2,
      y: 50,
      opacity: 0,
      ease: 'power2.out'
    }, '-=1')
    .from('.hero-subtitle', {
      duration: 1,
      y: 30,
      opacity: 0,
      ease: 'power2.out'
    }, '-=0.8')
    .from('.stat-item', {
      duration: 0.8,
      y: 20,
      opacity: 0,
      stagger: 0.2,
      ease: 'power2.out'
    }, '-=0.6')
    .from('.hero-actions fluent-button', {
      duration: 0.6,
      y: 20,
      opacity: 0,
      stagger: 0.1,
      ease: 'back.out(1.7)'
    }, '-=0.4');

    // IoT indicators animation
    gsap.from('.indicator-item', {
      duration: 1,
      x: 50,
      opacity: 0,
      stagger: 0.2,
      ease: 'power2.out',
      delay: 2
    });

    // Floating animation for indicators
    gsap.to('.indicator-item', {
      duration: 3,
      y: -10,
      stagger: 0.3,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut'
    });

    // Stats counter animation
    this.animateCounters();
  }

  animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
      const target = parseInt(counter.textContent.replace(/,/g, ''));
      const obj = { value: 0 };
      
      gsap.to(obj, {
        duration: 2,
        value: target,
        ease: 'power2.out',
        onUpdate: () => {
          counter.textContent = Math.floor(obj.value).toLocaleString();
        },
        delay: 1
      });
    });
  }

  setupFeatureAnimations() {
    // Create feature cards dynamically
    this.createFeatureCards();

    // Feature cards scroll animation
    ScrollTrigger.create({
      trigger: '.features-iot',
      start: 'top 80%',
      onEnter: () => {
        gsap.from('.feature-card', {
          duration: 0.8,
          y: 60,
          opacity: 0,
          scale: 0.9,
          stagger: 0.15,
          ease: 'power3.out'
        });
      }
    });

    // Feature card hover effects
    document.addEventListener('mouseover', (e) => {
      if (e.target.closest('.feature-card')) {
        const card = e.target.closest('.feature-card');
        gsap.to(card, {
          duration: 0.3,
          y: -8,
          scale: 1.02,
          ease: 'power2.out'
        });
      }
    });

    document.addEventListener('mouseout', (e) => {
      if (e.target.closest('.feature-card')) {
        const card = e.target.closest('.feature-card');
        gsap.to(card, {
          duration: 0.3,
          y: 0,
          scale: 1,
          ease: 'power2.out'
        });
      }
    });
  }

  createFeatureCards() {
    const features = [
      { title: 'eSIM Transfer Android to Apple', icon: '', status: 'Active', value: '99.9%' },
      { title: 'Phone Number Registration', icon: '', status: 'Active', value: '100%' },
      { title: '5G Network', icon: '', status: 'Active', value: '95%' },
      { title: 'SIM to eSIM Migration', icon: '', status: 'Active', value: '98%' },
      { title: 'VoLTE HD Voice', icon: '', status: 'Active', value: '97%' },
      { title: 'Advanced Roaming', icon: '', status: 'Active', value: '92%' },
      { title: 'iPad Integration', icon: '', status: 'Active', value: '96%' },
      { title: 'eSIM Quick Transfer iOS', icon: '', status: 'Active', value: '99%' },
      { title: 'Apple Watch Support', icon: '⌚', status: 'Active', value: '94%' },
      { title: 'Device Transfer Android', icon: '', status: 'Active', value: '97%' },
      { title: 'Wearables Integration', icon: '⌚', status: 'Active', value: '93%' },
      { title: 'Cloud-native Microservices', icon: '️', status: 'Active', value: '100%' },
      { title: 'Network Authentication', icon: '', status: 'Active', value: '100%' },
      { title: 'Reporting & Analytics', icon: '', status: 'Active', value: '98%' },
      { title: 'Device Upgrade/Transfer', icon: '', status: 'Active', value: '96%' },
      { title: 'Secondary Device Positioning', icon: '', status: 'Active', value: '91%' },
      { title: 'Primary Device Positioning', icon: '', status: 'Active', value: '95%' },
      { title: 'OpenID Authentication', icon: '', status: 'Active', value: '100%' },
      { title: 'Device Authentication', icon: '️', status: 'Active', value: '100%' },
      { title: 'Notification Handling', icon: '', status: 'Active', value: '99%' },
      { title: 'Carrier Bundle Integration', icon: '', status: 'Active', value: '98%' },
      { title: 'SM-DP+ Integration', icon: '', status: 'Active', value: '97%' },
      { title: 'Management GUI', icon: '️', status: 'Active', value: '100%' },
      { title: 'Statistics & Reporting', icon: '', status: 'Active', value: '99%' },
      { title: 'Multi-channel eSIM Orchestrator', icon: '', status: 'Active', value: '96%' }
    ];

    const featuresGrid = document.getElementById('featuresGrid');
    if (!featuresGrid) return;

    featuresGrid.innerHTML = features.map(feature => `
      <div class="feature-card glass-card">
        <div class="feature-icon">${feature.icon}</div>
        <h3 class="feature-title">${feature.title}</h3>
        <p class="feature-description">Premium IoT integration with real-time telemetry and Microsoft Graph connectivity</p>
        <div class="feature-telemetry">
          <span class="telemetry-status">${feature.status}</span>
          <span class="telemetry-value">${feature.value}</span>
        </div>
      </div>
    `).join('');
  }

  setupArchitectureAnimations() {
    ScrollTrigger.create({
      trigger: '.architecture-iot',
      start: 'top 70%',
      onEnter: () => {
        const tl = gsap.timeline();
        
        tl.from('.arch-layer', {
          duration: 1,
          y: 80,
          opacity: 0,
          stagger: 0.3,
          ease: 'power3.out'
        })
        .from('.arch-component', {
          duration: 0.6,
          y: 30,
          opacity: 0,
          stagger: 0.1,
          ease: 'power2.out'
        }, '-=0.5');
      }
    });

    // Architecture layer hover effects
    document.querySelectorAll('.arch-layer').forEach(layer => {
      layer.addEventListener('mouseenter', () => {
        gsap.to(layer, {
          duration: 0.3,
          scale: 1.05,
          y: -10,
          ease: 'power2.out'
        });
      });

      layer.addEventListener('mouseleave', () => {
        gsap.to(layer, {
          duration: 0.3,
          scale: 1,
          y: 0,
          ease: 'power2.out'
        });
      });
    });
  }

  setupDashboardAnimations() {
    ScrollTrigger.create({
      trigger: '.iot-dashboard',
      start: 'top 75%',
      onEnter: () => {
        gsap.from('.dashboard-card', {
          duration: 0.8,
          y: 50,
          opacity: 0,
          stagger: 0.2,
          ease: 'power3.out'
        });
      }
    });

    // Dashboard real-time updates
    this.setupDashboardUpdates();
  }

  setupDashboardUpdates() {
    const updateInterval = 3000; // 3 seconds

    setInterval(() => {
      // Fleet visualization update
      const fleetViz = document.getElementById('fleetViz');
      if (fleetViz) {
        const deviceCount = Math.floor(Math.random() * 1000) + 99000;
        fleetViz.innerHTML = `
          <div class="fleet-status">
            <div class="fleet-metric">
              <span class="metric-value">${deviceCount.toLocaleString()}</span>
              <span class="metric-label">Active Devices</span>
            </div>
            <div class="fleet-metric">
              <span class="metric-value">${(Math.random() * 5 + 95).toFixed(1)}%</span>
              <span class="metric-label">Health Score</span>
            </div>
          </div>
        `;
      }

      // Performance chart update
      const perfChart = document.getElementById('perfChart');
      if (perfChart) {
        const latency = Math.floor(Math.random() * 10) + 8;
        const throughput = Math.floor(Math.random() * 100) + 900;
        perfChart.innerHTML = `
          <div class="perf-metrics">
            <div class="perf-metric">
              <span class="metric-value">${latency}ms</span>
              <span class="metric-label">Avg Latency</span>
            </div>
            <div class="perf-metric">
              <span class="metric-value">${throughput}Mbps</span>
              <span class="metric-label">Throughput</span>
            </div>
          </div>
        `;
      }

      // Coverage map update
      const coverageMap = document.getElementById('coverageMap');
      if (coverageMap) {
        const coverage = (Math.random() * 5 + 90).toFixed(1);
        coverageMap.innerHTML = `
          <div class="coverage-stats">
            <div class="coverage-metric">
              <span class="metric-value">${coverage}%</span>
              <span class="metric-label">Global Coverage</span>
            </div>
            <div class="coverage-regions">
              <div class="region">ASEAN: 95%</div>
              <div class="region">Americas: 88%</div>
              <div class="region">Europe: 92%</div>
            </div>
          </div>
        `;
      }

      // Real-time metrics update
      const metricsDisplay = document.getElementById('metricsDisplay');
      if (metricsDisplay) {
        const uptime = (99.5 + Math.random() * 0.4).toFixed(2);
        const requests = Math.floor(Math.random() * 10000) + 50000;
        metricsDisplay.innerHTML = `
          <div class="live-metrics">
            <div class="live-metric">
              <span class="metric-value">${uptime}%</span>
              <span class="metric-label">Uptime</span>
            </div>
            <div class="live-metric">
              <span class="metric-value">${requests.toLocaleString()}</span>
              <span class="metric-label">Requests/min</span>
            </div>
          </div>
        `;
      }
    }, updateInterval);
  }

  setupCopilotOrb() {
    const orb = document.getElementById('copilotOrb');
    if (!orb) return;

    // Floating animation
    gsap.to(orb, {
      duration: 4,
      y: -15,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut'
    });

    // Pulse animation
    gsap.to('.orb-pulse', {
      duration: 2,
      scale: 1.2,
      opacity: 0.7,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut'
    });

    // Click interaction
    orb.addEventListener('click', () => {
      gsap.to(orb, {
        duration: 0.2,
        scale: 0.9,
        ease: 'power2.out',
        onComplete: () => {
          gsap.to(orb, {
            duration: 0.3,
            scale: 1,
            ease: 'back.out(1.7)'
          });
        }
      });
    });
  }

  setupMagneticCursor() {
    const cursor = document.createElement('div');
    cursor.className = 'magnetic-cursor';
    cursor.style.cssText = `
      position: fixed;
      width: 20px;
      height: 20px;
      background: rgba(0, 209, 255, 0.5);
      border-radius: 50%;
      pointer-events: none;
      z-index: 9999;
      mix-blend-mode: difference;
      transition: transform 0.1s ease;
    `;
    document.body.appendChild(cursor);

    let mouseX = 0, mouseY = 0;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      gsap.to(cursor, {
        duration: 0.1,
        x: mouseX - 10,
        y: mouseY - 10,
        ease: 'power2.out'
      });
    });

    // Magnetic effect on interactive elements
    document.querySelectorAll('fluent-button, .feature-card, .nav-link').forEach(el => {
      el.addEventListener('mouseenter', () => {
        gsap.to(cursor, {
          duration: 0.2,
          scale: 1.5,
          ease: 'power2.out'
        });
      });

      el.addEventListener('mouseleave', () => {
        gsap.to(cursor, {
          duration: 0.2,
          scale: 1,
          ease: 'power2.out'
        });
      });
    });
  }

  setupParallaxEffects() {
    // Header parallax
    ScrollTrigger.create({
      trigger: 'body',
      start: 'top top',
      end: 'bottom bottom',
      scrub: true,
      onUpdate: (self) => {
        const progress = self.progress;
        gsap.to('.dynamic-island-header', {
          duration: 0.1,
          y: progress * -50,
          ease: 'none'
        });
      }
    });

    // Section parallax
    document.querySelectorAll('.parallax-section').forEach(section => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          gsap.to(section, {
            duration: 0.1,
            y: progress * -100,
            ease: 'none'
          });
        }
      });
    });
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new IoTAnimationMaster();
});

export default IoTAnimationMaster;