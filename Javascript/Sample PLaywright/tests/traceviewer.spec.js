const {test,expect} = require('@playwright/test');

test("soft assert",async({page})=>{
    await page.goto("https://demo.nopcommerce.com/register");
    await page.fill("//input[@id='FirstName']",'Divya');
    await page.locator("//input[@id='LastName']").fill("venkat")
    await page.waitForTimeout(5000);
    await page.locator("//input[@id='LastNam']").clear();

})