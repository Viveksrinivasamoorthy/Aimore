const { test,expect } = require('@playwright/test');

test('Interact with DropDown Elements', async ({ page }) => {
    
    await page.goto(
        'https://testautomationpractice.blogspot.com/'
    );

    const title = await page.title();
    console.log('Page title is: ' + title);

    // Step 2: Verify the page title
    await expect(page).toHaveTitle(
        /Automation Testing Practice/
    );

    await page.locator("#country").selectOption({label: 'India'});

    await page.waitForTimeout(2000);

    await page.locator("#country").selectOption({value: 'germany'});
    await page.waitForTimeout(2000);

    await page.locator("#country").selectOption({index:5});
    await page.waitForTimeout(2000);

    const value = await page.locator("#country").textContent();

    console.log("Drop down selected value is: " + value);

    await expect(value.includes("Japan")).toBeTruthy();

    let country = await page.$("#country");

    let elements = await country.$$("option");

    let isfound = false;

    console.log("Total number of drop down elements are: " + elements.length);

    for (let i = 0; i < elements.length; i++) {
        let text = await elements[i].textContent();
        console.log("Dropdown Current Elemenet is: " + text);

        if (text.includes("Spain")) {
            console.log("Spain is present in the drop down");
            isfound = true;
            break;
        }
    }

    await expect(isfound).toBeTruthy();  
});