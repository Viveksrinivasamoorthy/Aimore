const { test, expect } = require('@playwright/test');
const URL = 'https://testautomationpractice.blogspot.com/';

test('read a book row from the static table', async ({ page }) => {
  await page.goto(URL);
  const row = page.getByRole('row').filter({ hasText: 'Master In Java' });
  await expect(row).toHaveCount(1);
  await expect(row.getByRole('cell').nth(1)).toHaveText('Amod');
  await expect(row.getByRole('cell').nth(3)).toHaveText('2000');
  await page.waitForTimeout(5000);
});

test('sum of all book prices', async ({ page }) => {
  await page.goto(URL);
  const prices = await page.locator('table[name="BookTable"] tr td:nth-child(4)').allTextContents(); // confirm selector
  const total = prices.map(Number).reduce((a, b) => a + b, 0);
  expect(total).toBe(7100);
  await page.waitForTimeout(5000);
});