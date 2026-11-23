const {test, expect} =require('@playwright/test');
test.skip('rightclick',async({page})=>{
    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html');
    var rc=await page.locator("(//*[text()='right click me'])[1]");
    await rc.click({button: 'right'});
    await page.waitForTimeout(5000);

    
    
})
test('doubleclick',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    var dc=await page.locator("(//*[text()='Copy Text'])");
    await dc.dblclick();
    await page.waitForTimeout(5000);
    
    
})