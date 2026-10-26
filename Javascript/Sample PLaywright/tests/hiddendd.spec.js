import {test,expect} from '@playwright/test';

test("handling dropdowns",async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.locator("[name='username']").clear();
    await page.locator("[name='username']").fill("Admin");
    await page.locator("[name='password']").clear();
    await page.locator("[name='password']").fill("admin123");
    await page.locator("[type='submit']").click();

    await page.locator("//span[text()='PIM']").click();

    await page.locator("//*[@id='app']/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[6]/div/div[2]/div/div/div[2]/i").click();

    await page.waitForTimeout(3000);

    var op=await page.$$("//div[@role='listbox']//span");

    for(var v of op){
       var value=await v.textContent();
       console.log(value);
       if(value.includes('Account Assistant')){
        await v.click();
        //break;

       }
    }
    var vv=await page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[6]/div/div[2]/div/div/div[1]').textContent();
    console.log(vv);


    
    
    

})