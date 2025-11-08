# Perplexity.ai Playwright Tests

End-to-end checks for the public `https://www.perplexity.ai/` experience using Playwright and TypeScript.

## Prerequisites

- Node.js 18+
- npm

## Installation

```bash
npm install
npx playwright install
```

## Running the tests

```bash
npm test
```

Additional options:

- `npm run test:headed` – run the suite with a visible browser window.
- `npm run test:ui` – open the Playwright trace viewer UI.

## Project structure

- `playwright.config.ts` – shared Playwright settings (base URL, reporters, projects).
- `tests/search.spec.ts` – smoke scenario covering homepage load and a simple search.
- `tsconfig.json` – TypeScript configuration scoped to the test sources.

