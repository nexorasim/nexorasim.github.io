import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const logsDir = path.join(__dirname, '..', 'logs');

if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir, { recursive: true });
}

const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
const logFile = path.join(logsDir, `system-validation-${timestamp}.log`);

function log(message) {
  const timestamped = `[${new Date().toISOString()}] ${message}`;
  console.log(timestamped);
  fs.appendFileSync(logFile, timestamped + '\n');
}

function runCommand(command, description) {
  log(`\n=== ${description} ===`);
  try {
    const output = execSync(command, { encoding: 'utf8', cwd: path.join(__dirname, '..') });
    log(`SUCCESS: ${command}`);
    log(output);
    return { success: true, output };
  } catch (error) {
    log(`ERROR: ${command}`);
    log(error.message);
    return { success: false, error: error.message };
  }
}

async function validateSystem() {
  log('STARTING COMPLETE SYSTEM VALIDATION');
  
  // 1. Repository & GitHub Validation
  runCommand('git --version', 'Git Version Check');
  runCommand('git status', 'Git Status Check');
  runCommand('git log --oneline -10', 'Recent Commits');
  runCommand('git fsck', 'Git Integrity Check');
  runCommand('git branch -a', 'Branch Listing');
  
  // 2. Node.js & npm Validation
  runCommand('node --version', 'Node.js Version');
  runCommand('npm --version', 'npm Version');
  runCommand('npm audit --json > logs/npm-audit.json', 'npm Security Audit');
  runCommand('npm outdated', 'npm Outdated Packages');
  
  // 3. Java Validation
  runCommand('java -version', 'Java Runtime Version');
  runCommand('javac -version', 'Java Compiler Version');
  
  // 4. VS Code Integration
  runCommand('code --version', 'VS Code Version');
  runCommand('code --list-extensions > logs/vscode-extensions.txt', 'VS Code Extensions');
  
  // 5. Build Validation
  if (fs.existsSync('package.json')) {
    runCommand('npm run build', 'npm Build');
  }
  
  if (fs.existsSync('gradlew.bat')) {
    runCommand('.\\gradlew build --stacktrace', 'Gradle Build');
  } else if (fs.existsSync('build.gradle')) {
    runCommand('gradle build --stacktrace', 'Gradle Build');
  }
  
  if (fs.existsSync('pom.xml')) {
    runCommand('mvn clean verify', 'Maven Build');
  }
  
  log('\nSYSTEM VALIDATION COMPLETE');
  log(`Full log saved to: ${logFile}`);
}

validateSystem();