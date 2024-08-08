import { test, expect } from '@playwright/test';

test('alert1', async ({ page }) => {
  await page.goto('https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo');
  await page.getByRole('button', { name: 'Allow all' }).click();
  await page.locator('p').filter({ hasText: 'JavaScript AlertsClick Me' }).getByRole('button').click()
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.locator('p').filter({ hasText: 'JavaScript AlertsClick Me' }).getByRole('button').click();
   })

test('alert2', async ({ page }) => {
  await page.goto('https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo');
  await page.getByRole('button', { name: 'Allow all' }).click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.locator('p').filter({ hasText: 'Confirm box:Click Me' }).getByRole('button').click();
  await expect(page.getByText('You pressed Cancel!')).toBeVisible();

})

test('alert3', async ({ page }) => {
  await page.goto('https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo');
  await page.getByRole('button', { name: 'Allow all' }).click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.accept("Kiryl").catch(() => {});
  });
  await page.locator('p').filter({ hasText: 'Prompt box:Click Me' }).getByRole('button').click();
 
  await expect(page.getByText('You have entered \'Kiryl\' !')).toBeVisible();


})

test('bootstrap', async ({ page }) => {
await page.goto('https://www.lambdatest.com/selenium-playground/bootstrap-modal-demo');
await page.getByRole('button', { name: 'Allow all' }).click();

await page.getByRole('button', { name: 'Launch Modal' }).first().click();
await page.getByRole('button', { name: 'Save Changes' }).click();


})


