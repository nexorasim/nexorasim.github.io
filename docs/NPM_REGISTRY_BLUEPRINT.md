# NPM Package Registry Blueprint

**Organization:** NexoraSIM  
**Version:** 1.0.0  
**License:** MIT  
**Status:** Implementation-Ready

---

## 1. Repository Structure

```
nexora-package/
├── .github/
│   └── workflows/
│       └── publish.yml          # CI/CD publish pipeline
├── src/
│   ├── index.ts                 # Main entry point
│   └── lib/                     # Library modules
├── dist/                        # Build output (gitignored)
├── tests/
│   └── index.test.ts            # Test files
├── scripts/
│   └── build.sh                 # Build automation
├── examples/
│   └── basic-usage.js           # Usage examples
├── .gitignore                   # Git ignore rules
├── .npmignore                   # NPM ignore rules
├── .npmrc                       # NPM configuration
├── package.json                 # Package manifest
├── tsconfig.json                # TypeScript config
├── LICENSE                      # MIT License
├── README.md                    # Documentation
├── CHANGELOG.md                 # Version history
└── CONTRIBUTING.md              # Contribution guidelines
```

---

## 2. MIT License Integration

### LICENSE File

```
MIT License

Copyright (c) 2025 NexoraSIM

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

### package.json License Field

```json
{
  "license": "MIT"
}
```

### README.md License Notice

```markdown
## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.
```

### Contributor Compliance

- All contributions must be compatible with MIT License
- Contributors retain copyright but grant MIT License to contributions
- Third-party dependencies must have MIT-compatible licenses

---

## 3. NPM Package Registration

### Naming Conventions

| Type | Format | Example |
|------|--------|---------|
| Public | lowercase-hyphenated | `nexora-agent` |
| Scoped | @org/package-name | `@nexorasim/agent` |

### Semantic Versioning Rules

| Version | Format | Usage |
|---------|--------|-------|
| Major | X.0.0 | Breaking changes |
| Minor | 0.X.0 | New features, backward compatible |
| Patch | 0.0.X | Bug fixes, backward compatible |
| Prerelease | 0.0.0-alpha.1 | Testing releases |

### Complete package.json

```json
{
  "name": "@nexorasim/agent",
  "version": "1.0.0",
  "description": "Multi-provider AI orchestration agent for NexoraSIM",
  "main": "dist/index.js",
  "module": "dist/index.mjs",
  "types": "dist/index.d.ts",
  "exports": {
    ".": {
      "require": "./dist/index.js",
      "import": "./dist/index.mjs",
      "types": "./dist/index.d.ts"
    }
  },
  "files": [
    "dist",
    "LICENSE",
    "README.md"
  ],
  "scripts": {
    "build": "tsc && tsc -p tsconfig.esm.json",
    "test": "jest",
    "lint": "eslint src --ext .ts",
    "prepublishOnly": "npm run build && npm run test",
    "version": "npm run build && git add -A",
    "postversion": "git push && git push --tags"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/nexorasim/nexorasim.github.io.git"
  },
  "keywords": [
    "ai",
    "agent",
    "orchestration",
    "openai",
    "gemini",
    "nexora"
  ],
  "author": "NexoraSIM <nexorasim@gmail.com>",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/nexorasim/nexorasim.github.io/issues"
  },
  "homepage": "https://nexorasim.github.io",
  "engines": {
    "node": ">=18.0.0"
  },
  "publishConfig": {
    "access": "public",
    "registry": "https://registry.npmjs.org/"
  },
  "dependencies": {},
  "devDependencies": {
    "@types/node": "^20.0.0",
    "typescript": "^5.0.0",
    "jest": "^29.0.0",
    "@types/jest": "^29.0.0",
    "ts-jest": "^29.0.0",
    "eslint": "^8.0.0",
    "@typescript-eslint/eslint-plugin": "^6.0.0",
    "@typescript-eslint/parser": "^6.0.0"
  }
}
```

---

## 4. Authentication and Publishing

### NPM Configuration (.npmrc)

```ini
registry=https://registry.npmjs.org/
@nexorasim:registry=https://registry.npmjs.org/
//registry.npmjs.org/:_authToken=${NPM_TOKEN}
access=public
```

### Authentication Commands

```bash
# Interactive login
npm login

# Verify authentication
npm whoami

# Set token for automation
npm config set //registry.npmjs.org/:_authToken <token>
```

### Publishing Commands

```bash
# Publish to NPM registry
npm publish --access public

# Publish scoped package
npm publish --access public --scope=@nexorasim

# Dry run (verify without publishing)
npm publish --dry-run
```

### Version Management Commands

```bash
# Patch release (1.0.0 -> 1.0.1)
npm version patch -m "Release v%s"

# Minor release (1.0.0 -> 1.1.0)
npm version minor -m "Release v%s"

# Major release (1.0.0 -> 2.0.0)
npm version major -m "Release v%s"

# Prerelease
npm version prerelease --preid=alpha
```

### Git Tagging Commands

```bash
# Create annotated tag
git tag -a v1.0.0 -m "Release v1.0.0"

# Push tags to remote
git push origin --tags

# Push specific tag
git push origin v1.0.0

# List tags
git tag -l "v*"

# Delete tag (local and remote)
git tag -d v1.0.0
git push origin :refs/tags/v1.0.0
```

---

## 5. Git Workflow and Release Strategy

### Branching Model

| Branch | Purpose | Protection |
|--------|---------|------------|
| main | Production releases | Protected, requires PR |
| dev | Development integration | Protected |
| feature/* | Feature development | None |
| release/* | Release preparation | None |
| hotfix/* | Production fixes | None |

### Commit Message Conventions

```
<type>(<scope>): <subject>

<body>

<footer>
```

| Type | Usage |
|------|-------|
| feat | New feature |
| fix | Bug fix |
| docs | Documentation |
| style | Formatting |
| refactor | Code refactoring |
| test | Tests |
| chore | Maintenance |
| ci | CI/CD changes |

### Release Workflow

```bash
# 1. Create release branch
git checkout -b release/1.0.0 dev

# 2. Update version
npm version minor --no-git-tag-version
# Edit CHANGELOG.md

# 3. Commit changes
git add -A
git commit -m "chore(release): prepare v1.0.0"

# 4. Merge to main
git checkout main
git merge release/1.0.0 --no-ff -m "Release v1.0.0"

# 5. Tag release
git tag -a v1.0.0 -m "Release v1.0.0"

# 6. Push
git push origin main --tags

# 7. Merge back to dev
git checkout dev
git merge main
git push origin dev

# 8. Clean up
git branch -d release/1.0.0
```

---

## 6. CI/CD Automation

### GitHub Actions Workflow (.github/workflows/publish.yml)

```yaml
name: Publish Package

on:
  push:
    tags:
      - 'v*'
  workflow_dispatch:

permissions:
  contents: read
  id-token: write

jobs:
  test:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [18, 20, 22]
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js ${{ matrix.node-version }}
        uses: actions/setup-node@v4
        with:
          node-version: ${{ matrix.node-version }}
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Run linter
        run: npm run lint

      - name: Run tests
        run: npm test

  build:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build package
        run: npm run build

      - name: Upload build artifacts
        uses: actions/upload-artifact@v4
        with:
          name: dist
          path: dist/
          retention-days: 30

  publish:
    needs: build
    runs-on: ubuntu-latest
    if: startsWith(github.ref, 'refs/tags/v')
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          registry-url: 'https://registry.npmjs.org'
          cache: 'npm'

      - name: Download build artifacts
        uses: actions/download-artifact@v4
        with:
          name: dist
          path: dist/

      - name: Install dependencies
        run: npm ci

      - name: Publish to NPM
        run: npm publish --access public --provenance
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}

      - name: Create GitHub Release
        uses: softprops/action-gh-release@v1
        with:
          generate_release_notes: true
          files: |
            dist/*
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

### CI Workflow (.github/workflows/ci.yml)

```yaml
name: CI

on:
  push:
    branches: [main, dev]
  pull_request:
    branches: [main, dev]

jobs:
  test:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [18, 20, 22]
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js ${{ matrix.node-version }}
        uses: actions/setup-node@v4
        with:
          node-version: ${{ matrix.node-version }}
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Run linter
        run: npm run lint

      - name: Run tests
        run: npm test

      - name: Run audit
        run: npm audit --audit-level=high
```

---

## 7. Security and Audit Requirements

### NPM Audit Commands

```bash
# Run security audit
npm audit

# Fix vulnerabilities automatically
npm audit fix

# Force fix (may include breaking changes)
npm audit fix --force

# Generate audit report
npm audit --json > audit-report.json

# Audit with severity threshold
npm audit --audit-level=high
```

### Dependency Management

```bash
# Generate lockfile
npm ci

# Update dependencies
npm update

# Check outdated packages
npm outdated

# Pin exact versions
npm config set save-exact true
```

### Integrity Verification

```bash
# Verify package integrity
npm ci --ignore-scripts

# Check package signatures
npm audit signatures
```

### Required Release Documentation

| Document | Content |
|----------|---------|
| CHANGELOG.md | Version changes, breaking changes |
| Release Notes | Features, fixes, migration guide |
| Security Advisory | CVE references if applicable |

---

## 8. Documentation Requirements

### README.md Template

```markdown
# @nexorasim/agent

Multi-provider AI orchestration agent for NexoraSIM.

## Installation

```bash
npm install @nexorasim/agent
```

## Usage

```javascript
const { NexoraAgent } = require('@nexorasim/agent');

const agent = new NexoraAgent({
  provider: 'openai',
  apiKey: process.env.OPENAI_API_KEY
});

const response = await agent.execute('Your prompt here');
console.log(response.text);
```

## API

### NexoraAgent

#### Constructor Options

| Option | Type | Required | Description |
|--------|------|----------|-------------|
| provider | string | Yes | AI provider name |
| apiKey | string | Yes | Provider API key |
| timeout | number | No | Request timeout (ms) |

#### Methods

- `execute(prompt: string): Promise<Response>` - Execute AI prompt
- `setProvider(name: string): void` - Switch provider
- `getStatus(): Status` - Get agent status

## Build

```bash
npm install
npm run build
npm test
```

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## License

MIT License. See [LICENSE](LICENSE) for details.

## Links

- [Documentation](https://nexorasim.github.io)
- [GitHub](https://github.com/nexorasim/nexorasim.github.io)
- [Issues](https://github.com/nexorasim/nexorasim.github.io/issues)
```

### CHANGELOG.md Template

```markdown
# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.0.0] - 2025-01-24

### Added
- Initial release
- Multi-provider AI orchestration
- OpenAI, Gemini, Grok support
- CLI interface
- TypeScript support

### Changed
- None

### Deprecated
- None

### Removed
- None

### Fixed
- None

### Security
- None

[Unreleased]: https://github.com/nexorasim/nexorasim.github.io/compare/v1.0.0...HEAD
[1.0.0]: https://github.com/nexorasim/nexorasim.github.io/releases/tag/v1.0.0
```

---

## 9. Nexora AI Agent Integration

### Agent Commands

| Command | Description |
|---------|-------------|
| `nexora-agent package init` | Initialize package structure |
| `nexora-agent package version --patch` | Bump patch version |
| `nexora-agent package version --minor` | Bump minor version |
| `nexora-agent package version --major` | Bump major version |
| `nexora-agent package publish` | Build and publish |
| `nexora-agent package audit` | Security audit |
| `nexora-agent package validate` | Validate package.json |

### Agent Workflow Patterns

```bash
# Initialize new package
nexora-agent package init --name @nexorasim/new-package --license MIT

# Validate before release
nexora-agent package validate --strict

# Version bump with changelog
nexora-agent package version --minor --changelog "Added new feature X"

# Publish with audit
nexora-agent package audit --fix
nexora-agent package publish --provenance

# Full release pipeline
nexora-agent package release --type minor --message "Release v1.1.0"
```

### Agent Configuration (.nexora/package.yaml)

```yaml
package:
  name: "@nexorasim/agent"
  registry: "https://registry.npmjs.org/"
  access: public

versioning:
  strategy: semantic
  prerelease: false
  tag_prefix: "v"

automation:
  auto_changelog: true
  auto_tag: true
  require_tests: true
  require_audit: true

compliance:
  license: MIT
  license_check: true
  dependency_check: true

audit:
  level: high
  fix_on_publish: false
  report_format: json
```

### Agent Audit Log Format

```json
{
  "event": "package.publish",
  "timestamp": "2025-01-24T12:00:00Z",
  "package": "@nexorasim/agent",
  "version": "1.0.0",
  "registry": "https://registry.npmjs.org/",
  "user": "nexorasim",
  "git": {
    "commit": "abc123",
    "tag": "v1.0.0",
    "branch": "main"
  },
  "audit": {
    "vulnerabilities": 0,
    "advisories": []
  },
  "provenance": {
    "buildType": "github-actions",
    "sourceUri": "git+https://github.com/nexorasim/nexorasim.github.io"
  }
}
```

---

## 10. Quick Reference

### Initial Setup

```bash
# 1. Create package directory
mkdir nexora-package && cd nexora-package

# 2. Initialize Git
git init
git remote add origin https://github.com/nexorasim/nexorasim.github.io.git

# 3. Initialize NPM
npm init -y

# 4. Create structure
mkdir -p src dist tests scripts examples .github/workflows

# 5. Create LICENSE
# (copy MIT License content)

# 6. Configure NPM
echo "registry=https://registry.npmjs.org/" > .npmrc
echo "access=public" >> .npmrc

# 7. Login to NPM
npm login

# 8. First publish
npm publish --access public
```

### Release Checklist

- [ ] All tests pass
- [ ] Linter passes
- [ ] npm audit clean
- [ ] CHANGELOG.md updated
- [ ] Version bumped
- [ ] Git tag created
- [ ] Pushed to main
- [ ] CI/CD passed
- [ ] NPM published
- [ ] GitHub release created

### Essential Files

| File | Required | Purpose |
|------|----------|---------|
| package.json | Yes | Package manifest |
| LICENSE | Yes | MIT License |
| README.md | Yes | Documentation |
| CHANGELOG.md | Yes | Version history |
| .npmignore | Yes | Publish exclusions |
| .gitignore | Yes | Git exclusions |
| .npmrc | Yes | NPM configuration |

---

## Document Control

| Field | Value |
|-------|-------|
| Document | NPM Registry Blueprint |
| Version | 1.0.0 |
| Author | NexoraSIM |
| Date | 2025-01-24 |
| Status | Approved |
| Classification | Public |

---

NexoraSIM 2025
