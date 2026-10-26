const {test,expect} = require('@playwright/test');

test("soft assert",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    
    //await page.locator("#country").selectOption({label:'India'}); // lable and visible text
    await page.locator("#country").selectOption('India'); // visible text
    await page.waitForTimeout(5000);
    await page.locator("#country").selectOption({value: 'uk'}); // using value
    await page.waitForTimeout(5000);
    await page.locator("#country").selectOption({index: 2}); // using index
    await page.waitForTimeout(5000);
    await page.selectOption("#country",'India')


    

})