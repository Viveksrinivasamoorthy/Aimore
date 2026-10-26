import {test,expect} from '@playwright/test';

test("handling dropdowns",async({page})=>{
    await page.goto('https://www.jquery-az.com/boots/demo.php?ex=63.0_2');
    await page.locator('.multiselect').click();

    const o=await page.locator('ul>li label input')
    await expect(o).toHaveCount(11);

    // select options
    const op=await page.$$('ul>li label');

    for(const ops of  op){
        const values=await ops.textContent();
        console.log(values);
        if(values.includes('Angular')||values.includes('Java')){
            await ops.click();
        }
    }

    

})