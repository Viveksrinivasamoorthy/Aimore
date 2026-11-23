const { test, expect } = require('@playwright/test');

test('Verify page and enter student name', async ({ page }) => {
    await page.goto('https://gotranscript.com/text-compare'); 
    await page.locator('[name="text1"]').fill("Welcome to playwright"); 
    await page.keyboard.press('Control+A'); 
    await page.keyboard.press('Control+C');
    await page.keyboard.press('Tab');
    await page.waitForTimeout(6000);
    await page.keyboard.press('Control+V');
    await page.waitForTimeout(6000);
});