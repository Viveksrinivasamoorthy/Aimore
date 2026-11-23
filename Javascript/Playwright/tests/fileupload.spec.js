const {test, expect} =require('@playwright/test');
test('fileupload',async({page})=>{
    await page.goto('http://the-internet.herokuapp.com/upload');
    //await page.locator("#file-upload").click();
    await page.locator("#file-upload").setInputFiles('tests/screenshots/started.png');
    await page.locator("#file-submit").click();
    await page.waitForTimeout(5000);
})

test('m f',async({page})=>{
    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');
    await page.locator('#filesToUpload').setInputFiles(['tests/screenshots/testautomationpractice.png','tests/screenshots/started.png']);
    await page.waitForTimeout(5000);
})
