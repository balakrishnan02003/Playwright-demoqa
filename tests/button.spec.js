import { test, expect } from '@playwright/test';
import { ButtonsPage } from '../pages/ButtonsPage.js';

test('Button tests', async ({ page }) => {
  const btn = new ButtonsPage(page);

  await btn.gotoButton();

  await btn.doubleClick();
  await btn.assertDoubleClickSuccess();

  await btn.rightClick();
  await btn.assertRightClickSuccess();

  await btn.normalClick();
  await btn.assertNormalClickSuccess();
});