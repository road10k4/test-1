import { test, expect } from '@playwright/test';

test('TC-06: cart page is reachable from main navigation', async ({ page }) => {
  await page.goto('/');
  const cart = page.getByRole('link', { name: /cart|shopping cart/i }).first()
    .or(page.getByRole('button', { name: /cart|shopping cart/i }).first());
  await expect(cart).toBeVisible();
  await cart.click();
  await expect(page).toHaveURL(/cart/i);
  await expect(page.locator('body')).toContainText(/cart|empty|product/i);
});
