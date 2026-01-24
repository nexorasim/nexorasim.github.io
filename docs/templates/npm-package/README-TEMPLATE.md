# NPM Package Template

Complete template structure for NexoraSIM NPM packages.

## Structure

```
npm-package/
├── .github/
│   └── workflows/
│       ├── ci.yml              # Continuous integration
│       └── publish.yml         # Package publishing
├── .nexora/
│   └── package.yaml            # Nexora AI Agent config
├── src/
│   └── index.ts                # Main entry point
├── tests/
│   └── index.test.ts           # Test files
├── scripts/
│   ├── build.sh                # Build script
│   └── release.sh              # Release script
├── examples/
│   ├── basic-usage.js          # Basic usage example
│   └── switch-provider.js      # Advanced example
├── .eslintrc.js                # ESLint configuration
├── .gitignore                  # Git ignore rules
├── .npmignore                  # NPM ignore rules
├── .npmrc                      # NPM configuration
├── .prettierrc                 # Prettier configuration
├── CHANGELOG.md                # Version history
├── CONTRIBUTING.md             # Contribution guidelines
├── jest.config.js              # Jest configuration
├── LICENSE                     # MIT License
├── package.json                # Package manifest
├── README.md                   # Documentation
├── tsconfig.json               # TypeScript config
└── tsconfig.esm.json           # ESM TypeScript config
```

## Usage

### 1. Copy Template

```bash
cp -r docs/templates/npm-package/ ./packages/your-package/
cd packages/your-package/
```

### 2. Customize

Update the following files:

- package.json: name, description, keywords
- README.md: documentation
- LICENSE: copyright year
- src/index.ts: implementation

### 3. Install Dependencies

```bash
npm install
```

### 4. Build and Test

```bash
npm run build
npm test
npm run lint
```

### 5. Publish

```bash
npm publish --access public --provenance
```

## Configuration Files

### package.json

Complete package manifest with:
- Scoped package name (@nexorasim/package)
- Dual CommonJS/ESM exports
- TypeScript type definitions
- Build and test scripts
- Repository and homepage links
- MIT License
- Public access configuration

### tsconfig.json

TypeScript configuration:
- ES2020 target
- Strict type checking
- Declaration files
- Source maps

### jest.config.js

Test configuration:
- ts-jest preset
- Coverage reporting
- Test pattern matching

### .eslintrc.js

Linting rules:
- TypeScript support
- Recommended rules
- Strict warnings

### .prettierrc

Code formatting:
- 2 space indentation
- Single quotes
- Semicolons
- 80 character line width

### .npmrc

NPM configuration:
- Public registry
- Access token authentication
- Exact version pinning

## Scripts

### build.sh

Full build pipeline:
1. Clean previous build
2. Compile TypeScript
3. Run tests
4. Run linter

### release.sh

Release automation:
1. Run tests
2. Run security audit
3. Build package
4. Bump version
5. Push tags

## GitHub Actions

### ci.yml

Continuous integration:
- Multi-version Node.js testing
- Linting
- Testing
- Security audit

### publish.yml

Package publishing:
- Test on multiple Node versions
- Build artifacts
- Publish to NPM with provenance
- Create GitHub Release

## Examples

### basic-usage.js

Simple usage example:
- Initialize agent
- Execute prompt
- Handle response

### switch-provider.js

Advanced usage:
- Multiple providers
- Provider switching
- Status monitoring

## License

All template files are under MIT License.

## References

- [NPM Registry Blueprint](../../NPM_REGISTRY_BLUEPRINT.md)
- [Setup Guide](../../NPM_PACKAGE_SETUP_GUIDE.md)
- [NexoraSIM Documentation](https://nexorasim.github.io)

---

NexoraSIM 2025
