//const {test,expect}=require('@playwright/test');
import {test,expect} from '@playwright/test';

test('locators',async({page})=>{
    await page.goto("https://demoblaze.com/index.html");

    // using propert locator we need to do the click

    //await page.click('id=login2'); // 1 way
    await page.locator('id=login2').click(); // way2

    // using css

    //await page.locator('#loginusername').type("divya"); // way 1 and type ibulid function
    //await page.type('#loginusername','divya'); // way2

    //await page.fill('#loginusername','divya'); // using fill inbuild method way1
    await page.locator('#loginusername').fill('divya'); // way
    await page.waitForTimeout(5000)

    await page.fill("input[id='loginpassword']","12233")
    await page.waitForTimeout(5000)

    // xpath 

    //await page.click("(//*[text()='Log in'])[2]");
    await page.click("(//*[normalize-space()='Log in'])[2]");

    await page.waitForTimeout(5000)






})