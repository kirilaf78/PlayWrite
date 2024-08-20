import { test, expect } from '../base/pomFixture';
import * as data from  '../testData/addToCardTestData.json'
test('register', async ({ page, baseURL, registerPage }) => {
    await page.goto(`${baseURL}route=account/register`)
    await registerPage.enterFirstName(data.firstName)
    await registerPage.enterLastName(data.lastName)
    await registerPage.enterEmail(data.email)
    await registerPage.enterPhone(data.phone)
    await registerPage.enterPassword(data.password)
    await registerPage.confirmPassword(data.password)
    await expect(registerPage.subscribe).toBeChecked();
    await registerPage.clickAgree()
    await registerPage.clickContinue();

});

test('login', async ({ page, baseURL, loginPage }) => {
    await page.goto(`${baseURL}route=account/login`)
    await loginPage.loginMethod(data.email, data.password)
    await expect(page.getByRole('heading', { name: 'My Account' })).toBeVisible();
});

test('addToCard', async ({ page, baseURL, loginPage, homePage }) => {
    await page.goto(`${baseURL}route=account/login`);
    await loginPage.loginMethod(data.email, data.password)
    await page.goto(`${baseURL}route=common/home`);
    await homePage.clickProductIcon()
    await homePage.hoverOver()
    await homePage.addToBasket()
    await homePage.viewCard()
    const isProductVisible = await homePage.IsProductInBasket();
    await expect(isProductVisible).toBeVisible;



});
