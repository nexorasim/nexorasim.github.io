@description('NexoraSIM Enterprise eSIM Management Infrastructure')
param location string = 'southeastasia'
param tenantId string = 'd7ff8066-4e28-4170-9805-b60ec642c442'

resource keyVault 'Microsoft.KeyVault/vaults@2023-07-01' = {
  name: 'nexorasim-kv-prod'
  location: location
  properties: {
    sku: { family: 'A', name: 'premium' }
    tenantId: tenantId
    enableRbacAuthorization: true
    enableSoftDelete: true
    enablePurgeProtection: true
  }
}

resource storageAccount 'Microsoft.Storage/storageAccounts@2023-01-01' = {
  name: 'nexorasimstorprod'
  location: location
  sku: { name: 'Standard_LRS' }
  kind: 'StorageV2'
  properties: {
    supportsHttpsTrafficOnly: true
    minimumTlsVersion: 'TLS1_2'
  }
}

output keyVaultId string = keyVault.id
output storageAccountId string = storageAccount.id
