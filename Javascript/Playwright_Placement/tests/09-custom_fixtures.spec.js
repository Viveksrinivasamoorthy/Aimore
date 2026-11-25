const { test: base, expect } = require('@playwright/test');

// 1. Create a custom fixture called 'loginPage'
const test = base.extend({
  loginPage: async ({ page }, use) => {
    // 2. Navigate to the login URL inside the fixture
    await page.goto('https://the-internet.herokuapp.com/login');

    // Pass the prepared page instance to the test
    await use(page);
  },
});

// 3. Use the fixture in a test
test('Verify successful login on The Internet Herokuapp', async ({ loginPage }) => {
  // 4. Enter username and password
  await loginPage.locator('#username').fill('tomsmith');
  await loginPage.locator('#password').fill('SuperSecretPassword!');

  // 5. Click Login
  await loginPage.locator('button[type="submit"]').click();

  // 6. Verify the success message
  const flashMessage = loginPage.locator('#flash');
  await expect(flashMessage).toBeVisible();
  await expect(flashMessage).toContainText('You logged into a secure area!');
});