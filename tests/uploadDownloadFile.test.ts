import { test, expect } from '@playwright/test';

test('download_file', async ({ page }) => {
  await page.goto('https://www.lambdatest.com/selenium-playground/generate-file-to-download-demo');
  await page.getByRole('button', { name: 'Allow all' }).click();
  await page.locator('#textbox').fill('hi, I am a Kiryl');
  await page.keyboard.press('Enter')
  await page.getByRole('button', { name: 'Generate File' }).click();
  // This setup (downloadPromise) is crucial because it allows you to handle the download once it begins, 
  //ensuring that the download is captured and managed properly.
  const downloadPromise = page.waitForEvent('download'); // Prepares for the download: By calling page.waitForEvent('download') before triggering the download, you ensure that you are ready to capture the download event as soon as it occurs.
  await page.getByRole('link', { name: 'Download' }).click();
  // Handles the download: Awaiting the downloadPromise ensures that you capture and can then manage the download. The Download object returned allows you to interact with the downloaded file, such as saving it to a specific location.
  const download = await downloadPromise;
  const fileName = download.suggestedFilename();
  await download.saveAs(fileName);
  expect(fileName).toBe('Lambdainfo.txt');
});

test('upload_file', async ({ page }) => {
  await page.goto('https://blueimp.github.io/jQuery-File-Upload/');
  await page.setInputFiles('input[type="file" ]', ["uploadImages/download.jpeg", "uploadImages/download1.jpeg"]);
})