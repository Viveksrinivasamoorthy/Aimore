const { test , expect}=require('@playwright/test');

test('inbuild l',async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    const logo=await page.getByAltText('company-branding');
    var l=await expect(logo).toBeVisible();
    console.log(l);
    await page.getByPlaceholder('Username').clear();
    await page.getByPlaceholder('Username').fill("Admin");
    await page.getByPlaceholder('Password').fill("admin123");

    await page.getByRole('button',{type: 'submit'}).click();
    await page.waitForTimeout(3000);
    await expect(await page.getByText('Dashboard')).toBeVisible();
})