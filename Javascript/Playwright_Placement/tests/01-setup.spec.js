const { test, expect } = require('@playwright/test');

test('practice site loads', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  await expect(page).toHaveTitle('Automation Testing Practice');
  await expect(page.getByRole('heading', { name: 'Static Web Table' })).toBeVisible();
});