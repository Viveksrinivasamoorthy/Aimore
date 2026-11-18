const { test, expect } = require('@playwright/test');

test.use({
    viewport: { width: 1920, height: 1080 },
    screenshot: 'on',
});
 test('Verify successful login', async ({ page }) => {
  await page.goto('https://eaapp.somee.com/');
  await page.getByRole('link', { name: 'Sign In', exact: true }).click();
  await page.getByRole('textbox', { name: 'User Name' }).click();
  await page.getByRole('textbox', { name: 'User Name' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('password');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('link', { name: 'View Employees →' }).click();
  await page.getByRole('link', { name: '✎ Edit' }).first().click();
  await page.getByRole('spinbutton', { name: 'Age' }).click();
  await page.getByText('Full Name').click();
  await page.getByRole('textbox', { name: 'Full Name' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).fill('Abhi');
  await page.getByRole('button', { name: '✓ Save Changes' }).click();
  await page.getByRole('button', { name: 'Logout' }).click();

    });