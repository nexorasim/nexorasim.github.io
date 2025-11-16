// WebGPU Compute Shader for Pearl Particle System
// NexoraSIM IoT Entertainment Server - 80M Particles with Live Telemetry

struct Particle {
    position: vec3<f32>,
    velocity: vec3<f32>,
    life: f32,
    size: f32,
    color: vec3<f32>,
    telemetry: f32,
}

struct Uniforms {
    time: f32,
    deltaTime: f32,
    mousePos: vec2<f32>,
    deviceCount: f32,
    networkHealth: f32,
    resolution: vec2<f32>,
    cameraPos: vec3<f32>,
}

@group(0) @binding(0) var<storage, read_write> particles: array<Particle>;
@group(0) @binding(1) var<uniform> uniforms: Uniforms;

const PARTICLE_COUNT: u32 = 80000000u;
const PEARL_COLOR: vec3<f32> = vec3<f32>(0.0, 0.82, 1.0);
const WHITE_COLOR: vec3<f32> = vec3<f32>(1.0, 1.0, 1.0);
const GRAPHITE_COLOR: vec3<f32> = vec3<f32>(0.2, 0.2, 0.2);

@compute @workgroup_size(256)
fn main(@builtin(global_invocation_id) global_id: vec3<u32>) {
    let index = global_id.x;
    if (index >= PARTICLE_COUNT) {
        return;
    }
    
    var particle = particles[index];
    
    // IoT Telemetry Integration
    let telemetryInfluence = sin(uniforms.time * 0.1 + f32(index) * 0.001) * 0.5 + 0.5;
    let networkInfluence = uniforms.networkHealth * 0.01;
    let deviceInfluence = uniforms.deviceCount * 0.000001;
    
    // Physics Update
    let noise = vec3<f32>(
        sin(f32(index) * 0.1 + uniforms.time * 0.5),
        cos(f32(index) * 0.15 + uniforms.time * 0.3),
        sin(f32(index) * 0.2 + uniforms.time * 0.7)
    ) * 0.1;
    
    // Mouse Interaction
    let mouseInfluence = length(uniforms.mousePos) * 0.1;
    let mouseDir = normalize(vec3<f32>(uniforms.mousePos, 0.0));
    
    // Update Velocity
    particle.velocity += noise * uniforms.deltaTime;
    particle.velocity += mouseDir * mouseInfluence * uniforms.deltaTime;
    particle.velocity *= 0.98; // Damping
    
    // Update Position
    particle.position += particle.velocity * uniforms.deltaTime;
    
    // Boundary Conditions
    if (abs(particle.position.x) > 100.0) {
        particle.velocity.x *= -0.8;
    }
    if (abs(particle.position.y) > 100.0) {
        particle.velocity.y *= -0.8;
    }
    if (abs(particle.position.z) > 100.0) {
        particle.velocity.z *= -0.8;
    }
    
    // Color Based on Telemetry
    let colorMix = telemetryInfluence * networkInfluence;
    particle.color = mix(PEARL_COLOR, WHITE_COLOR, colorMix);
    
    // Size Based on Device Count
    particle.size = 0.5 + deviceInfluence * 2.0 + telemetryInfluence * 0.5;
    
    // Life Cycle
    particle.life += uniforms.deltaTime * 0.1;
    if (particle.life > 10.0) {
        particle.life = 0.0;
        particle.position = vec3<f32>(
            (f32(index % 1000u) - 500.0) * 0.2,
            (f32((index / 1000u) % 1000u) - 500.0) * 0.2,
            (f32(index / 1000000u) - 40.0) * 2.0
        );
        particle.velocity = vec3<f32>(0.0);
    }
    
    // Store Telemetry Data
    particle.telemetry = telemetryInfluence;
    
    particles[index] = particle;
}