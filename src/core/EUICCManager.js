export class EUICCManager {
  constructor() {
    this.manufacturers = {
      thales: 'Gemalto',
      giesecke: 'G+D',
      idemia: 'IDEMIA',
      qualcomm: 'Qualcomm',
      infineon: 'Infineon',
      st: 'STMicroelectronics',
      workz: 'WorkzGroup',
      valid: 'Valid'
    }
    this.cards = new EUICCCards()
    this.profiles = new ProfileManager()
  }

  async initialize() {
    await this.cards.detect()
    await this.profiles.setup()
    return this.getCardInfo()
  }

  getCardInfo() {
    return {
      detected: true,
      manufacturer: 'Thales',
      atr: '3B9F96801FC78031A073BE21136743200718000001A5',
      eid: '89049032000000000001234567890123',
      profiles: this.profiles.getCount(),
      mepSupport: true
    }
  }
}

class EUICCCards {
  constructor() {
    this.standardATRs = [
      '3B9F96801FC78031A073BE21136743200718000001A5',
      '3B9F95801FC78031A073BE21136743200718000001A5',
      '3B9F96801FC78031E073FE21136743200718000001A5'
    ]
  }

  async detect() {
    this.detected = true
    this.atr = this.standardATRs[0]
    return this.detected
  }
}

class ProfileManager {
  constructor() {
    this.profiles = []
    this.mepEnabled = true
    this.maxProfiles = 10
  }

  async setup() {
    this.transferStandards = {
      gsma: 'SGP.22-v3.0',
      bip: 'Bearer-Independent-Protocol',
      cat: 'CAT-Transport-Protocol',
      https: 'HTTPS-Fallback',
      chunked: 'Chunked-Download'
    }
  }

  getCount() {
    return this.profiles.length
  }

  async downloadProfile(activationCode) {
    const profile = {
      iccid: this.generateICCID(),
      state: 'downloading',
      operator: 'MPT',
      activationCode: activationCode
    }
    this.profiles.push(profile)
    return profile
  }

  generateICCID() {
    return '8995' + Math.random().toString().substr(2, 15)
  }

  async enableProfile(iccid) {
    const profile = this.profiles.find(p => p.iccid === iccid)
    if (profile) {
      profile.state = 'enabled'
      return true
    }
    return false
  }

  async switchProfile(fromICCID, toICCID) {
    await this.disableProfile(fromICCID)
    await this.enableProfile(toICCID)
    return true
  }

  async disableProfile(iccid) {
    const profile = this.profiles.find(p => p.iccid === iccid)
    if (profile) {
      profile.state = 'disabled'
      return true
    }
    return false
  }
}