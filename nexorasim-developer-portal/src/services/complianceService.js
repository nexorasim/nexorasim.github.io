import axios from 'axios'

class ComplianceService {
  constructor() {
    this.baseURL = process.env.VUE_APP_API_BASE_URL || 'http://localhost:5000'
    this.client = axios.create({
      baseURL: this.baseURL,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  async queryCompliance(query) {
    try {
      const response = await this.client.post('/api/compliance/query', {
        query: query,
        sources: ['gsma-standards', 'internal-policies']
      })
      return response.data
    } catch (error) {
      throw new Error('Failed to query compliance information')
    }
  }

  async validateEID(eid) {
    try {
      const response = await this.client.post('/api/compliance/validate-eid', {
        eid: eid
      })
      return response.data
    } catch (error) {
      throw new Error('EID validation failed')
    }
  }

  async getDeviceCompatibility(deviceModel) {
    try {
      const response = await this.client.get(`/api/devices/${deviceModel}/compatibility`)
      return response.data
    } catch (error) {
      throw new Error('Failed to retrieve device compatibility')
    }
  }

  async getComplianceMetrics() {
    try {
      const response = await this.client.get('/api/compliance/metrics')
      return response.data
    } catch (error) {
      throw new Error('Failed to retrieve compliance metrics')
    }
  }
}

export const complianceService = new ComplianceService()