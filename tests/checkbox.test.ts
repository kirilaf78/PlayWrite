import { test, expect } from '@playwright/test';

test('checkboxes', async ({ page }) => {
  await page.goto('https://www.lambdatest.com/selenium-playground/checkbox-demo');
  await page.getByRole('button', { name: 'Allow all' }).click();
  const singleCheckbox = page.getByLabel('Click on check box');
  await expect(singleCheckbox).not.toBeChecked()
  await singleCheckbox.check();
  await expect(singleCheckbox).toBeChecked()

});