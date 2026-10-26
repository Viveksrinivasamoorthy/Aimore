import {test,expect} from '@playwright/test';

test("handling dropdowns",async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    // select multiple value
    await page.selectOption('#colors',['Blue','Red','Yellow']);

    // assertion num of options:
    const op=await page.$$('#colors option');
    //await expect(op).tohaveCount(7);

    //2 check num of options in dd using JS array
    const o=await page.$$('#colors option');
    console.log(o.length);
    await expect(o.length).toBe(7);

    await page.waitForTimeout(5000);

})