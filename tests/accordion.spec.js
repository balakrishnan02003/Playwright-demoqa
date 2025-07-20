import { test, expect } from '@playwright/test';
import { AccordionPage } from '../pages/accordionPage.js';

test('Accordion page test', async ({ page }) => {
  const acc = new AccordionPage(page);
  await acc.gotoAccordion();

  // Section 1: Should be open by default
  expect(await acc.isSectionVisible(1)).toBe(true);
  const text1 = await acc.getSectionContent(1);
  expect(text1.length).toBeGreaterThan(10);

  // Section 2: Expand it
  await acc.expandSection(2);
  expect(await acc.isSectionVisible(2)).toBe(true);
  const text2 = await acc.getSectionContent(2);
  expect(text2).toContain('Contrary to popular belief');

  // Section 3: Expand it
  await acc.expandSection(3);
  expect(await acc.isSectionVisible(3)).toBe(true);
  const text3 = await acc.getSectionContent(3);
  expect(text3).toContain('It is a long established fact');
});
