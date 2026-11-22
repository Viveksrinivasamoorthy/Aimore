const { test, expect } = require('@playwright/test');

test('open inventory already logged in', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/inventory.html');
  await expect(page.locator('.title')).toHaveText('Products');
});