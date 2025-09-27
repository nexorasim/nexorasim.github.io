<template>
  <div id="app">
    <nav class="main-nav">
      <div class="nav-brand">
        <h2>NexoraSIM</h2>
        <span class="brand-subtitle">Developer Portal</span>
      </div>
      
      <div class="nav-links">
        <router-link to="/" class="nav-link">Dashboard</router-link>
        <router-link to="/validation" class="nav-link">EID Validation</router-link>
        <router-link to="/compliance" class="nav-link">Compliance</router-link>
        <router-link to="/api-docs" class="nav-link">API Docs</router-link>
      </div>

      <div class="nav-actions">
        <div class="compliance-badge">
          <span class="badge-text">GSMA SAS-SM v3.4.2</span>
        </div>
      </div>
    </nav>

    <main class="main-content">
      <router-view />
    </main>

    <footer class="main-footer">
      <div class="footer-content">
        <div class="footer-section">
          <h4>NexoraSIM Platform</h4>
          <p>Complete eSIM Profile Management System with GSMA SAS-SM v3.4.2 Compliance</p>
        </div>
        
        <div class="footer-section">
          <h4>Compliance Standards</h4>
          <ul>
            <li>GSMA SAS-SM v3.4.2</li>
            <li>SGP.22 v3.3</li>
            <li>EAL6+ Certified</li>
            <li>FIPS 140-3 Level 3</li>
          </ul>
        </div>
        
        <div class="footer-section">
          <h4>Resources</h4>
          <ul>
            <li><a href="/api-docs">API Documentation</a></li>
            <li><a href="https://github.com/nexorasim/nexorasim.github.io">GitHub Repository</a></li>
            <li><a href="/docs/BUILD_SYSTEM.md">Build Guide</a></li>
            <li><a href="/docs/AI_PROMPT.md">AI Assistant</a></li>
          </ul>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p>Copyright 2024 NexoraSIM. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.6;
  color: #333;
  background: #f8f9fa;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-nav {
  background: white;
  border-bottom: 1px solid #e0e0e0;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  position: sticky;
  top: 0;
  z-index: 100;
}

.nav-brand {
  display: flex;
  align-items: baseline;
  gap: 10px;
}

.nav-brand h2 {
  color: #1976d2;
  font-size: 1.5rem;
  font-weight: bold;
}

.brand-subtitle {
  color: #666;
  font-size: 0.9rem;
}

.nav-links {
  display: flex;
  gap: 30px;
}

.nav-link {
  color: #666;
  text-decoration: none;
  font-weight: 500;
  padding: 8px 16px;
  border-radius: 4px;
  transition: all 0.2s;
}

.nav-link:hover {
  color: #1976d2;
  background: #f5f5f5;
}

.nav-link.router-link-active {
  color: #1976d2;
  background: #e3f2fd;
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 15px;
}

.compliance-badge {
  background: #e8f5e8;
  color: #2e7d32;
  padding: 6px 12px;
  border-radius: 16px;
  font-size: 0.8rem;
  font-weight: 600;
}

.main-content {
  flex: 1;
  padding: 0;
  background: #f8f9fa;
}

.main-footer {
  background: #2c3e50;
  color: white;
  margin-top: 60px;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
}

.footer-section h4 {
  margin-bottom: 16px;
  color: #ecf0f1;
}

.footer-section p {
  color: #bdc3c7;
  line-height: 1.6;
}

.footer-section ul {
  list-style: none;
}

.footer-section ul li {
  margin-bottom: 8px;
}

.footer-section ul li a {
  color: #bdc3c7;
  text-decoration: none;
  transition: color 0.2s;
}

.footer-section ul li a:hover {
  color: #3498db;
}

.footer-bottom {
  border-top: 1px solid #34495e;
  padding: 20px;
  text-align: center;
  color: #95a5a6;
}

/* Responsive Design */
@media (max-width: 768px) {
  .main-nav {
    flex-direction: column;
    height: auto;
    padding: 15px 20px;
  }

  .nav-links {
    margin: 15px 0;
    gap: 15px;
  }

  .nav-actions {
    margin-top: 10px;
  }

  .footer-content {
    grid-template-columns: 1fr;
    gap: 30px;
  }
}

/* Utility Classes */
.text-center {
  text-align: center;
}

.text-primary {
  color: #1976d2;
}

.text-success {
  color: #2e7d32;
}

.text-warning {
  color: #f57c00;
}

.text-error {
  color: #d32f2f;
}

.mb-20 {
  margin-bottom: 20px;
}

.mt-20 {
  margin-top: 20px;
}

.p-20 {
  padding: 20px;
}
</style>