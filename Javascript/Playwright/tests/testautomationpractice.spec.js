const { test, expect } = require('@playwright/test');

test('Verify page and enter student name', async ({ page }) => {

    // Step 1: Navigate to the application
    await page.goto(
        'https://testautomationpractice.blogspot.com/'
    );

    const title = await page.title();
    console.log('Page title is: ' + title);

    // Step 2: Verify the page title
    await expect(page).toHaveTitle(
        /Automation Testing Practice/
    );

    await page.locator("//button[normalize-space()='START']").click();

    await page.screenshot({ path: "./screenshots/started.png" });



    // Step 3: Identify the Name textbox
    const name = page.locator('#name');

    // Step 4: Verify textbox visibility
    await expect(name).toBeVisible();

    // Step 5: Enter the student name
    await name.fill('Siva');

    // Step 6: Verify the entered value
    await expect(name).toHaveValue('Siva');

    // Step 7: Verify textbox is enabled
    await expect(name).toBeEnabled();

    // await page.screenshot({ path: "./screenshots/testautomationpractice.png" });

    // Step 8: Wait for 10 seconds
    // await page.waitForTimeout(10000);

});


test('Check the value', async ({ page }) => {

    expect(10).toBe(10);

});