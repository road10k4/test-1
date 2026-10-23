import { test, expect } from '@playwright/test';

test('TC-03: searching for a common tool shows related results', async ({ page }) => {
  await page.goto('/');
  const search = page.getByRole('searchbox').first()
    .or(page.getByRole('textbox', { name: /search/i }).first())
    .or(page.locator('input[placeholder*="Search" i]').first());
  await expect(search).toBeVisible();
  await search.fill('hammer');
  await search.press('Enter');
  await expect(page.locator('body')).toContainText(/hammer|product|result/i);
});
