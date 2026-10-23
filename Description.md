# Test Automation with Playwright — Project Description

## Objective
Build a small, maintainable end-to-end UI automation suite for [Practice Software Testing](https://practicesoftwaretesting.com/). It demonstrates browser navigation, locators, assertions, independent tests, failure screenshots, traces, and an HTML report.

## Technology
- Playwright Test
- TypeScript
- Node.js / npm
- Chromium desktop browser

## Scope and automated test cases

| ID | Test case | Main steps | Expected result |
|---|---|---|---|
| TC-01 | Homepage loads | Open the base URL | Correct site URL, meaningful page title, visible body |
| TC-02 | Product listing | Open homepage and inspect product links/cards | At least one product link or card is visible |
| TC-03 | Product search | Search for “hammer” | Page shows related product/search content |
| TC-04 | Product details | Open the first product link | Product detail route and product-related content are visible |
| TC-05 | Category navigation | Open Categories navigation | Category menu or listing is visible |
| TC-06 | Cart navigation | Open cart from main navigation | Cart route and cart-related content are visible |
| TC-07 | Login validation | Open sign-in and submit empty form | Required-field or application validation is present |

## Preconditions
- Node.js and npm are installed.
- The public demo site is reachable.
- Dependencies and Playwright Chromium are installed.
- The site UI has not materially changed.

## How to run
```bash
npm install
npx playwright install chromium
npm run typecheck
npm test
npm run report
```

Run with a visible browser using `npm run test:headed`.

## Evidence
Capture genuine screenshots of the terminal test summary and HTML report in `screenshots/`. Failure screenshots and traces are saved under `test-results/` by Playwright; these generated artifacts are git-ignored because they can be large and change between runs.

## Limitations
- The live website may change its labels, routes, product markup, or validation behavior. Verify all locators and assertions against the current site before submission.
- Tests use broad locator fallbacks in some places; these must be reviewed to ensure they target the intended element.
- No successful execution is claimed until the tests have actually been run.
- The suite does not test checkout completion, payment, account creation, or authenticated workflows.
