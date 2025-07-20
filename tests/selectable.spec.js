// tests/selectable.test.js
import { test, expect } from '@playwright/test';
import { SelectablePage } from '../pages/selectablePage.js';

test('Selectable list and grid items', async ({ page }) => {
  const selectable = new SelectablePage(page);
  await selectable.goto();

  // Select list item
  await selectable.selectListItemByText('Cras justo odio');
  expect(await selectable.isListItemSelected('Cras justo odio')).toBe(true);

  await selectable.selectListItemByText('Morbi leo risus');
  expect(await selectable.isListItemSelected('Morbi leo risus')).toBe(true);

  // Select grid items
  await selectable.selectGridItemByText('Three');
  expect(await selectable.isGridItemSelected('Three')).toBe(true);

  await selectable.selectGridItemByText('Seven');
  expect(await selectable.isGridItemSelected('Seven')).toBe(true);
});
