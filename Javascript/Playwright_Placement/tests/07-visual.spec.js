const { test, expect } = require('@playwright/test');
const URL = 'https://testautomationpractice.blogspot.com/';

test('book table looks the same', async ({ page }) => {
  await page.goto(URL);
  const table = page.locator('table[name="BookTable"]'); // confirm
  await expect(table).toHaveScreenshot('book-table.png');
});