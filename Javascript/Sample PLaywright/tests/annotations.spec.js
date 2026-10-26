const {test,expect} = require('@playwright/test');
// only
/*test.only("test1@sanity",({page})=>{
    console.log("test1...")

})*/
// skip annotation
/*test.skip("test2",async({page})=>{
    console.log("test1...")

})*/


test("test3",async({page,browserName})=>{
    console.log("test3");
    if(browserName==='firefox'){
        test.skip();
    }


})
// fixme
test("test4",async({page})=>{
    test.fixme();
    console.log("test 4....")
})
// fail

test("test 5",async({page})=>{
    test.fail();
    console.log("test 5")
    expect(1).toBe(2);
})

test("test6",async({page})=>{
    test.slow();
    await page.goto("https://testautomationpractice.blogspot.com/");
    console.log("test 6");
    
})