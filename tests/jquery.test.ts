import { test, expect } from '@playwright/test';

test('jquery drop-down', async ({ page }) => {
  await page.goto('https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo');
  await page.getByRole('button', { name: 'Allow all' }).click();
  await page.getByLabel('', { exact: true }).locator('span').nth(1).click();
  await page.getByRole('treeitem', { name: 'Denmark' }).click();
});

test('jquery drop-down1', async ({ page }) => {
  await page.goto('https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo');
  await page.getByRole('button', { name: 'Allow all' }).click();
  await select_country("India");
  await select_country("Denmark");
  await select_country("South Africa");


    async function select_country(countryName) {
        await page.click("#country+span");
        await page.locator("ul#select2-country-results")
            .locator("li", {
                hasText: countryName
            }).click();
    }
});