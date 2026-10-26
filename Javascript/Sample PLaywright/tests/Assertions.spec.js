const {test,expect} = require('@playwright/test');
test('Assertiontest',async({page})=>{
    await page.goto('https://demo.nopcommerce.com/register');
    const url=await expect(page).toHaveURL('https://demo.nopcommerce.com/register');
    console.log(await expect(page).toHaveURL('https://demo.nopcommerce.com/register'));
    console.log(url)
    console.log("dummy line")
    await expect(page).toHaveTitle('nopCommerce demo store. Register');
    var logoelemet=await page.locator('.header-logo');
    await expect(logoelemet).toBeVisible();
    console.log(await expect(logoelemet).toBeVisible());
   var s=await page.locator('#small-searchterms');
    await expect(s).toBeEnabled();
    var c=await page.locator('#Newsletter');
    await expect(c).toBeChecked();
    var at=await page.locator('#register-button');
    await expect(at).toHaveAttribute('type','submit');
    await expect(await page.locator('.page-title h1')).toContainText('Reg');
    await expect(await page.locator('.page-title h1')).toHaveText('Register');

    const name=await page.locator('#FirstName');

    await name.fill('divya');
    await expect(name).toHaveValue('divya');



})