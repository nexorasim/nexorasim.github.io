import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../components/Dashboard.vue'
import EIDValidator from '../components/EIDValidator.vue'
import ComplianceAssistant from '../components/ComplianceAssistant.vue'
import APIDocumentation from '../components/APIDocumentation.vue'

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/validation',
    name: 'EIDValidation',
    component: EIDValidator
  },
  {
    path: '/compliance',
    name: 'Compliance',
    component: ComplianceAssistant
  },
  {
    path: '/api-docs',
    name: 'APIDocumentation',
    component: APIDocumentation
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router