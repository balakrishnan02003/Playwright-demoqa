import { test, expect } from '@playwright/test';
import { WebTablePage } from '../pages/webTablePage.js';

test('Web table actions', async ({ page }) => {
  const table = new WebTablePage(page);
  await table.gotoWTP();

  const record = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    age: 30,
    salary: 50000,
    department: 'QA'
  };

  await table.addRecord(record);
  await table.assertRecordVisible('John');

  await table.search('john');
  const results = await table.getRowTexts();
  expect(results.length).toBeGreaterThan(0);
  expect(results[0].toLowerCase()).toContain('john');

  const updated = { ...record, department: 'DevOps' };
  await table.editRecordByName('John', updated);
  await table.assertRecordVisible('DevOps');

  await table.deleteRecordByName('John');
  await table.assertNoRecordVisible('John');
});