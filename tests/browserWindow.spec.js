import { test, expect } from '@playwright/test';
import { BrowserWindowPage } from '../pages/browserWindowPage.js';

test('Browser Windows - tab, window, and message window', async ({ page }) => {
  const browserWin = new BrowserWindowPage(page);
  await browserWin.gotoBW();

  // Test New Tab
  const newTab = await browserWin.openNewTab();
  await newTab.waitForLoadState();
  const textInTab = await newTab.locator('#sampleHeading').textContent();
  expect(textInTab).toContain('This is a sample page');
  await newTab.close();

  // Test New Window
  const newWindow = await browserWin.openNewWindow();
  await newWindow.waitForLoadState();
  const textInWindow = await newWindow.locator('#sampleHeading').textContent();
  expect(textInWindow).toContain('This is a sample page');
  await newWindow.close();

  // Test New Message Window
  const messageWindow = await browserWin.openNewMessageWindow();
  await messageWindow.waitForLoadState();
  const bodyText = await messageWindow.locator('body').textContent();
  console.log('Message window text:', bodyText.trim());
  expect(bodyText).not.toBeNull();
  await messageWindow.close();
});
