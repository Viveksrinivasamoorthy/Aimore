const {test,expect} = require('@playwright/test');
import{Loginpage} from '../pages/loginpage';
import{homepage} from '../pages/homepage';





test('test',async({page})=>{
    const login=new Loginpage(page);
    await login.gotologinpage();
    await login.login('pavanol','test@123');
    //await page.waitForTimeout(3000)
    //await page.waitForTimeout(3000)

    const home=new homepage(page);
    await home.addproducttothecard("Nexus 6");
    await page.waitForTimeout(3000)
    await page.gocart();

})
