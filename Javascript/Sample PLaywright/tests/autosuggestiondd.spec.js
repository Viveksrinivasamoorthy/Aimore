import {test,expect} from '@playwright/test';

test("handling dropdowns",async({page})=>{
    await page.goto('https://www.redbus.in/');
    await page.locator('#src').fill('Delhi');
    await page.waitForSelector("//li[contains(@class,'sc-iwsKbI')]/div/text[1]");

    const f=await page.$$("//li[contains(@class,'sc-iwsKbI')]/div/text");

    for(let op of f){
        const value=await op.textContent();
        console.log(value);
        if(value.includes('Mayur Vihar')){
            await op.click();
            break;

        }
    }
    
    

})