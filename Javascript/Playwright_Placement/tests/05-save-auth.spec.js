const { test, expect } = require('@playwright/test');

test('save login state', async ({ page }, testInfo) => {
  await page.goto('https://www.saucedemo.com');
  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page).toHaveURL(/inventory\.html/);
  await expect(page.locator('.title')).toHaveText('Products');

  // setup-chromium -> chromium, setup-firefox -> firefox, etc.
  // const browserName = testInfo.project.name.replace('setup-', '');
  //await page.context().storageState({ path: `playwright/.auth/${browserName}.json` });
});