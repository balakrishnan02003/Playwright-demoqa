import {test,expect} from '@playwright/test'
import { CheckBox } from '../pages/CheckBoxPage'

test('nested checkboxes Testing', async ({page}) =>
{
const cb = new CheckBox(page);
await cb.gotoCB();
await cb.expand('Home');
await cb.expand('Desktop');
await cb.check('Notes');
await expect(cb.result).toContainText('notes');

await cb.uncheck('Notes');
//const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
//await page.screenshot({ path: `before-no-notes-${timestamp}.png` });
await expect(cb.result).not.toBeVisible();

await cb.check('Desktop');
await expect(cb.result).toContainText('notes');
await expect(cb.result).toContainText('commands');

await cb.expand('Documents');
await cb.expand('WorkSpace');
// const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
// await page.screenshot({ path: `before-React-Selection-${timestamp}.png` });
await cb.check('React');
await cb.check('Angular');
await cb.check('Veu');

await cb.uncheck('React');
await expect(cb.result).not.toContainText('react');

await cb.expand('Office');
await cb.check('Office');
await expect(cb.result).toContainText('public');
await expect(cb.result).toContainText('private');
await expect(cb.result).toContainText('classified');
await expect(cb.result).toContainText('general');

await cb.expand('Downloads');
await cb.check('Word File.doc');
await cb.check('Excel File.doc');
await expect(cb.result).toContainText('wordFile');
await expect(cb.result).toContainText('excelFile');

})