const {test,expect} = require('@playwright/test');

test("soft assert",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator("//input[@id='sunday' and @type='checkbox']").check();
    await page.waitForTimeout(5000);
    await page.locator("//input[@id='sunday' and @type='checkbox']").uncheck();
    await page.waitForTimeout(5000);


    const checkboxes=["//input[@id='sunday' and @type='checkbox']",
                      "//input[@id='monday' and @type='checkbox']",
                      "//input[@id='thursday' and @type='checkbox']"
                    ];

    for(const l of checkboxes){
        await page.locator(l).check();
    }

    await page.waitForTimeout(5000);

    for(const ll of checkboxes){
       if(await page.locator(ll).isChecked()){
            await page.locator(ll).uncheck();
       }
    }
    await page.waitForTimeout(5000);
    

})