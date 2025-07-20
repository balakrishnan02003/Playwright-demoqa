// tests/menu.test.js
import { test, expect } from '@playwright/test';
import { MenuPage } from '../pages/menuPage.js';

test('Multilevel menu hover test', async ({ page }) => {
  const menu = new MenuPage(page);
  await menu.goto();

  // Hover over Main Item 2 to reveal submenu
  await menu.hoverMenu('Main Item 2');
  await expect(menu.menuItem('Sub Item').nth(0)).toBeVisible();

  // Hover to reveal "Sub Sub List"
  await menu.hoverMenu('Sub Sub List »');
  await expect(menu.menuItem('Sub Sub Item 1')).toBeVisible();
  await expect(menu.menuItem('Sub Sub Item 2')).toBeVisible();

  // Optional clicks if needed
  await menu.clickMenu('Sub Sub Item 1');
});
