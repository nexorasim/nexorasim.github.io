# NexoraSIM Enterprise eSIM Management Setup
# Microsoft Entra ID, Intune MDM, and Azure Configuration

Write-Host "NexoraSIM Enterprise Setup - Initializing..." -ForegroundColor Green

# Install missing Azure modules if needed
Write-Host "Checking Azure PowerShell modules..." -ForegroundColor Yellow
$RequiredModules = @(
    "Az.Accounts",
    "Az.Resources", 
    "Az.KeyVault",
    "Az.Storage",
    "Microsoft.Graph.Authentication",
    "Microsoft.Graph.DeviceManagement",
    "Microsoft.Graph.Identity.DirectoryManagement"
)

foreach ($Module in $RequiredModules) {
    if (!(Get-Module -ListAvailable -Name $Module)) {
        Write-Host "Installing $Module..." -ForegroundColor Yellow
        try {
            Install-Module -Name $Module -Force -AllowClobber -Scope CurrentUser
            Write-Host "$Module installed successfully" -ForegroundColor Green
        } catch {
            Write-Host "Failed to install $Module" -ForegroundColor Red
        }
    } else {
        Write-Host "$Module already installed" -ForegroundColor Green
    }
}

# Azure CLI Extensions
Write-Host "Installing Azure CLI extensions..." -ForegroundColor Yellow
$AzExtensions = @("azure-devops", "application-insights", "keyvault-preview")
foreach ($Extension in $AzExtensions) {
    try {
        az extension add --name $Extension --yes 2>$null
        Write-Host "Extension $Extension installed" -ForegroundColor Green
    } catch {
        Write-Host "Extension $Extension already exists or failed" -ForegroundColor Yellow
    }
}

# Create Enterprise Configuration
$EnterpriseConfig = @{
    TenantId = "d7ff8066-4e28-4170-9805-b60ec642c442"
    SubscriptionName = "NexoraSIM-Enterprise"
    ResourceGroup = "nexorasim-enterprise-rg"
    Location = "Southeast Asia"
    KeyVaultName = "nexorasim-kv-prod"
    StorageAccount = "nexorasimstorprod"
}

# Generate Azure Resource Templates
$BicepTemplate = @"
@description('NexoraSIM Enterprise eSIM Management Infrastructure')
param location string = 'southeastasia'
param tenantId string = '$($EnterpriseConfig.TenantId)'

resource keyVault 'Microsoft.KeyVault/vaults@2023-07-01' = {
  name: '$($EnterpriseConfig.KeyVaultName)'
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
  name: '$($EnterpriseConfig.StorageAccount)'
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
"@

$BicepTemplate | Out-File -FilePath "azure-enterprise-template.bicep" -Encoding UTF8

# Generate PowerShell deployment script
$DeployScript = @"
# NexoraSIM Enterprise Deployment Script
Connect-AzAccount -TenantId '$($EnterpriseConfig.TenantId)'

# Create Resource Group
New-AzResourceGroup -Name '$($EnterpriseConfig.ResourceGroup)' -Location '$($EnterpriseConfig.Location)' -Force

# Deploy Infrastructure
New-AzResourceGroupDeployment -ResourceGroupName '$($EnterpriseConfig.ResourceGroup)' -TemplateFile 'azure-enterprise-template.bicep'

Write-Host 'NexoraSIM Enterprise infrastructure deployed successfully' -ForegroundColor Green
"@

$DeployScript | Out-File -FilePath "deploy-enterprise.ps1" -Encoding UTF8

# Generate Intune Configuration Profile
$IntuneProfile = @{
    displayName = "NexoraSIM eSIM Enterprise Profile"
    description = "Enterprise eSIM management configuration for NexoraSIM devices"
    platforms = "android,iOS"
    technologies = "mdm,microsoftSense"
    settings = @{
        esimManagement = @{
            enabled = $true
            smdpAddress = "smdp.nexorasim.com"
            allowedOperators = @("MPT", "MYTEL", "ATOM", "U9")
        }
        deviceCompliance = @{
            requireEncryption = $true
            minimumOSVersion = "10.0"
            allowJailbrokenDevices = $false
        }
    }
}

$IntuneProfile | ConvertTo-Json -Depth 10 | Out-File -FilePath "intune-esim-profile.json" -Encoding UTF8

Write-Host "Enterprise setup files generated:" -ForegroundColor Green
Write-Host "- azure-enterprise-template.bicep" -ForegroundColor White
Write-Host "- deploy-enterprise.ps1" -ForegroundColor White  
Write-Host "- intune-esim-profile.json" -ForegroundColor White

Write-Host "NexoraSIM Enterprise Setup Complete" -ForegroundColor Green