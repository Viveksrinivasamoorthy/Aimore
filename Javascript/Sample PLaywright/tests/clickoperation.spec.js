const {test, expect} =require('@playwright/test');
test('rightclick',async({page})=>{
    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html');
    var rc=await page.locator("(//*[text()='right click me'])[1]");
    await rc.click({button: 'right'});
    
    
})
test('doubleclick',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    var dc=await page.locator("(//*[text()='Copy Text'])");
    await dc.dblclick();
    
    
})

test.only('darg and drop',async({page})=>{
    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html');
    const s=await page.locator("#box2");
    const d=await page.locator("#box106");
    // approach1

    /*await s.hover()
    await page.mouse.down()

    await d.hover()
    await page.mouse.up()*/

    // approach2

    await s.dragTo(d);

    await page.waitForTimeout(6000);

})



