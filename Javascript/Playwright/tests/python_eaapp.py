# PYTHON (Playwright) — async version
import asyncio
from playwright.async_api import async_playwright


async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=False)
        page = await browser.new_page()

        await page.goto("https://eaapp.somee.com/")
        await page.get_by_role("link", name="Login").click()
        await page.get_by_role("textbox", name="User Name").click()
        await page.get_by_role("textbox", name="User Name").fill("admin")
        await page.get_by_role("textbox", name="Password").click()
        await page.get_by_role("textbox", name="Password").fill("password")
        await page.get_by_role("button", name="Sign In").click()
        await page.get_by_role("link", name="👥 Employees").click()
        await page.get_by_role("link", name="✎ Edit").first.click()
        await page.get_by_role("button", name="✓ Save Changes").click()
        await page.screenshot(path="save_changes.png")
        await page.get_by_role("button", name="Logout").click()

        await browser.close()


asyncio.run(main())