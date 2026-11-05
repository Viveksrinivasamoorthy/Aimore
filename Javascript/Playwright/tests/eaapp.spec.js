// PLAYWRIGHT (Node.js) — not for the console
const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();
  await page.goto('https://eaapp.somee.com/');
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'User Name' }).click();
  await page.getByRole('textbox', { name: 'User Name' }).fill('admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('password');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('link', { name: '👥 Employees' }).click();
  await page.getByRole('link', { name: '✎ Edit' }).first().click();
  await page.getByRole('button', { name: '✓ Save Changes' }).click();
  await page.screenshot({path: `save_changes.png`})
  await page.getByRole('button', { name: 'Logout' }).click();

  await page.waitForTimeout(5000);
  //await browser.close();
})();


