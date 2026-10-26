import {test, expect} from '@playwright/test';

test.beforeAll(async()=>{
    console.log("this is before all hook ............")
})
test.afterAll(async()=>{
    console.log("this is after all hook ............")
})
test.beforeEach(async()=>{
    console.log("this is before each hook ............")
})
test.afterEach(async()=>{
    console.log("this is after each hook ............")
})

test('test1',async({page})=>{
    console.log("test1")
})
test('test2',async({page})=>{
    console.log("test2")
})

