import { test, expect } from '@playwright/test';
import { DynamicPage } from '../pages/DynamicPage.js';

test('Dynamic properties test', async ({ page }) => {
  const dp = new DynamicPage(page);
  await dp.gotoDP();

  await expect(dp.enableAfterBtn).toBeDisabled();
  await dp.waitForEnableAfterEnabled();

  await dp.waitForColorChange();

  await dp.waitForVisibleAfterAppears();
});