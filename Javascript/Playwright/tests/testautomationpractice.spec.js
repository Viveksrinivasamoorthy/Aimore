const { test, expect } = require('@playwright/test');

test('Verify page and enter student name', async ({ page }) => {

    // Step 1: Navigate to the application
    await page.goto(
        'https://testautomationpractice.blogspot.com/'
    );

    // Step 2: Verify the page title
    await expect(page).toHaveTitle(
        /Automation Testing Practice/
    );

    // Step 3: Identify the Name textbox
    const name = page.locator('#name');

    // Step 4: Verify textbox visibility
    await expect(name).toBeVisible();

    // Step 5: Enter the student name
    await name.fill('Arun');

    // Step 6: Verify the entered value
    await expect(name).toHaveValue('Arun');

    // Step 7: Verify textbox is enabled
    await expect(name).toBeEnabled();

    await page.waitForTimeout(10000);

});