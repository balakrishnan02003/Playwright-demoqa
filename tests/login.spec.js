// tests/login.test.js
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage.js';

test('Login to demoqa.com', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();

  const username = 'qwer'; 
  const password = 'Qwer@12345'; 

  await loginPage.login(username, password);
  await loginPage.assertLoggedInAs(username);
});
