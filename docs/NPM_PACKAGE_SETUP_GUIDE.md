# NPM Package Setup Guide

Implementation guide for creating and publishing NPM packages under NexoraSIM organization.

## Prerequisites

- Node.js 18 or higher
- NPM account with publish permissions
- Git configured with NexoraSIM credentials
- GitHub repository access

## Initial Setup

### 1. Create NPM Account

```bash
# Create account at npmjs.com
# Login locally
npm login

# Verify authentication
npm whoami
```

### 2. Generate NPM Token

1. Visit https://www.npmjs.com/settings/YOUR_USERNAME/tokens
2. Click "Generate New Token"
3. Select "Automation" type
4. Copy token for CI/CD use

### 3. Configure GitHub Secrets

Add the following secrets to your GitHub repository:

| Secret Name | Description |
|-------------|-------------|
| NPM_TOKEN | NPM automation token |

## Package Creation

### 1. Initialize Package from Template

```bash
# Copy template structure
cp -r docs/templates/npm-package/ ./packages/your-package/
cd packages/your-package/

# Update package.json name and description
# Update README.md content
# Update LICENSE copyright year
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Build and Test

```bash
npm run build
npm test
npm run lint
```

### 4. Initialize Git

```bash
git init
git add .
git commit -m "chore: initial package setup"
git remote add origin https://github.com/nexorasim/nexorasim.github.io.git
git push -u origin main
```

## First Release

### 1. Verify Package

```bash
# Dry run publish
npm publish --dry-run

# Check package contents
npm pack
tar -xzf *.tgz
ls -la package/
```

### 2. Publish to NPM

```bash
# Publish with provenance
npm publish --access public --provenance

# Verify publication
npm view @nexorasim/your-package
```

### 3. Create Git Tag

```bash
git tag -a v1.0.0 -m "Release v1.0.0"
git push origin v1.0.0
```

## Subsequent Releases

### Patch Release

```bash
# Bug fix release (1.0.0 -> 1.0.1)
npm version patch -m "Release v%s"
# Triggers postversion script: git push && git push --tags
```

### Minor Release

```bash
# Feature release (1.0.0 -> 1.1.0)
npm version minor -m "Release v%s"
```

### Major Release

```bash
# Breaking change release (1.0.0 -> 2.0.0)
npm version major -m "Release v%s"
```

## Automated Release via CI/CD

### Using GitHub Actions

1. Push tag to trigger workflow:

```bash
git tag -a v1.0.0 -m "Release v1.0.0"
git push origin v1.0.0
```

2. GitHub Actions will:
   - Run tests on Node 18, 20, 22
   - Build package
   - Publish to NPM
   - Create GitHub Release

## Maintenance

### Update Dependencies

```bash
# Check for outdated packages
npm outdated

# Update dependencies
npm update

# Audit security
npm audit
npm audit fix
```

### Deprecate Version

```bash
# Deprecate specific version
npm deprecate @nexorasim/package@1.0.0 "Deprecated due to security issue"

# Deprecate all versions
npm deprecate @nexorasim/package "Package no longer maintained"
```

### Unpublish Package

```bash
# Unpublish within 72 hours of publish
npm unpublish @nexorasim/package@1.0.0

# WARNING: Use with extreme caution
# Breaks dependent projects
```

## Nexora AI Agent Integration

### Initialize Package

```bash
nexora-agent package init \
  --name @nexorasim/new-package \
  --description "Package description" \
  --license MIT
```

### Validate Package

```bash
nexora-agent package validate --strict
```

### Version and Publish

```bash
# Patch release
nexora-agent package version --patch --changelog "Fixed bug X"

# Publish with audit
nexora-agent package audit --fix
nexora-agent package publish --provenance
```

### Full Release Pipeline

```bash
nexora-agent package release \
  --type minor \
  --message "Release v1.1.0" \
  --audit \
  --provenance
```

## Troubleshooting

### Authentication Issues

```bash
# Clear NPM cache
npm cache clean --force

# Re-login
npm logout
npm login

# Verify token
npm token list
```

### Publish Failures

```bash
# Check registry connectivity
npm ping

# Verify package.json
npm run validate

# Check naming conflicts
npm search @nexorasim/package-name
```

### Build Issues

```bash
# Clean build artifacts
npm run clean
rm -rf node_modules package-lock.json

# Reinstall
npm install

# Rebuild
npm run build
```

## Best Practices

1. Always run tests before publishing
2. Update CHANGELOG.md for every release
3. Use semantic versioning strictly
4. Never publish credentials or secrets
5. Maintain backward compatibility in minor releases
6. Document breaking changes clearly
7. Use scoped packages (@nexorasim/package)
8. Enable provenance for transparency
9. Pin dependencies in package-lock.json
10. Run security audits regularly

## References

- [NPM Registry Blueprint](./NPM_REGISTRY_BLUEPRINT.md)
- [Semantic Versioning](https://semver.org/)
- [Keep a Changelog](https://keepachangelog.com/)
- [NPM Documentation](https://docs.npmjs.com/)
- [GitHub Actions](https://docs.github.com/en/actions)

---

NexoraSIM 2025
