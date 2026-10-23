import { test, expect } from '@playwright/test';

test.describe('Homepage and catalog', () => {
  test('TC-01: homepage loads with a meaningful title', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveURL(/practicesoftwaretesting\.com/);
    await expect(page).toHaveTitle(/practice software testing|toolshop/i);
    await expect(page.locator('body')).toBeVisible();
  });

  test('TC-02: at least one product card or product link is visible', async ({ page }) => {
    await page.goto('/');
    const productLinks = page.locator('a[href*="/product/"], a[href*="/products/"]');
    const productCards = page.locator('[class*="card"]');
    await expect(productLinks.first().or(productCards.first())).toBeVisible();
  });
});
