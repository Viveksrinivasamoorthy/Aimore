const {test,expect} = require('@playwright/test');
exports.homepage= class homepage{

    constructor(page){
        this.page=page;
        this.productList='//*[@id="tbodyid"]/div/div/div/h4/a';
        this.addtocart='//a[normalize-space()="Add to cart"]';
        this.card='#cartur';
    }
    async addproducttothecard(productname){
       const pl= await this.page.$$(this.productList);
       for(const product of pl){
        if(productname=== await product.textContent()){
            await product.click();
            break;
        }
       }
       await this.page.on('dialog',async dialog=>{
        if(dialog.message().includes('added')){
            await dialog.accept();
        }
       })
       await this.page.locator(this.addtocart).click();
    }

    async gocart(){
        await this.page.locator(this.card).click();
    }
}