const { test,expect } = require('@playwright/test');

test('Open the synchronization practice page', async ({ page }) => {
    await page.goto(
        'https://testautomationpractice.blogspot.com/'
    );

    await page.waitForTimeout(5000);
    // await page.getByRole('radio', { name: 'Male' }).click();
    // await page.getByRole('radio', { name: 'Female', exact: true }).click();
    await page.locator("//input[@id='male']").click();
    // await page.waitForTimeout(5000);
});