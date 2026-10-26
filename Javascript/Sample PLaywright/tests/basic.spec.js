const { test , expect}=require('@playwright/test');

test('home page',async ({page})=>{
   await page.goto('https://demoblaze.com/index.html');

   const pagetitile=page.title();
   console.log(pagetitile);

   await expect(page).toHaveTitle('STORE');

   const purl=page.url();
   console.log(purl);

   await expect(page).toHaveURL('https://demoblaze.com/index.html');


})