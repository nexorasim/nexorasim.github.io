@description('NexoraSIM eSIM Enterprise Management Portal - Azure Infrastructure')
param location string = resourceGroup().location
param environment string = 'prod'
param tenantId string = 'd7ff8066-4e28-4170-9805-b60ec642c442'

// Core Infrastructure
resource keyVault 'Microsoft.KeyVault/vaults@2023-07-01' = {
  name: 'nexorasim-kv-${environment}'
  location: location
  properties: {
    sku: { family: 'A', name: 'premium' }
    tenantId: tenantId
    enableRbacAuthorization: true
    enableSoftDelete: true
    softDeleteRetentionInDays: 90
    enablePurgeProtection: true
  }
}

// Cosmos DB for eSIM profiles and audit logs
resource cosmosAccount 'Microsoft.DocumentDB/databaseAccounts@2023-11-15' = {
  name: 'nexorasim-cosmos-${environment}'
  location: location
  kind: 'GlobalDocumentDB'
  properties: {
    consistencyPolicy: { defaultConsistencyLevel: 'Session' }
    locations: [{ locationName: location, failoverPriority: 0 }]
    databaseAccountOfferType: 'Standard'
    enableAutomaticFailover: true
    capabilities: [{ name: 'EnableServerless' }]
  }
}

// Azure SQL for enterprise data
resource sqlServer 'Microsoft.Sql/servers@2023-05-01-preview' = {
  name: 'nexorasim-sql-${environment}'
  location: location
  properties: {
    administratorLogin: 'nexoraadmin'
    administratorLoginPassword: '@Microsoft.KeyVault(SecretUri=${keyVault.properties.vaultUri}secrets/sql-admin-password)'
    minimalTlsVersion: '1.2'
  }
}

resource sqlDatabase 'Microsoft.Sql/servers/databases@2023-05-01-preview' = {
  parent: sqlServer
  name: 'nexorasim-enterprise'
  location: location
  sku: { name: 'S2', tier: 'Standard' }
  properties: {
    collation: 'SQL_Latin1_General_CP1_CI_AS'
    maxSizeBytes: 268435456000
  }
}

// Service Bus for event messaging
resource serviceBusNamespace 'Microsoft.ServiceBus/namespaces@2022-10-01-preview' = {
  name: 'nexorasim-sb-${environment}'
  location: location
  sku: { name: 'Standard', tier: 'Standard' }
  properties: {
    minimumTlsVersion: '1.2'
  }
}

// Container Apps Environment
resource containerAppsEnvironment 'Microsoft.App/managedEnvironments@2023-05-01' = {
  name: 'nexorasim-cae-${environment}'
  location: location
  properties: {
    zoneRedundant: false
  }
}

// Application Insights
resource appInsights 'Microsoft.Insights/components@2020-02-02' = {
  name: 'nexorasim-ai-${environment}'
  location: location
  kind: 'web'
  properties: {
    Application_Type: 'web'
    Flow_Type: 'Redfield'
    Request_Source: 'IbizaAIExtension'
  }
}

// Function App for eSIM entitlement services
resource functionAppPlan 'Microsoft.Web/serverfarms@2023-01-01' = {
  name: 'nexorasim-plan-${environment}'
  location: location
  sku: { name: 'Y1', tier: 'Dynamic' }
  properties: { reserved: true }
}

resource functionApp 'Microsoft.Web/sites@2023-01-01' = {
  name: 'nexorasim-func-${environment}'
  location: location
  kind: 'functionapp,linux'
  properties: {
    serverFarmId: functionAppPlan.id
    siteConfig: {
      linuxFxVersion: 'NODE|18'
      appSettings: [
        { name: 'FUNCTIONS_WORKER_RUNTIME', value: 'node' }
        { name: 'FUNCTIONS_EXTENSION_VERSION', value: '~4' }
        { name: 'APPINSIGHTS_INSTRUMENTATIONKEY', value: appInsights.properties.InstrumentationKey }
        { name: 'COSMOS_CONNECTION_STRING', value: '@Microsoft.KeyVault(SecretUri=${keyVault.properties.vaultUri}secrets/cosmos-connection)' }
        { name: 'SQL_CONNECTION_STRING', value: '@Microsoft.KeyVault(SecretUri=${keyVault.properties.vaultUri}secrets/sql-connection)' }
      ]
    }
    httpsOnly: true
  }
  identity: { type: 'SystemAssigned' }
}

// Static Web App for Enterprise Portal
resource staticWebApp 'Microsoft.Web/staticSites@2023-01-01' = {
  name: 'nexorasim-portal-${environment}'
  location: location
  sku: { name: 'Standard', tier: 'Standard' }
  properties: {
    repositoryUrl: 'https://github.com/nexorasim/nexorasim.github.io'
    branch: 'main'
    buildProperties: {
      appLocation: '/enterprise-deployment/portal'
      outputLocation: 'dist'
    }
  }
}

output keyVaultName string = keyVault.name
output cosmosAccountName string = cosmosAccount.name
output sqlServerName string = sqlServer.name
output functionAppName string = functionApp.name
output staticWebAppName string = staticWebApp.name