//const {test,expected}=require('@playwright/test');
import {test,expect} from '@playwright/test';
test('locatemultipleelement',async({page})=>{
    await page.goto("https://demoblaze.com/index.html");
   const links= await page.$$("a");

   for(const link of links){
    const lt= await link.textContent();
    //console.log(lt);
   }

   const products=await page.$$("//div[@id='tbodyid']//div//h4//a");
   products.length;

   for(const i=0; i<products.length;i++){
    const pn=await i.textContent();
    console.log(pn);
   }

   /*for(const product of produts){
    const pn=await product.textContent();
    //console.log(pn);
   }*/

})
