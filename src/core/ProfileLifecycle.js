export class ProfileLifecycle {
  constructor() {
    this.profiles = new Map()
    this.errors = []
  }

  async install(profileData) {
    try {
      if (!profileData || !profileData.operator || !profileData.plan_type) {
        throw new Error('Operator and plan type required')
      }
      
      const profile = {
        id: `profile-${Date.now()}`,
        operator: profileData.operator,
        plan_type: profileData.plan_type,
        activation_code: profileData.activation_code || `AC-${Date.now()}`,
        status: 'installed',
        timestamp: new Date().toISOString()
      }
      
      this.profiles.set(profile.id, profile)
      return { success: true, data: profile }
    } catch (error) {
      this.logError('install', error)
      return { success: false, error: error.message }
    }
  }

  async register(deviceId, profileId) {
    try {
      if (!deviceId || !profileId) throw new Error('Device ID and Profile ID required')
      
      const profile = this.profiles.get(profileId)
      if (!profile) throw new Error('Profile not found')
      if (profile.status !== 'installed') throw new Error('Profile must be installed first')
      
      profile.deviceId = deviceId
      profile.status = 'registered'
      profile.registeredAt = new Date().toISOString()
      
      return { success: true, data: profile }
    } catch (error) {
      this.logError('register', error)
      return { success: false, error: error.message }
    }
  }

  async download(profileId) {
    try {
      const profile = this.profiles.get(profileId)
      if (!profile) throw new Error('Profile not found')
      if (profile.status !== 'registered') throw new Error('Profile must be registered first')
      
      profile.status = 'downloaded'
      profile.downloadedAt = new Date().toISOString()
      
      return {
        success: true,
        data: {
          profileId,
          activationCode: `LPA:1$nexorasim.com$${profileId}`,
          status: 'downloaded'
        }
      }
    } catch (error) {
      this.logError('download', error)
      return { success: false, error: error.message }
    }
  }

  async run(profileId) {
    try {
      const profile = this.profiles.get(profileId)
      if (!profile) throw new Error('Profile not found')
      if (profile.status !== 'downloaded') throw new Error('Profile must be downloaded first')
      
      profile.status = 'running'
      profile.runningAt = new Date().toISOString()
      
      return { success: true, data: profile }
    } catch (error) {
      this.logError('run', error)
      return { success: false, error: error.message }
    }
  }

  async enable(profileId) {
    try {
      const profile = this.profiles.get(profileId)
      if (!profile) throw new Error('Profile not found')
      if (profile.status !== 'running') throw new Error('Profile must be running first')
      
      profile.status = 'enabled'
      profile.enabledAt = new Date().toISOString()
      
      return { success: true, data: profile }
    } catch (error) {
      this.logError('enable', error)
      return { success: false, error: error.message }
    }
  }

  getProfile(profileId) {
    return this.profiles.get(profileId)
  }

  getAllProfiles() {
    return Array.from(this.profiles.values())
  }

  logError(operation, error) {
    const errorEntry = {
      id: `error-${Date.now()}`,
      operation,
      error: error.message || error,
      timestamp: new Date().toISOString()
    }
    this.errors.unshift(errorEntry)
    if (this.errors.length > 100) this.errors.pop()
  }

  getErrors() {
    return this.errors
  }

  clearErrors() {
    this.errors = []
  }
}