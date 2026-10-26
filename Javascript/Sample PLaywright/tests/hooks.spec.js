const {test, expect} =require('@playwright/test');

test.beforeEach(async ({browser})=>{
   let page=await browser.newPage();
    await page.goto('https://www.demoblaze.com/index.html');
    await page.locator('#login2').click();
    await page.locator('#loginusername').fill('pavanol');
    await page.locator('#loginpassword').fill('test@123')
    await page.locator('//button[text()="Log in"]').click();
})
test.afterEach(async()=>{

    await page.locator('#logout2').click();
})
test('home page validation',async({page})=>{
    
  const product=await page.$$('.hrefch');


    //expect(product).toHaveLength(9);

    await page.locator('#logout2').click();
    
    
})
test('add product',async({page})=>{
    
    await page.locator('//a[text()="Samsung galaxy s6"]').click();
      
      
  })
