import { test, expect } from '@playwright/test';

test('homePage', async ({ page }) => {
  await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=common/home');
  await page.locator('a').filter({ hasText: 'Windows' }).click();

  await page.getByRole('link', { name: 'HTC Touch HD HTC Touch HD HTC' }).hover();

  await page.locator('.product-action > button').first().click();
  await page.getByRole('link', { name: 'View Cart ' }).click();
  await expect (page.getByRole('cell', { name: 'HTC Touch HD Reward Points:' }).getByRole('link')).toBeVisible();


});