import {test, expect} from '@playwright/test';
test.beforeAll(async()=>{
    console.log('this is beforeall hook')
})
test.afterAll(async()=>{
    console.log('this is afterall hook')
})
test.beforeEach(async()=>{
    console.log('this is beforeeach hook')
})
test.afterEach(async()=>{
    console.log('this is aftereach hook')
})

test.describe.only('group1',()=>{

test('test1', async({page})=>{
    console.log('this is test1');

})
test('test2', async({page})=>{
    console.log('this is test2');

})
test('test3', async({page})=>{
    console.log('this is test3');

})
})
test.describe('group2',()=>{
test('test4', async({page})=>{
    console.log('this is test4');

})
test('test5', async({page})=>{
    console.log('this is test5');

})
test('test6', async({page})=>{
    console.log('this is test6');

})
})