import { test,expect } from '@playwright/test';
import { FormPage } from '../pages/formPage.js';

test('Fill and submit the form', async ({ page }) => {
  const form = new FormPage(page);
  await form.gotoFP();
  await expect(form.firstName).toBeVisible();

  await form.fillBasicInfo('John', 'Doe', 'john.doe@example.com', '1', '9876543210');
  await form.setDateOfBirth('10 Jan 1995');
  await form.selectSubject('Maths');
  await form.selectHobbies(['Sports']);
  await form.uploadPicture('profile.png'); 
  await form.fillAddress('123 Playwright Lane, Test City');
  await form.selectStateAndCity('NCR', 'Delhi');
  await form.submitForm();
});