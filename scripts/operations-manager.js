import { execSync } from 'child_process';
import fs from 'fs';

class OperationsManager {
    constructor() {
        this.operations = ['update', 'create', 'delete', 'install', 'run', 'dev', 'deploy'];
        this.completed = 0;
    }

    exec(cmd) {
        try {
            execSync(cmd, { stdio: 'inherit' });
            return true;
        } catch (e) {
            return false;
        }
    }

    log(msg) {
        console.log(`[${++this.completed}/7] ${msg}`);
    }

    update() {
        this.log('UPDATE: Repository sync');
        return this.exec('git pull origin main') && this.exec('npm update');
    }

    create() {
        this.log('CREATE: Initialize structure');
        const dirs = ['src/components', 'src/pages', 'src/hooks', 'src/utils', 'public', 'scripts'];
        dirs.forEach(dir => !fs.existsSync(dir) && fs.mkdirSync(dir, { recursive: true }));
        return true;
    }

    delete() {
        this.log('DELETE: Clean cache');
        ['node_modules/.cache', 'dist', '.vite'].forEach(dir => 
            fs.existsSync(dir) && fs.rmSync(dir, { recursive: true, force: true })
        );
        return true;
    }

    install() {
        this.log('INSTALL: Dependencies');
        return this.exec('npm install');
    }

    run() {
        this.log('RUN: Development server');
        return this.exec('npm run dev');
    }

    dev() {
        this.log('DEV: Environment check');
        return this.exec('npm run error:check') && this.exec('npm run validate:all');
    }

    deploy() {
        this.log('DEPLOY: Production build');
        return this.exec('npm run build') && this.exec('npm run deploy');
    }

    execute(op) {
        if (op === 'all') {
            let success = 0;
            this.operations.forEach(operation => {
                if (this[operation]()) success++;
            });
            console.log(`\nOperations Complete: ${success}/7`);
            console.log(`Success Rate: ${Math.round(success/7*100)}%`);
            return success === 7;
        }
        return this[op] ? this[op]() : false;
    }
}

const manager = new OperationsManager();
const operation = process.argv[2] || 'all';
manager.execute(operation);