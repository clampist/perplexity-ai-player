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
- `npm run report` – open the latest HTML report (`playwright-report/`).

Screenshots and traces attach to each test run automatically and are available inside the HTML report or under `test-results/`.

## Continuous integration

GitHub Actions workflow `.github/workflows/playwright.yml` runs the suite on every push and pull request:

1. Installs Node.js 18 and project dependencies (`npm ci`).
2. Installs Playwright browsers (`npx playwright install --with-deps`).
3. Executes `npm test`.

The job uploads the `playwright-report/` and `test-results/` directories as build artifacts (retained for 7 days). After a run completes, open the workflow details page → `Artifacts` to download the HTML report with embedded screenshots.

## Project structure

- `playwright.config.ts` – shared Playwright settings (base URL, reporters, projects).
- `tests/search.spec.ts` – smoke scenario covering homepage load and a simple search.
- `tsconfig.json` – TypeScript configuration scoped to the test sources.

