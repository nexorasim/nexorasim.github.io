import * as THREE from 'three';

class IoTParticleSystem {
  constructor() {
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.particles = null;
    this.particleCount = 80000;
    this.mouse = new THREE.Vector2();
    this.time = 0;
    this.deviceTypes = ['esim', 'watch', 'vehicle', 'sensor'];
    this.init();
  }

  init() {
    this.setupScene();
    this.createParticles();
    this.createIoTDevices();
    this.setupEventListeners();
    this.animate();
  }

  setupScene() {
    const canvas = document.getElementById('iotCanvas');
    
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.FogExp2(0xF5F5F5, 0.0008);
    
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.z = 50;
    
    this.renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setClearColor(0xF5F5F5, 0);
    
    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    this.scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0x00D1FF, 0.8);
    directionalLight.position.set(50, 50, 50);
    this.scene.add(directionalLight);
  }

  createParticles() {
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(this.particleCount * 3);
    const colors = new Float32Array(this.particleCount * 3);
    const sizes = new Float32Array(this.particleCount);
    
    const pearlColor = new THREE.Color(0x00D1FF);
    const whiteColor = new THREE.Color(0xFFFFFF);
    
    for (let i = 0; i < this.particleCount; i++) {
      const i3 = i * 3;
      
      positions[i3] = (Math.random() - 0.5) * 200;
      positions[i3 + 1] = (Math.random() - 0.5) * 200;
      positions[i3 + 2] = (Math.random() - 0.5) * 200;
      
      const mixedColor = pearlColor.clone().lerp(whiteColor, Math.random());
      colors[i3] = mixedColor.r;
      colors[i3 + 1] = mixedColor.g;
      colors[i3 + 2] = mixedColor.b;
      
      sizes[i] = Math.random() * 2 + 0.5;
    }
    
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    
    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        mouse: { value: new THREE.Vector2() }
      },
      vertexShader: `
        attribute float size;
        attribute vec3 color;
        varying vec3 vColor;
        uniform float time;
        uniform vec2 mouse;
        
        void main() {
          vColor = color;
          vec3 pos = position;
          
          // Wave motion
          pos.y += sin(pos.x * 0.01 + time) * 5.0;
          pos.x += cos(pos.z * 0.01 + time) * 3.0;
          
          // Mouse interaction
          vec2 mouseInfluence = mouse * 10.0;
          pos.xy += mouseInfluence * 0.1;
          
          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_PointSize = size * (300.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        
        void main() {
          float distanceToCenter = distance(gl_PointCoord, vec2(0.5));
          float alpha = 1.0 - smoothstep(0.0, 0.5, distanceToCenter);
          
          gl_FragColor = vec4(vColor, alpha * 0.8);
        }
      `,
      transparent: true,
      vertexColors: true,
      blending: THREE.AdditiveBlending
    });
    
    this.particles = new THREE.Points(geometry, material);
    this.scene.add(this.particles);
  }

  createIoTDevices() {
    this.iotDevices = [];
    
    // eSIM Cards
    for (let i = 0; i < 20; i++) {
      const geometry = new THREE.BoxGeometry(2, 1.2, 0.1);
      const material = new THREE.MeshPhysicalMaterial({
        color: 0x00D1FF,
        metalness: 0.8,
        roughness: 0.2,
        clearcoat: 1.0,
        transparent: true,
        opacity: 0.9
      });
      
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 100
      );
      mesh.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      
      mesh.userData = { type: 'esim', speed: Math.random() * 0.02 + 0.01 };
      this.iotDevices.push(mesh);
      this.scene.add(mesh);
    }
    
    // Smart Watches
    for (let i = 0; i < 15; i++) {
      const geometry = new THREE.CylinderGeometry(1, 1, 0.5, 16);
      const material = new THREE.MeshPhysicalMaterial({
        color: 0x333333,
        metalness: 0.9,
        roughness: 0.1,
        clearcoat: 1.0
      });
      
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(
        (Math.random() - 0.5) * 120,
        (Math.random() - 0.5) * 120,
        (Math.random() - 0.5) * 120
      );
      
      mesh.userData = { type: 'watch', speed: Math.random() * 0.015 + 0.008 };
      this.iotDevices.push(mesh);
      this.scene.add(mesh);
    }
    
    // Connected Vehicles
    for (let i = 0; i < 10; i++) {
      const geometry = new THREE.BoxGeometry(4, 1.5, 2);
      const material = new THREE.MeshPhysicalMaterial({
        color: 0xFFFFFF,
        metalness: 0.7,
        roughness: 0.3,
        clearcoat: 0.8
      });
      
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(
        (Math.random() - 0.5) * 150,
        (Math.random() - 0.5) * 150,
        (Math.random() - 0.5) * 150
      );
      
      mesh.userData = { type: 'vehicle', speed: Math.random() * 0.01 + 0.005 };
      this.iotDevices.push(mesh);
      this.scene.add(mesh);
    }
    
    // Industrial Sensors
    for (let i = 0; i < 25; i++) {
      const geometry = new THREE.SphereGeometry(0.5, 8, 6);
      const material = new THREE.MeshPhysicalMaterial({
        color: 0x10B981,
        metalness: 0.6,
        roughness: 0.4,
        emissive: 0x10B981,
        emissiveIntensity: 0.2
      });
      
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(
        (Math.random() - 0.5) * 80,
        (Math.random() - 0.5) * 80,
        (Math.random() - 0.5) * 80
      );
      
      mesh.userData = { type: 'sensor', speed: Math.random() * 0.025 + 0.01 };
      this.iotDevices.push(mesh);
      this.scene.add(mesh);
    }
  }

  setupEventListeners() {
    window.addEventListener('resize', () => this.onWindowResize());
    window.addEventListener('mousemove', (event) => this.onMouseMove(event));
    
    // Device orientation for mobile
    if (window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientation', (event) => this.onDeviceOrientation(event));
    }
  }

  onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  onMouseMove(event) {
    this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  }

  onDeviceOrientation(event) {
    const alpha = event.alpha ? THREE.MathUtils.degToRad(event.alpha) : 0;
    const beta = event.beta ? THREE.MathUtils.degToRad(event.beta) : 0;
    
    this.camera.rotation.x = beta * 0.1;
    this.camera.rotation.y = alpha * 0.1;
  }

  updateTelemetry() {
    // Update live device count
    const deviceCount = document.getElementById('deviceCount');
    const liveDevices = document.getElementById('liveDevices');
    
    if (deviceCount && liveDevices) {
      const count = Math.floor(Math.random() * 1000) + 99000;
      deviceCount.textContent = count.toLocaleString();
      liveDevices.textContent = count.toLocaleString();
    }
    
    // Update network health
    const networkHealth = document.getElementById('networkHealth');
    if (networkHealth) {
      const health = (99.5 + Math.random() * 0.4).toFixed(1);
      networkHealth.textContent = health + '%';
    }
    
    // Update latency
    const latency = document.getElementById('latency');
    if (latency) {
      const lat = Math.floor(Math.random() * 10) + 8;
      latency.textContent = lat + 'ms';
    }
  }

  animate() {
    requestAnimationFrame(() => this.animate());
    
    this.time += 0.01;
    
    // Update particle system
    if (this.particles && this.particles.material.uniforms) {
      this.particles.material.uniforms.time.value = this.time;
      this.particles.material.uniforms.mouse.value = this.mouse;
      this.particles.rotation.y += 0.001;
    }
    
    // Animate IoT devices
    this.iotDevices.forEach((device, index) => {
      device.rotation.x += device.userData.speed;
      device.rotation.y += device.userData.speed * 0.7;
      device.rotation.z += device.userData.speed * 0.5;
      
      // Floating motion
      device.position.y += Math.sin(this.time + index) * 0.1;
    });
    
    // Camera movement
    this.camera.position.x += (this.mouse.x * 5 - this.camera.position.x) * 0.02;
    this.camera.position.y += (-this.mouse.y * 5 - this.camera.position.y) * 0.02;
    this.camera.lookAt(this.scene.position);
    
    // Update telemetry every 2 seconds
    if (Math.floor(this.time * 50) % 100 === 0) {
      this.updateTelemetry();
    }
    
    this.renderer.render(this.scene, this.camera);
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new IoTParticleSystem();
});

export default IoTParticleSystem;