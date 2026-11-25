const {test,expect} = require('@playwright/test');
const testdata= JSON.parse(JSON.stringify(require("../tests-examples/testlogin.json")));

/* ACCESS SINGLE VALUE 
test("soft assert",async({page})=>{
    await page.goto("https://shop.qaautomationlabs.com/register.php");
    //await page.fill("//input[@id='FirstName']",'Vivek');
    //await page.waitForTimeout(10000);
    await page.locator("//input[@id='regfirstname']").fill(testdata.firstname);
    await page.locator("//input[@id='reglastname']").fill(testdata.lastname);
    //await page.waitForTimeout(5000);
    //await page.locator("//input[@id='LastName']").clear();

})
*/
// MULTIPLE VALUE 
for (const data of testdata) {
    test(`Register user: ${data.firstname}`, async ({ page }) => {
        await page.goto("https://shop.qaautomationlabs.com/register.php");
        await page.locator("//input[@id='regfirstname']").fill(data.firstname);
        await page.locator("//input[@id='reglastname']").fill(data.lastname);
    });
}