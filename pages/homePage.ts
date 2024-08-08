import {Page} from "playwright/test";

  //await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=common/home');
export default class HomePage{
  constructor (public page: Page){}
  async clickProductIcon(){
    await this.page.locator('a').filter({ hasText: 'Windows' }).click();

  }

  async hoverOver(){
     await this.page.getByRole('link', { name: 'HTC Touch HD HTC Touch HD HTC' }).hover();
  }

   async addToBasket(){
    await this.page.locator('.product-action > button').first().click();
   }

    async viewCard(){
    await this. page.getByRole('link', { name: 'View Cart ' }).click();

   }

   async IsProductInBasket(){
   const productName = this.page.getByRole('cell', { name: 'HTC Touch HD Reward Points:' }).getByRole('link');
   await productName.waitFor({state:'visible'})
   return productName;
   }
   







  
 }