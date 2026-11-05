const { test, expect } = require('@playwright/test');

test('alert with ok', async ({ page }) => {

    console.log("Step 1: Navigating to the website");

    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.waitForTimeout(3000);

    console.log("Step 2: Website navigation completed");

    // Register dialog handler
    console.log("Step 3: Enabling alert handling");

    page.on('dialog', async dialog => {

        console.log("Step 4: Alert dialog detected");

        console.log("Dialog Type:", dialog.type());

        console.log("Dialog Message:", dialog.message());

        expect(dialog.type()).toContain('alert');
        await page.waitForTimeout(10000);

        expect(dialog.message()).toContain('I am an alert box!');

        console.log("Step 5: Alert validation successful");

        await page.waitForTimeout(10000);
        await dialog.accept();
        

        console.log("Step 6: Alert accepted successfully");

    });

    console.log("Step 7: Clicking the alert button");

    await page.click("//button[@id='alertBtn']");
    

    console.log("Step 8: Alert test execution completed");

});

/*const {test,expect} =require('@playwright/test');

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

}) */