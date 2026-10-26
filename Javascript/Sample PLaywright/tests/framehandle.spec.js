const {test, expect} =require('@playwright/test');
test('frames',async({page})=>{
    await page.goto('https://ui.vision/demo/webtest/frames/');
    // get the counts of frame 
    var allf_count=await page.frames(); // return type of frames() is array
    console.log("number of frames: ",allf_count.length);
    //approach 1:
   var f1= await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'});
   //await f1.fill('[name="mytext1"]','Hello');
   await f1.locator('[name="mytext1"]').fill("divya");
   //await page.waitForTimeout(3000);

   // approach2:
   var f2=await page.frameLocator("frame[src='frame_2.html']").locator("[name='mytext2']");
   f2.type("venkat")
   //await page.waitForTimeout(3000);
})

test('innerframe',async({page})=>{
  await  page.goto('https://ui.vision/demo/webtest/frames/');
  var f3=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'});
  await f3.locator('[name="mytext3"]').fill("indu");
 // await page.waitForTimeout(3000);

  // nested frame
  var cf=await f3.childFrames();
  cf[0].locator('//*[@id="i6"]/div[3]/div').check();
  //await page.waitForTimeout(3000);
})

