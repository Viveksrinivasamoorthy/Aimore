const { test } = require('@playwright/test');
const URL = 'https://testautomationpractice.blogspot.com/';

test('pause and explore', async ({ page }) => {
  await page.goto(URL);
  await page.getByPlaceholder('Enter Name').fill('Priya');
  //await page.pause(); // the test freezes here and the Inspector opens
  await page.getByPlaceholder('Enter EMail').fill('priya@test.com'); // confirm
});