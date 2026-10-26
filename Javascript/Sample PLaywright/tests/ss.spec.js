import {test,expect} from '@playwright/test';

// take the ss page

test('page ss',async({page})=>{
    await page.goto('https://chandanachaitanya.github.io/selenium-practice-site/');
    await page.screenshot({path:'tests/screenshots/'+Date.now()+'homepage.png'});
})
//take the ss of full page
test('page fullpage',async({page})=>{
    await page.goto('https://chandanachaitanya.github.io/selenium-practice-site/');
    await page.screenshot({path:'tests/screenshots/'+Date.now()+'fullpage.png',fullPage:true});
})
// take the ss of element
test('element ss',async({page})=>{
    await page.goto('https://chandanachaitanya.github.io/selenium-practice-site/');
    await page.locator('#enterText').screenshot({path:'tests/screenshots/'+Date.now()+'mac.png'});
})
