// PLAYWRIGHT (Node.js) — not for the console
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('https://www.amazon.in');
  await page.locator('#twotabsearchtextbox').fill('headphones');   // verify selector first
  await page.locator('#nav-search-submit-button').click();

    await page.waitForLoadState('domcontentloaded');
  await page.waitForTimeout(10000); // ⏳ 10 seconds
  const cards = page.locator("div[data-component-type='s-search-result']");
  console.log(await cards.count());
  console.log(await cards.first().locator('h2').innerText());
  await browser.close();
})();
 