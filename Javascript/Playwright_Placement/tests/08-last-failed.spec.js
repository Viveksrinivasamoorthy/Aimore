const { test, expect } = require('@playwright/test');
const URL = 'https://testautomationpractice.blogspot.com/';

test('title is correct', async ({ page }) => {
  await page.goto(URL);
  await expect(page).toHaveTitle('Automation Testing Practice');
});

test('this one fails on purpose', async ({ page }) => {
  await page.goto(URL);
  const expected = process.env.FIX ? 'Automation Testing Practice' : 'Wrong Title';
  await expect(page).toHaveTitle(expected);
});