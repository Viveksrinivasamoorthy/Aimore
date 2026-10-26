const {test,expect} = require('@playwright/test');

test("soft assert",async({page})=>{
    await page.goto("https://demo.nopcommerce.com/register");
    await page.locator("//input[@id='gender-male']").click();
    await page.waitForTimeout(5000);
    await expect(await page.locator("//input[@id='gender-male']")).toBeChecked();
    await expect(await page.locator("//input[@id='gender-male']").isChecked()).toBeTruthy();
    await page.waitForTimeout(5000);
    await page.locator("//input[@id='gender-female']").check();
    await page.waitForTimeout(5000);
    await expect(await page.locator("//input[@id='gender-male']").isChecked()).toBeFalsy();


})