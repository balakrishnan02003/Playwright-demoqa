import { test, expect } from '@playwright/test';
import { FramesPage } from '../pages/framesPage.js';

test('Frames test: verify content in frame1 and frame2', async ({ page }) => {
  const framesPage = new FramesPage(page);
  await framesPage.gotoFP();

  const text1 = await framesPage.getFrame1Text();
  const text2 = await framesPage.getFrame2Text();

  expect(text1).toBe('This is a sample page');
  expect(text2).toBe('This is a sample page');
});