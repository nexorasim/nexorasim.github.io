# Contributing to @nexorasim/agent

## Code of Conduct

Be professional, respectful, and constructive in all interactions.

## Development Setup

```bash
git clone https://github.com/nexorasim/nexorasim.github.io.git
cd nexorasim.github.io
npm install
```

## Development Workflow

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Make your changes
4. Run tests: `npm test`
5. Run linter: `npm run lint`
6. Commit changes: `git commit -m "feat: your feature"`
7. Push to your fork: `git push origin feature/your-feature`
8. Create a Pull Request

## Commit Message Convention

Follow the conventional commits specification:

```
<type>(<scope>): <subject>

<body>

<footer>
```

Types:
- feat: New feature
- fix: Bug fix
- docs: Documentation
- style: Formatting
- refactor: Code refactoring
- test: Tests
- chore: Maintenance

## Testing

```bash
npm test
npm run lint
npm audit
```

## Pull Request Process

1. Update documentation if needed
2. Update CHANGELOG.md
3. Ensure all tests pass
4. Request review from maintainers
5. Address review feedback
6. Merge after approval

## License

By contributing, you agree that your contributions will be licensed under the MIT License.
