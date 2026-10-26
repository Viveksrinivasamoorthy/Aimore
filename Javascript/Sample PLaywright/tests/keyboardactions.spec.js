const {test, expect} =require('@playwright/test');
test('key',async({page})=>{
    await page.goto('https://gotranscript.com/text-compare');
    await page.waitForTimeout(6000);
    await page.locator('[name="text1"]').fill("Welcome to playwright");
    await page.waitForTimeout(6000);
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(6000);
    await page.keyboard.press('Control+C');
    await page.waitForTimeout(6000);
    await page.keyboard.down('Tab');
    await page.waitForTimeout(6000);
    await page.keyboard.up('Tab');
    await page.waitForTimeout(6000);
    await page.keyboard.press('Control+V');
    //await page.waitForTimeout(6000);


    
    
    
})
