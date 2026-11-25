const { test, expect } = require('@playwright/test');

test("Handling Frames",async({page})=> {
await page.goto("https://docs.oracle.com/javase/8/docs/api/")

const iframes = await page.frameLocator("//frame[@name='packageListFrame']");

await iframes.locator("//a[normalize-space()='java.applet']").click()

await page.pause();

})