const {test,expect} = require('@playwright/test');
const { request } = require('http');
const uid=7;

test("get users" , async({request})=>{
    const response=await request.get('https://reqres.in/api/users?page=2');
    console.log(await response.json());
    expect(response.status()).toBe(200);
})

test("post call",async({request})=>{
   const response= await request.post('https://reqres.in/api/users',{
        data: {"name":"kumar","job":"trainer"},
        headers:{"Accept":"application/json"}
    });
    console.log(await response.json())

})
test("put call",async({request})=>{
    const response= await request.put('https://reqres.in/api/users/7',{
         data: {"name":"kumar","job":"student"},
         headers:{"Accept":"application/json"}
     });
     console.log(await response.json())
 
 })

 test("delete users" , async({request})=>{
    const response=await request.delete('https://reqres.in/api/users/7');
    //console.log(await response.json());
    expect(response.status()).toBe(204);
})
