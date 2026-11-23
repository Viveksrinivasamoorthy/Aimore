const {test,expect}=require('@playwright/test');
const {chromium}=require('@playwright/test');
test('worling with windows',async({browser})=>{
   const context= await browser.newContext();
   const page=await context.newPage();
   await page.goto("https://freelance-learn-automation.vercel.app/login");
   const [newPage]=await Promise.all
        ([
              context.waitForEvent("page"),
            page.locator("(//a[contains(@href,'facebook')])[1]").click()

      ])
      //await newPage.waitForTimeout(5000);
      await newPage.locator("(//input[@name='email'])[2]").fill("divya");
      //await newPage.waitForTimeout(5000);
      await newPage.close();
      //await newPage.waitForTimeout(5000);
})

test.skip("open app",async()=>{
    const b=await chromium.launch({
        headless: false
    })
    const context=await b.newContext();
    const page=await context.newPage();
    await page.goto('https://Letcode.in/windows');
})
test("m page", async()=>{
    const [multiplepage]=await Promise.all([
        context.waitForEvent("page"),
        await page.click("#multi")
    ])
    await multiplepage.waitForLoadState();
    const allw=page.context().pages();


    console.log(allw.length);
    allw.forEach(page=>{
        console.log(page.url());
    })
    await allw[1].bringToFront();


})