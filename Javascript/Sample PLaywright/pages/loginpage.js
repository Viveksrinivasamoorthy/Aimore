const {test,expect} = require('@playwright/test');
exports.Loginpage= class Loginpage{
     
    constructor(page){
        this.page=page;
        this.loginlink="#login2"
        this.usernameinput="#loginusername";
        this.passwordinput="#loginpassword";
        this.loginbutton="//button[@onclick='logIn()']";
    }
    async gotologinpage(){
        await this.page.goto('https://www.demoblaze.com/index.html');
    }
    async login(usename,password){
        await this.page.locator(this.loginlink).click();
        await this.page.locator(this.usernameinput).fill(usename);
        await this.page.locator(this.passwordinput).fill(password);
        await this.page.locator(this.loginbutton).click();
    }
    async contact(){

    }
}

