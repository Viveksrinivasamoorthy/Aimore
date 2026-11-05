const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://eaapp.somee.com/');
    await page.getByRole('link', { name: 'Login' }).click();

    await page.getByPlaceholder('Enter your username').fill('Admin');

    await page.locator("input[name='Password']").fill('password');

    await page.locator("//button[@type='submit']").click();

    await expect(page.locator("a[title='Manage']")).toHaveText('Manage');

   // await browser.close();
})();


