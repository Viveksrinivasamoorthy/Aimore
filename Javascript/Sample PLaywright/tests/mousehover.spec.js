const {test, expect} =require('@playwright/test');
test('mousehover',async({page})=>{
    await page.goto('https://demo.opencart.com/');
    var mh=await page.locator("//*[text()='Desktops']");
    await mh.hover();
   
    
})
