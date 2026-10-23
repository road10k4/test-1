import { test, expect } from '@playwright/test';

test('TC-04: opening a product displays a product detail view', async ({ page }) => {
  await page.goto('/');
  const productLink = page.locator('a[href*="/product/"], a[href*="/products/"]').first();
  await expect(productLink).toBeVisible();
  await productLink.click();
  await expect(page).toHaveURL(/product/i);
  await expect(page.locator('body')).toContainText(/price|description|add to cart/i);
});
