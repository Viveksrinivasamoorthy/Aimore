const { test,expect } = require('@playwright/test');

test('Select Values from Dropdown', async ({ page }) => {
    await page.goto(
        'https://testautomationpractice.blogspot.com'
    );

    await page.locator('#country').selectOption({ label: 'India' });

    // await page.waitForTimeout(5000);
    await page.locator('#country').selectOption({value:"usa"});

    // await page.waitForTimeout(5000);

    await page.locator('#country').selectOption({ index: 5 });

    // await page.waitForTimeout(5000);
    // method-1 to check  values exists in dropdown or not
    const value = await page.locator('#country').textContent();
    
    console.log("Dropdown values: " + value);

    await expect(value.includes("Japan")).toBeTruthy();

    // method-2 to check  values exists in dropdown or not

    let country =  await page.$("#country");

    let allElements = await country.$$("option");

    let status= false

    for(let i=0; i<allElements.length; i++)
    {
        let text = await allElements[i].textContent();
        console.log("Dropdown values: " + text);

        if (text.includes("Japan")) {
            console.log("Japan exists in dropdown");
            status=true
            break;
        }
    }
    await expect(status).toBeTruthy();

    await page.locator("#colors").selectOption(['Red', 'Green', 'Yellow']);

    await page.waitForTimeout(5000);
});

