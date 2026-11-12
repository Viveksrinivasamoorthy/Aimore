
import asyncio
from playwright.async_api import async_playwright


async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=False)
        page = await browser.new_page()
        await page.goto("https://www.amazon.in")
        await page.locator("#twotabsearchtextbox").fill("headphones")  # verify selector first
        await page.locator("#nav-search-submit-button").click()

        cards = page.locator("div[data-component-type='s-search-result']")
        print(await cards.count())
        print(await cards.first.locator("h2").inner_text())
        await browser.close()


asyncio.run(main())