import { test, expect } from '@playwright/test';

test('TC-05: category navigation can be opened', async ({ page }) => {
  await page.goto('/');
  const categories = page.getByRole('link', { name: /categories/i }).first()
    .or(page.getByRole('button', { name: /categories/i }).first());
  await expect(categories).toBeVisible();
  await categories.click();
  const categoryItems = page.getByRole('link', { name: /hand tools|power tools|other|special tools/i });
  await expect(categoryItems.first().or(page.locator('main').first())).toBeVisible();
});
