const {test, expect} =require('@playwright/test');
test('fileupload',async({page})=>{
    await page.goto('http://the-internet.herokuapp.com/upload');
    //await page.locator("#file-upload").click();
    await page.locator("#file-upload").setInputFiles('tests/uploadfiles/Sep-2024-Payslip.pdf');
    await page.locator("#file-submit").click();

})

test('m f',async({page})=>{
    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');
    await page.locator('#filesToUpload').setInputFiles(['tests/uploadfiles/RESUME_Suthamathi (1) (1).pdf','tests/uploadfiles/Sep-2024-Payslip.pdf']);
    await page.waitForTimeout(5000);
    await page.locator('#filesToUpload').setInputFiles([]);
    await page.waitForTimeout(5000);


})
