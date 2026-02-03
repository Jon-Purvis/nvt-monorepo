# North Valley Tavern Monorepo

A Turborepo monorepo for North Valley Tavern's web presence and backend.

## What's Inside

### Apps

- `apps/web` - Next.js 16 website for [northvalleytavern.com](https://northvalleytavern.com)

### Packages

- `packages/convex` - Convex backend (schema, functions, API)
- `packages/eslint-config` - Shared ESLint configurations
- `packages/typescript-config` - Shared TypeScript configurations

## Getting Started

```bash
# Install dependencies
pnpm install

# Run the web app in development
pnpm dev

# Build all packages
pnpm build

# Lint all packages
pnpm lint

# Type check all packages
pnpm check-types
```

## Filtering Commands

Run commands for specific packages:

```bash
# Dev server for web only
pnpm --filter web dev

# Build web only
pnpm --filter web build
```

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **Backend**: Convex (coming soon)
- **Package Manager**: pnpm
- **Build System**: Turborepo
