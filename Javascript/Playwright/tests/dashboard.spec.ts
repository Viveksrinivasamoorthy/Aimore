import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://eaapp.somee.com/Home/Dashboard');
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'User Name' }).click();
  await page.getByRole('textbox', { name: 'User Name' }).fill('admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('password');
  await page.getByRole('textbox', { name: 'Password' }).press('Enter');
  await page.getByRole('link', { name: 'View Employees →' }).click();
  await page.getByRole('link', { name: '✎ Edit' }).first().click();
  await page.getByRole('spinbutton', { name: 'Age' }).click();
  await page.getByRole('spinbutton', { name: 'Age' }).fill('50');
  await page.getByRole('button', { name: '✓ Save Changes' }).click();
  await page.getByText('🔵 Senior Tenure').click();
  await page.getByRole('link', { name: 'Hello admin!' }).click();
  await page.getByRole('button', { name: 'Logout' }).click();
});