import { test, expect } from '@playwright/test';

test('handleFrames', async ({ page }) => {
  await page.goto('https://letcode.in/frame');
  const allFrames = page.frames();
  console.log('Namber of frames: ' + allFrames.length);

 await page.frameLocator('iframe[name="firstFr"]').getByPlaceholder('Enter name').fill('Kiryl');
 await page.frameLocator('iframe[name="firstFr"]').getByPlaceholder('Enter email').fill('Afanasyeu');
 await page.frameLocator('iframe[name="firstFr"]').getByPlaceholder('Enter email').press('Enter'); 
 await expect(page.frameLocator('iframe[name="firstFr"]').getByText('You have entered Kiryl')).toBeVisible();
 await page.frameLocator('iframe[name="firstFr"]').frameLocator('app-frame-content iframe').getByPlaceholder('Enter email').fill('kiril@gmail.com');
 await page.frameLocator('iframe[name="firstFr"]').frameLocator('app-frame-content iframe').getByPlaceholder('Enter email').press('Enter');
});