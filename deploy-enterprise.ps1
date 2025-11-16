# NexoraSIM Enterprise Deployment Script
Connect-AzAccount -TenantId 'd7ff8066-4e28-4170-9805-b60ec642c442'

# Create Resource Group
New-AzResourceGroup -Name 'nexorasim-enterprise-rg' -Location 'Southeast Asia' -Force

# Deploy Infrastructure
New-AzResourceGroupDeployment -ResourceGroupName 'nexorasim-enterprise-rg' -TemplateFile 'azure-enterprise-template.bicep'

Write-Host 'NexoraSIM Enterprise infrastructure deployed successfully' -ForegroundColor Green
