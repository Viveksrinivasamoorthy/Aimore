const {test,expect} =require('@playwright/test');
test('alert with ok',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    // enabling alert handling // dilago window handler
    page.on('dialog',async dialog=>{
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('I am an alert box!')
        await dialog.accept();
    })

    await page.click("//button[@id='alertBtn']");

})

test('confirmation alert box',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    page.on('dialog',async dialog=>{
        expect(dialog.type()).toContain('confirm')
        expect(dialog.message()).toContain('Press a button!');
        await page.waitForTimeout(3000);
        await dialog.accept();
        //await dialog.dismiss(); // click the cancel button
    })
    await page.waitForTimeout(3000);
    await page.click("//button[text()='Confirmation Alert']");

    await page.waitForTimeout(3000);
    await expect(page.locator("//*[text()='You pressed OK!']")).toHaveText('You pressed OK!')

})
test('promt box',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    page.on('dialog',async dialog=>{
        expect(dialog.type()).toContain('prompt');
        expect(dialog.message()).toContain('Please enter your name:');
        expect(dialog.defaultValue()).toContain('Harry Potter')
        await dialog.accept('divya');
        await page.waitForTimeout(3000);
    })
    await page.waitForTimeout(3000);
    await page.click('//*[@id="promptBtn"]');
    //Hello divya! How are you today?
    await page.waitForTimeout(3000);
    await expect(page.locator("//*[@id='demo']")).toHaveText('Hello divya! How are you today?');
    await page.waitForTimeout(3000);

})