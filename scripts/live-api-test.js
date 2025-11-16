import { execSync } from 'child_process';

const baseUrl = 'https://nexorasim.github.io';

const endpoints = [
  '/',
  '/sitemap.xml',
  '/robots.txt',
  '/feed.xml',
  '/atom.xml',
  '/manifest.json',
  '/api/index.json',
  '/api/devices.json',
  '/api/telemetry.json',
  '/api/status.json',
  '/docs/index.html'
];

console.log('LIVE WEBSITE API CHECK\n');

endpoints.forEach(endpoint => {
  try {
    const cmd = `curl -s -o /dev/null -w "%{http_code}" ${baseUrl}${endpoint}`;
    const response = execSync(cmd, { encoding: 'utf8', timeout: 5000 });
    const status = response.trim();
    
    const statusText = status === '200' ? 'OK' : status === '404' ? 'NOT FOUND' : 'ERROR';
    console.log(`${endpoint.padEnd(20)} - HTTP ${status} ${statusText}`);
  } catch (error) {
    console.log(`${endpoint.padEnd(20)} - ERROR`);
  }
});

console.log('\nWEBSITE STATUS: CHECKING COMPLETE');