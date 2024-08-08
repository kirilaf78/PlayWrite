import {Page} from "playwright/test";

//https://ecommerce-playground.lambdatest.io/index.php?route=account/register
  //await this.page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/register');
export default class RegisterPage{
  constructor (public page: Page){}
  subscribe = this.page.getByText('No', { exact: true })

  async enterFirstName(fistName: string){
      await this.page.getByPlaceholder('First Name').fill(fistName);
    }
    async enterLastName(lastName: string){
  await this.page.getByPlaceholder('Last Name').fill(lastName);
    }
  async enterEmail(email: string){
  await this.page.getByPlaceholder('E-Mail').fill(email);
    }
  async enterPhone(phone: string){
    await this.page.getByPlaceholder('Telephone').fill(phone);
    } 
  async enterPassword(password: string){
    await this.page.getByPlaceholder('Password', { exact: true }).fill(password);
    }  
  async confirmPassword(password: string){
  await this.page.getByPlaceholder('Password Confirm').fill(password);
    }  

  async clickAgree (){
  await this.page.getByText('I have read and agree to the').click();

    } 
  async clickContinue(){
  await this.page.getByRole('button', { name: 'Continue' }).click();

    }  
    }

