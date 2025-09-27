<template>
  <div class="dashboard">
    <header class="dashboard-header">
      <h1>NexoraSIM Developer Portal</h1>
      <div class="status-indicators">
        <div class="status-item" :class="systemStatus.class">
          <span class="status-dot"></span>
          {{ systemStatus.text }}
        </div>
      </div>
    </header>

    <div class="dashboard-grid">
      <div class="card">
        <h3>EID Validation</h3>
        <div class="metric">
          <span class="value">{{ metrics.eidValidationRate }}%</span>
          <span class="label">Success Rate</span>
        </div>
        <router-link to="/validation" class="card-action">Validate EID</router-link>
      </div>

      <div class="card">
        <h3>Device Compatibility</h3>
        <div class="metric">
          <span class="value">{{ metrics.compatibleDevices }}</span>
          <span class="label">EAL6+ Devices</span>
        </div>
        <router-link to="/devices" class="card-action">View Devices</router-link>
      </div>

      <div class="card">
        <h3>Compliance Status</h3>
        <div class="metric">
          <span class="value">{{ metrics.complianceScore }}%</span>
          <span class="label">SAS-SM v3.4.2</span>
        </div>
        <router-link to="/compliance" class="card-action">View Reports</router-link>
      </div>

      <div class="card">
        <h3>API Health</h3>
        <div class="metric">
          <span class="value">{{ metrics.apiUptime }}%</span>
          <span class="label">Uptime</span>
        </div>
        <router-link to="/api-docs" class="card-action">API Documentation</router-link>
      </div>
    </div>

    <div class="recent-activity">
      <h3>Recent Activity</h3>
      <div class="activity-list">
        <div v-for="activity in recentActivities" :key="activity.id" class="activity-item">
          <div class="activity-time">{{ formatTime(activity.timestamp) }}</div>
          <div class="activity-description">{{ activity.description }}</div>
          <div class="activity-status" :class="activity.status">{{ activity.status }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { complianceService } from '../services/complianceService'

export default {
  name: 'Dashboard',
  setup() {
    const metrics = ref({
      eidValidationRate: 98.5,
      compatibleDevices: 247,
      complianceScore: 99.2,
      apiUptime: 99.9
    })

    const systemStatus = ref({
      class: 'online',
      text: 'All Systems Operational'
    })

    const recentActivities = ref([
      {
        id: 1,
        timestamp: new Date(),
        description: 'EID validation completed',
        status: 'success'
      },
      {
        id: 2,
        timestamp: new Date(Date.now() - 300000),
        description: 'Device compatibility check',
        status: 'success'
      },
      {
        id: 3,
        timestamp: new Date(Date.now() - 600000),
        description: 'Compliance audit initiated',
        status: 'pending'
      }
    ])

    const formatTime = (timestamp) => {
      return new Intl.DateTimeFormat('en-US', {
        hour: '2-digit',
        minute: '2-digit'
      }).format(timestamp)
    }

    const loadMetrics = async () => {
      try {
        const data = await complianceService.getComplianceMetrics()
        metrics.value = { ...metrics.value, ...data }
      } catch (error) {
        console.error('Failed to load metrics:', error)
      }
    }

    onMounted(() => {
      loadMetrics()
    })

    return {
      metrics,
      systemStatus,
      recentActivities,
      formatTime
    }
  }
}
</script>

<style scoped>
.dashboard {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.dashboard-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e0e0e0;
}

.dashboard-header h1 {
  margin: 0;
  color: #1976d2;
  font-size: 2rem;
}

.status-indicators {
  display: flex;
  gap: 15px;
}

.status-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
}

.status-item.online {
  background: #e8f5e8;
  color: #2e7d32;
}

.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: currentColor;
}

.dashboard-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
}

.card {
  background: white;
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  border: 1px solid #e0e0e0;
}

.card h3 {
  margin: 0 0 16px 0;
  color: #333;
  font-size: 1.1rem;
}

.metric {
  margin-bottom: 20px;
}

.metric .value {
  display: block;
  font-size: 2rem;
  font-weight: bold;
  color: #1976d2;
  line-height: 1;
}

.metric .label {
  display: block;
  font-size: 0.9rem;
  color: #666;
  margin-top: 4px;
}

.card-action {
  display: inline-block;
  padding: 8px 16px;
  background: #1976d2;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-size: 0.9rem;
  transition: background 0.2s;
}

.card-action:hover {
  background: #1565c0;
}

.recent-activity {
  background: white;
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  border: 1px solid #e0e0e0;
}

.recent-activity h3 {
  margin: 0 0 20px 0;
  color: #333;
}

.activity-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.activity-item {
  display: grid;
  grid-template-columns: 80px 1fr auto;
  gap: 16px;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid #f0f0f0;
}

.activity-item:last-child {
  border-bottom: none;
}

.activity-time {
  font-size: 0.85rem;
  color: #666;
}

.activity-description {
  color: #333;
}

.activity-status {
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 500;
}

.activity-status.success {
  background: #e8f5e8;
  color: #2e7d32;
}

.activity-status.pending {
  background: #fff3e0;
  color: #f57c00;
}
</style>