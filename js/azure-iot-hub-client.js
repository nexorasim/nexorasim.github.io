class AzureIoTHubClient {
  constructor() {
    this.connectionString = null;
    this.deviceTwins = new Map();
    this.telemetryData = new Map();
    this.isConnected = false;
    this.signalRConnection = null;
    this.init();
  }

  async init() {
    await this.initializeSignalR();
    this.startTelemetrySimulation();
    this.setupDigitalTwins();
    this.startRealTimeUpdates();
  }

  async initializeSignalR() {
    try {
      // Simulate SignalR connection for real-time updates
      this.signalRConnection = {
        state: 'Connected',
        invoke: async (method, ...args) => {
          console.log(`SignalR invoke: ${method}`, args);
          return this.simulateSignalRResponse(method, args);
        },
        on: (event, callback) => {
          console.log(`SignalR listening to: ${event}`);
          this.setupEventListener(event, callback);
        }
      };

      this.isConnected = true;
      console.log('Azure SignalR Service connected');
      
      // Setup real-time event listeners
      this.signalRConnection.on('DeviceStatusChanged', this.handleDeviceStatusChange.bind(this));
      this.signalRConnection.on('TelemetryUpdate', this.handleTelemetryUpdate.bind(this));
      this.signalRConnection.on('NetworkHealthUpdate', this.handleNetworkHealthUpdate.bind(this));
      
    } catch (error) {
      console.error('SignalR connection failed:', error);
      this.fallbackToSimulation();
    }
  }

  simulateSignalRResponse(method, args) {
    switch (method) {
      case 'GetDeviceCount':
        return Math.floor(Math.random() * 10000) + 90000;
      case 'GetNetworkHealth':
        return (99.0 + Math.random() * 0.9).toFixed(2);
      case 'GetLatency':
        return Math.floor(Math.random() * 15) + 5;
      default:
        return null;
    }
  }

  setupEventListener(event, callback) {
    // Simulate real-time events
    setInterval(() => {
      switch (event) {
        case 'DeviceStatusChanged':
          callback({
            deviceId: `device-${Math.floor(Math.random() * 1000)}`,
            status: Math.random() > 0.1 ? 'online' : 'offline',
            timestamp: new Date().toISOString()
          });
          break;
        case 'TelemetryUpdate':
          callback(this.generateTelemetryData());
          break;
        case 'NetworkHealthUpdate':
          callback({
            health: (99.0 + Math.random() * 0.9).toFixed(2),
            latency: Math.floor(Math.random() * 15) + 5,
            throughput: Math.floor(Math.random() * 200) + 800
          });
          break;
      }
    }, Math.random() * 3000 + 2000); // Random interval 2-5 seconds
  }

  setupDigitalTwins() {
    // Initialize digital twin models
    const twinModels = [
      {
        id: 'esim-card-twin',
        displayName: 'eSIM Card Digital Twin',
        properties: {
          iccid: 'string',
          imsi: 'string',
          status: 'string',
          carrier: 'string',
          location: 'geopoint'
        }
      },
      {
        id: 'smart-watch-twin',
        displayName: 'Smart Watch Digital Twin',
        properties: {
          deviceId: 'string',
          batteryLevel: 'double',
          heartRate: 'integer',
          location: 'geopoint',
          connectivity: 'string'
        }
      },
      {
        id: 'connected-vehicle-twin',
        displayName: 'Connected Vehicle Digital Twin',
        properties: {
          vin: 'string',
          speed: 'double',
          fuelLevel: 'double',
          location: 'geopoint',
          engineStatus: 'string'
        }
      },
      {
        id: 'industrial-sensor-twin',
        displayName: 'Industrial Sensor Digital Twin',
        properties: {
          sensorId: 'string',
          temperature: 'double',
          humidity: 'double',
          pressure: 'double',
          status: 'string'
        }
      }
    ];

    twinModels.forEach(model => {
      this.deviceTwins.set(model.id, {
        ...model,
        instances: this.generateTwinInstances(model, 100)
      });
    });

    console.log('Digital Twins initialized:', this.deviceTwins.size, 'models');
  }

  generateTwinInstances(model, count) {
    const instances = [];
    
    for (let i = 0; i < count; i++) {
      const instance = {
        twinId: `${model.id}-${i.toString().padStart(4, '0')}`,
        properties: {},
        lastUpdated: new Date().toISOString()
      };

      // Generate realistic property values based on model
      switch (model.id) {
        case 'esim-card-twin':
          instance.properties = {
            iccid: `89${Math.random().toString().substr(2, 18)}`,
            imsi: `${Math.floor(Math.random() * 900) + 100}${Math.random().toString().substr(2, 12)}`,
            status: Math.random() > 0.05 ? 'active' : 'inactive',
            carrier: ['MPT', 'MYTEL', 'ATOM', 'U9'][Math.floor(Math.random() * 4)],
            location: {
              lat: 16.8661 + (Math.random() - 0.5) * 10,
              lon: 96.1951 + (Math.random() - 0.5) * 10
            }
          };
          break;
        case 'smart-watch-twin':
          instance.properties = {
            deviceId: `watch-${Math.random().toString(36).substr(2, 9)}`,
            batteryLevel: Math.random() * 100,
            heartRate: Math.floor(Math.random() * 60) + 60,
            location: {
              lat: 16.8661 + (Math.random() - 0.5) * 5,
              lon: 96.1951 + (Math.random() - 0.5) * 5
            },
            connectivity: Math.random() > 0.1 ? 'connected' : 'disconnected'
          };
          break;
        case 'connected-vehicle-twin':
          instance.properties = {
            vin: Math.random().toString(36).substr(2, 17).toUpperCase(),
            speed: Math.random() * 120,
            fuelLevel: Math.random() * 100,
            location: {
              lat: 16.8661 + (Math.random() - 0.5) * 20,
              lon: 96.1951 + (Math.random() - 0.5) * 20
            },
            engineStatus: Math.random() > 0.05 ? 'running' : 'stopped'
          };
          break;
        case 'industrial-sensor-twin':
          instance.properties = {
            sensorId: `sensor-${Math.random().toString(36).substr(2, 8)}`,
            temperature: Math.random() * 50 + 20,
            humidity: Math.random() * 100,
            pressure: Math.random() * 50 + 950,
            status: Math.random() > 0.02 ? 'operational' : 'maintenance'
          };
          break;
      }

      instances.push(instance);
    }

    return instances;
  }

  generateTelemetryData() {
    const deviceTypes = ['esim', 'watch', 'vehicle', 'sensor'];
    const deviceType = deviceTypes[Math.floor(Math.random() * deviceTypes.length)];
    
    const baseTelemetry = {
      deviceId: `${deviceType}-${Math.random().toString(36).substr(2, 8)}`,
      timestamp: new Date().toISOString(),
      deviceType: deviceType
    };

    switch (deviceType) {
      case 'esim':
        return {
          ...baseTelemetry,
          signalStrength: Math.floor(Math.random() * 5) + 1,
          dataUsage: Math.random() * 1000,
          networkType: ['4G', '5G'][Math.floor(Math.random() * 2)],
          roamingStatus: Math.random() > 0.8 ? 'roaming' : 'home'
        };
      case 'watch':
        return {
          ...baseTelemetry,
          batteryLevel: Math.random() * 100,
          heartRate: Math.floor(Math.random() * 60) + 60,
          steps: Math.floor(Math.random() * 10000),
          activeMinutes: Math.floor(Math.random() * 60)
        };
      case 'vehicle':
        return {
          ...baseTelemetry,
          speed: Math.random() * 120,
          fuelLevel: Math.random() * 100,
          engineTemp: Math.random() * 50 + 70,
          mileage: Math.floor(Math.random() * 100000)
        };
      case 'sensor':
        return {
          ...baseTelemetry,
          temperature: Math.random() * 50 + 20,
          humidity: Math.random() * 100,
          pressure: Math.random() * 50 + 950,
          vibration: Math.random() * 10
        };
    }
  }

  startTelemetrySimulation() {
    // Generate telemetry data every 100ms for real-time feel
    setInterval(() => {
      const telemetry = this.generateTelemetryData();
      this.telemetryData.set(telemetry.deviceId, telemetry);
      
      // Emit to UI components
      this.emitTelemetryUpdate(telemetry);
    }, 100);

    console.log('Telemetry simulation started');
  }

  startRealTimeUpdates() {
    // Update UI components with real-time data
    setInterval(() => {
      this.updateDeviceCounters();
      this.updateNetworkHealth();
      this.updateLatencyMetrics();
    }, 2000);

    // Update digital twin visualizations
    setInterval(() => {
      this.updateDigitalTwinVisualizations();
    }, 5000);
  }

  updateDeviceCounters() {
    const totalDevices = Array.from(this.deviceTwins.values())
      .reduce((sum, twin) => sum + twin.instances.length, 0);
    
    const activeDevices = Math.floor(totalDevices * (0.95 + Math.random() * 0.04));
    
    // Update UI elements
    const elements = ['deviceCount', 'liveDevices'];
    elements.forEach(id => {
      const element = document.getElementById(id);
      if (element) {
        element.textContent = activeDevices.toLocaleString();
      }
    });
  }

  updateNetworkHealth() {
    const health = (99.0 + Math.random() * 0.9).toFixed(1);
    const element = document.getElementById('networkHealth');
    if (element) {
      element.textContent = health + '%';
    }
  }

  updateLatencyMetrics() {
    const latency = Math.floor(Math.random() * 10) + 8;
    const element = document.getElementById('latency');
    if (element) {
      element.textContent = latency + 'ms';
    }
  }

  updateDigitalTwinVisualizations() {
    // Update 3D scene with digital twin data
    const event = new CustomEvent('digitalTwinUpdate', {
      detail: {
        twins: Array.from(this.deviceTwins.values()),
        telemetry: Array.from(this.telemetryData.values()).slice(-100)
      }
    });
    window.dispatchEvent(event);
  }

  emitTelemetryUpdate(telemetry) {
    const event = new CustomEvent('telemetryUpdate', {
      detail: telemetry
    });
    window.dispatchEvent(event);
  }

  handleDeviceStatusChange(data) {
    console.log('Device status changed:', data);
    // Update device twin status
    this.updateDeviceTwinStatus(data.deviceId, data.status);
  }

  handleTelemetryUpdate(data) {
    console.log('Telemetry update received:', data);
    this.telemetryData.set(data.deviceId, data);
  }

  handleNetworkHealthUpdate(data) {
    console.log('Network health update:', data);
    this.updateNetworkHealth();
  }

  updateDeviceTwinStatus(deviceId, status) {
    // Find and update the device twin
    for (const [modelId, twin] of this.deviceTwins) {
      const instance = twin.instances.find(inst => 
        inst.twinId.includes(deviceId) || inst.properties.deviceId === deviceId
      );
      if (instance) {
        instance.properties.status = status;
        instance.lastUpdated = new Date().toISOString();
        break;
      }
    }
  }

  // Public API methods
  async getDeviceCount() {
    if (this.signalRConnection) {
      return await this.signalRConnection.invoke('GetDeviceCount');
    }
    return this.simulateSignalRResponse('GetDeviceCount');
  }

  async getNetworkHealth() {
    if (this.signalRConnection) {
      return await this.signalRConnection.invoke('GetNetworkHealth');
    }
    return this.simulateSignalRResponse('GetNetworkHealth');
  }

  async getDigitalTwins(modelId = null) {
    if (modelId) {
      return this.deviceTwins.get(modelId);
    }
    return Array.from(this.deviceTwins.values());
  }

  async getTelemetryData(deviceId = null, limit = 100) {
    if (deviceId) {
      return this.telemetryData.get(deviceId);
    }
    return Array.from(this.telemetryData.values()).slice(-limit);
  }

  async sendCommand(deviceId, command, payload = {}) {
    console.log(`Sending command to ${deviceId}:`, command, payload);
    
    // Simulate command execution
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          deviceId: deviceId,
          command: command,
          executedAt: new Date().toISOString(),
          response: 'Command executed successfully'
        });
      }, Math.random() * 1000 + 500);
    });
  }

  disconnect() {
    if (this.signalRConnection) {
      this.signalRConnection.stop();
      this.isConnected = false;
      console.log('Azure IoT Hub client disconnected');
    }
  }
}

// Initialize Azure IoT Hub client
const azureIoTClient = new AzureIoTHubClient();

// Export for use in other modules
window.azureIoTClient = azureIoTClient;

export default AzureIoTHubClient;