const { test, expect } = require('@playwright/test');

test('Open the synchronization practice page', async ({ page }) => {
    await page.goto(
        'https://testautomationpractice.blogspot.com/p/gui-elements-ajax-hidden.html'
    );

    await expect(page).toHaveTitle(/Automation Testing Practice/i);
    await expect(
        page.getByRole('button', { name: 'Toggle Input Box 2' })
    ).toBeVisible();

    await expect(
        page.getByRole('button', { name: 'Load AJAX Content' }).click()
    ).toBeVisible();
    await page.waitForTimeout(10000);
});