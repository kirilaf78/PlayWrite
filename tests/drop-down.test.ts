import { test, expect } from '@playwright/test';

test('drop-down1', async ({ page }) => {
  await page.goto('https://www.lambdatest.com/selenium-playground/select-dropdown-demo');
  await page.getByRole('button', { name: 'Allow all' }).click();
  await page.selectOption('#select-demo',
   {value:"Tuesday"});
   //await page.waitForTimeout(3000);
   await expect(page.getByText('Day selected :- Tuesday')).toBeVisible();
});

test('drop-down2', async ({ page }) => {
  await page.goto('https://www.lambdatest.com/selenium-playground/select-dropdown-demo');
  await page.getByRole('button', { name: 'Allow all' }).click();
  await page.selectOption('#multi-select', [
  {value:"California"}, 
  {label:"New Jersey"},
  {index: 5}
  ]
   );
  await page.waitForTimeout(3000);
   // await expect(page.getByText('Day selected :- Tuesday')).toBeVisible();
});