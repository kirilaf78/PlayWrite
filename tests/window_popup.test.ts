import { test, expect } from '@playwright/test';

test('windowPopup', async ({ page }) => {
  await page.goto('https://www.lambdatest.com/selenium-playground/window-popup-modal-demo');
  await page.getByRole('button', { name: 'Allow all' }).click();
//   const page1Promise = page.waitForEvent('popup');
//   await page.getByRole('link', { name: 'Follow On Twitter' }).click();
//   const page1 = await page1Promise;
//   await page1.goto('https://x.com/Lambdatesting');
//   await page1.getByText('Accept all cookiesRefuse non-').click();
//   console.log(page1.url());
const page2Promise = page.waitForEvent('popup');
  await page.getByText('Follow Twitter & Facebook').click();
  const page2 = await page2Promise;
  await page2.waitForLoadState();

  const multiplePages = page2.context().pages();
  console.log('Number of pages: ' + multiplePages.length);

  multiplePages.forEach(tab => {
    console.log(tab.url());
  });



});