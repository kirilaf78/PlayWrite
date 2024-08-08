import { test, expect } from '@playwright/test';
import moment from 'moment';
test('calendar', async ({ page }) => {
  await page.goto('https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo');
  await page.getByRole('button', { name: 'Allow all' }).click();
  const myDate = "1978-08-18";
  await page.getByLabel('Birthday:').fill(myDate);
});

test('calendar1', async ({ page }) => {
  await page.goto('https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo');
  await page.getByRole('button', { name: 'Allow all' }).click();
  await selectDate(18, "April 2024");
  await page.reload();
  await selectDate(28, "July 2024");


    async function selectDate(date: number, dateToSelect: string) {
        await page.getByPlaceholder('Start date').click();
        let mmYY = page.locator("(//table[@class='table-condensed']//th[@class='datepicker-switch'])[1]");
        const prevDate = page.getByRole('cell', { name: '«' });
        const futureDate = page.getByRole('cell', { name: '»' });
        const thisMonth = moment(dateToSelect, "MMMM YYYY").isBefore();
        console.log("This month " + thisMonth);
        while (await mmYY.textContent() != dateToSelect) {
            if (thisMonth) {
                await prevDate.click();
            } else {
                await futureDate.click();
            }

        }
        await page.getByRole('cell', { name: `${date}` }).click();
    }
});
