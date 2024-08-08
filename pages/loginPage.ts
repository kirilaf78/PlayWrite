import {Page} from "playwright/test";

  //await this.page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/login');
export default class LoginPage{
  constructor (public page: Page){}

  async enterEmail(email: string)
    {
    await this.page.getByPlaceholder('E-Mail Address').fill(email);
    }

  async enterPassword(password: string)
    {
    await this.page.getByPlaceholder('Password').fill(password);
    }  
  async clickContinue()
    {
    await this.page.getByRole('button', { name: 'Login' }).click();
    }  
}

