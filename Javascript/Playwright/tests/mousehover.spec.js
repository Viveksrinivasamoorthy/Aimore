const { test, expect } = require('@playwright/test');
 
/*
test('select Profile from Account hover dropdown', async ({ page }) => {
  await page.goto('https://practice.softwaretestingmentor.com/mouse-hover');

  // 1. Locate the Account trigger button using its data-testid
  const accountBtn = page.getByTestId('hover-dropdown-trigger');

  // 2. Hover over the button to open the dropdown and reveal Profile
  await accountBtn.hover();
  await expect(accountBtn).toHaveAttribute('aria-expanded', 'true');
//await page.waitForTimeout(6000);
  // 3. Wait for Profile to appear and click it
  const profileOption = page.getByRole('link', { name: /^Profile$/i })
    .or(page.getByRole('button', { name: /^Profile$/i }))
    .or(page.getByText('Profile', { exact: true }));

  await expect(profileOption).toBeVisible();
  await profileOption.click();
  await page.waitForTimeout(25000);

});
 
*/
test('hover Account and click Profile', async ({ page }) => {
  await page.goto('https://practice.softwaretestingmentor.com/mouse-hover');

  const accountTrigger = page.getByTestId('hover-dropdown-trigger');
  const profileItem = page.getByTestId('hdd-profile'); // or page.locator('#hdd-profile')

  // 1. Hover over the Account button to open the dropdown menu
  await accountTrigger.hover();
  
  // 2. Wait for Profile to become visible and click it
  await expect(profileItem).toBeVisible();
  await profileItem.click();
  
  await page.mouse.move(0, 0);
  await page.waitForTimeout(6000);
}); 