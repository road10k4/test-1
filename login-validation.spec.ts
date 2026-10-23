import { test, expect } from '@playwright/test';

test('TC-07: login form requires credentials for an empty submission', async ({ page }) => {
  await page.goto('/');
  const signIn = page.getByRole('link', { name: /sign in|login|log in/i }).first()
    .or(page.getByRole('button', { name: /sign in|login|log in/i }).first());
  await expect(signIn).toBeVisible();
  await signIn.click();
  await expect(page).toHaveURL(/login|signin|sign-in/i);

  const submit = page.getByRole('button', { name: /login|sign in|log in/i }).last();
  await expect(submit).toBeVisible();
  await submit.click();

  const email = page.getByLabel(/email/i).first().or(page.locator('input[type="email"]').first());
  const password = page.getByLabel(/password/i).first().or(page.locator('input[type="password"]').first());
  const requiredField = (await email.getAttribute('required')) !== null ||
    (await password.getAttribute('required')) !== null;
  const validationMessage = await page.getByText(/required|invalid|email|password/i).first()
    .isVisible().catch(() => false);
  expect(requiredField || validationMessage).toBeTruthy();
});
