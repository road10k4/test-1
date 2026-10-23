# Practice Software Testing — Playwright Automation

A student UI automation project for https://practicesoftwaretesting.com/ using Playwright Test and TypeScript.

## Included scenarios
1. Homepage loads and has a meaningful title.
2. Product listing is visible.
3. Search for a common tool.
4. Open product details.
5. Open category navigation.
6. Navigate to the cart.
7. Validate empty login submission.

## Install and run
Install a supported Node.js version, then run:

```bash
npm install
npx playwright install chromium
npm run typecheck
npm test
```

Open the HTML report with:

```bash
npm run report
```

Run with a visible browser using `npm run test:headed`.

## Before submission
This is a generated starter project. Verify the live website's DOM and behavior, run all tests, and record the actual results. If a test fails because a selector or expectation is incorrect, inspect the report/trace and fix the cause. Do not weaken a meaningful assertion just to force a pass.

## Documents
- `Description.md`: scope and test-case list.
- `Prompt.md`: AI tool/model and prompt record.
- `Review.md`: review methodology and fields to complete after execution.
- `screenshots/README.md`: evidence checklist.

## GitHub
Create a public repository, then follow the commands in the assignment handoff or publish this folder using Git.
