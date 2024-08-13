import { test, expect } from '@playwright/test';
import RegisterPage from '../pages/registerPage';
import LoginPage from '../pages/loginPage';
import HomePage from '../pages/homePage';

const email = 'kir@gmail.com';
const password = '12345';
test('register', async ({ page, baseURL }) => {
    const register = new RegisterPage(page);
    await page.goto(`${baseURL}route=account/register`)
    await register.enterFirstName('Kiryl')
    await register.enterLastName('Afanasyue')
    await register.enterEmail(email)
    await register.enterPhone('+375457568743')
    await register.enterPassword(password)
    await register.confirmPassword(password)
    await expect(register.subscribe).toBeChecked();
    await register.clickAgree()
    await register.clickContinue();

});

test('login', async ({ page, baseURL }) => {
    const login = new LoginPage(page);
    await page.goto(`${baseURL}route=account/login`)
    await login.loginMethod(email, password)
    await expect(page.getByRole('heading', { name: 'My Account' })).toBeVisible();
});

test('addToCard', async ({ page, baseURL }) => {
    const home = new HomePage(page)
    const login = new LoginPage(page)
    await page.goto(`${baseURL}route=account/login`);
    await login.loginMethod(email, password)
    await page.goto(`${baseURL}route=common/home`);
    await home.clickProductIcon()
    await home.hoverOver()
    await home.addToBasket()
    await home.viewCard()
    const isProductVisible = await home.IsProductInBasket();
    await expect(isProductVisible).toBeVisible;



});
