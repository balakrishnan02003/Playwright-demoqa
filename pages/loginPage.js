// pages/loginPage.js
import { expect } from '@playwright/test';

export class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator('#userName');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('#login');
    this.loggedInUser = page.locator('#userName-value'); // after login
  }

  async goto() {
    await this.page.goto('https://demoqa.com/login');
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async assertLoggedInAs(expectedUsername) {
    await expect(this.loggedInUser).toHaveText(expectedUsername);
  }
}
