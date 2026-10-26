const {test, expect} =require('@playwright/test');
test('webtable',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    const table=await page.locator('#productTable');
   // number of rows
    let rows=await table.locator('tbody tr');
    console.log("number of rows:", await rows.count());
    // number of column

    let colums= await table.locator('thead tr th');
    console.log("number of columns:", await colums.count());

    // select the check box for tablet

    let mr=rows.filter({
       has: page.locator('td'),
       hasText: 'Tablet '
    })
   await mr.locator('input').check();

    await page.waitForTimeout(5000);

    // 3) select the multiple value
    await selectproduct(rows,page,'Smartwatch');
    await selectproduct(rows,page,'Wireless Earbuds');
    await page.waitForTimeout(5000);

    // 4)print all the product valus:
    for(let i=0;i<await rows.count();i++){
        let row=rows.nth(i);
       let tds= row.locator('td');
       for(let j=0;j<await tds.count()-1;j++){
        console.log(await tds.nth(j).textContent());
       }
    }
    // read all data from all the page:
    var pc=await page.locator('.pagination li a');
    console.log(pc.count());

    for(let p=0; p<await pc.count(); p++){
        if(p>0){
            await pc.nth(p).click();
          //  await page.waitForTimeout(5000);
        }
    }

    




})

async function selectproduct(rows, page, name){
    let mrs= rows.filter({
        has: page.locator('td'),
        hasText: name
    })
    await mrs.locator('input').check();
}