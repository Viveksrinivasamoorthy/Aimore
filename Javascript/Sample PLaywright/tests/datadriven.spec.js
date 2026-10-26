const {test,expect} = require('@playwright/test');
const testdata= JSON.parse(JSON.stringify(require("../tests-examples/testlogin.json")));


test("soft assert",async({page})=>{
    await page.goto("https://demo.nopcommerce.com/register");
    //await page.fill("//input[@id='FirstName']",'Divya');
    await page.locator("//input[@id='FirstName']").fill(testdata.firstname);
    await page.locator("//input[@id='LastName']").fill(testdata.lastname);
    //await page.waitForTimeout(5000);
    //await page.locator("//input[@id='LastName']").clear();

})