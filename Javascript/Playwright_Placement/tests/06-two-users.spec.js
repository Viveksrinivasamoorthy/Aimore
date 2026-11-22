const { test, expect } = require('@playwright/test');

async function login(page, username) {
  await page.goto('https://www.saucedemo.com');
  await page.getByPlaceholder('Username').fill(username);
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page).toHaveURL(/inventory\.html/);
}

test('two users at the same time', async ({ browser }) => {
  const userA = await browser.newContext();
  const userB = await browser.newContext();
  const a = await userA.newPage();
  const b = await userB.newPage();

  await login(a, 'standard_user');
  await login(b, 'visual_user');

  await a.getByRole('button', { name: 'Add to cart' }).first().click();
  await expect(a.locator('.shopping_cart_badge')).toHaveText('1');
  await expect(b.locator('.shopping_cart_badge')).toHaveCount(0);
});


/*
test('contexts do not share storage', async ({ browser }) => {
  const c1 = await browser.newContext();
  const c2 = await browser.newContext();
  const p1 = await c1.newPage();
  const p2 = await c2.newPage();
  await p1.goto('https://testautomationpractice.blogspot.com/');
  await p2.goto('https://testautomationpractice.blogspot.com/');
  await p1.evaluate(() => localStorage.setItem('role', 'admin'));
  expect(await p2.evaluate(() => localStorage.getItem('role'))).toBeNull();
}); */