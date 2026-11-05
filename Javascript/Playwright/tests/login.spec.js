
const { test, expect } = require('@playwright/test');

test.use({
    viewport: { width: 1920, height: 1080 },
    screenshot: 'on',
});

test.describe('Login Test Suite', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://eaapp.somee.com/');
    });

    test('Verify successful login', async ({ page }) => {

        await page.getByRole('link', { name: 'Login' }).click();

        await page.getByPlaceholder('Enter your username').fill('Admin');

        await page.locator("input[name='Password']").fill('password');

        await page.locator("//button[@type='submit']").click();

        await expect(page.locator("a[title='Manage']"))
            .toHaveText('Hello admin!');

    });

});
