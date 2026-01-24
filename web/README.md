# Nexora Web Console

Next.js + TypeScript web front-end for Nexora AI Agent.

## Installation

```bash
cd web
npm install
# or
yarn install
```

## Development

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building for GitHub Pages

```bash
npm run build
# or
yarn build
```

The static export will be in the `out/` directory.

## Deployment

The site is automatically deployed to GitHub Pages via GitHub Actions when changes are pushed to the main branch.

## Configuration

For production deployment, ensure the backend API endpoint is correctly configured in the environment or code.

## Architecture

- Next.js 14 with App Router
- TypeScript for type safety
- Tailwind CSS for styling
- Axios for API calls
- Static export for GitHub Pages
