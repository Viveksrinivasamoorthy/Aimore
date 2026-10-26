const {test,expect}=require('@playwright/test')

test("soft assert",async({page})=>{
    await page.goto("https://www.demoblaze.com/index.html");

    await expect.soft(page).toHaveURL();

})