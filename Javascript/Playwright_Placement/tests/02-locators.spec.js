const { test, expect } = require('@playwright/test');
const URL = 'https://testautomationpractice.blogspot.com/';

test('GetByRole locator type', async ({ page }) => {
  await page.goto(URL);

  // 1. Role: what a human sees (button, link, heading)
  await expect(page.getByRole('heading', { name: 'Static Web Table' })).toBeVisible();

});

test('GetByText locator type', async ({ page }) => {
  await page.goto(URL);

  // 2. Text: visible words
  await expect(page.getByText('Move the mouse over the button')).toBeVisible();

});


test('getByPlaceholder locator type', async ({ page }) => {
  await page.goto(URL);

  // 3. Placeholder (confirm the placeholder text)
  await page.getByPlaceholder('Enter Name').fill('Priya');

});


test('getByLabel locator type', async ({ page }) => {
  await page.goto(URL);

  // 4. Label (confirm the radio has a linked label)
  await page.getByLabel('Male', { exact: true }).check();

});


test('Locator type', async ({ page }) => {
  await page.goto(URL);

  // 5. CSS: when nothing else is available
  await page.locator('#country').selectOption('India');

});


test('Xpath Locator locator type', async ({ page }) => {
  await page.goto(URL);

  // 6. XPath: still works, so old locators survive
  await expect(page.locator("//a[normalize-space()='Hidden Elements & AJAX']").first()).toBeVisible();

  
});

test('strict mode protects you', async ({ page }) => {
  await page.goto(URL);
  await page.getByRole('link', { name: 'Home' }).first().click(); // fails if several links match
});