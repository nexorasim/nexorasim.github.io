// NexoraSIM Azure Infrastructure - Microsoft-Only Stack
@description('Environment name')
param environment string = 'prod'

@description('Location for all resources')
param location string = resourceGroup().location

@description('Application name')
param appName string = 'nexorasim'

var resourcePrefix = '${appName}-${environment}'
var tags = {
  Environment: environment
  Application: 'NexoraSIM Entertainment Server'
  Stack: 'Microsoft-Only'
}

// Static Web App
resource staticWebApp 'Microsoft.Web/staticSites@2023-01-01' = {
  name: '${resourcePrefix}-swa'
  location: location
  tags: tags
  sku: {
    name: 'Standard'
    tier: 'Standard'
  }
  properties: {
    repositoryUrl: 'https://github.com/nexorasim/nexorasim.github.io'
    branch: 'main'
    buildProperties: {
      appLocation: '/microsoft-deployment'
      outputLocation: 'dist'
    }
    allowConfigFileUpdates: true
  }
}

// Front Door Profile
resource frontDoorProfile 'Microsoft.Cdn/profiles@2023-05-01' = {
  name: '${resourcePrefix}-fd'
  location: 'Global'
  tags: tags
  sku: {
    name: 'Premium_AzureFrontDoor'
  }
}

// Key Vault
resource keyVault 'Microsoft.KeyVault/vaults@2023-07-01' = {
  name: '${resourcePrefix}-kv'
  location: location
  tags: tags
  properties: {
    sku: {
      family: 'A'
      name: 'premium'
    }
    tenantId: subscription().tenantId
    enableSoftDelete: true
    softDeleteRetentionInDays: 90
  }
}

// Application Insights
resource appInsights 'Microsoft.Insights/components@2020-02-02' = {
  name: '${resourcePrefix}-ai'
  location: location
  tags: tags
  kind: 'web'
  properties: {
    Application_Type: 'web'
    RetentionInDays: 90
  }
}

output staticWebAppUrl string = staticWebApp.properties.defaultHostname
output keyVaultName string = keyVault.name