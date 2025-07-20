import { expect } from '@playwright/test';

export class ButtonsPage {
  constructor(page) {
    this.page = page;
    this.doubleClickBtn = page.locator('#doubleClickBtn');
    this.rightClickBtn = page.locator('#rightClickBtn');
    this.clickMeBtn = page.getByRole('button', { name: 'Click Me', exact: true });
    this.doubleClickMessage = page.locator('#doubleClickMessage');
    this.rightClickMessage = page.locator('#rightClickMessage');
    this.dynamicClickMessage = page.locator('#dynamicClickMessage');
  }

  async gotoButton() {
    await this.page.goto('https://demoqa.com/buttons');
  }

  async doubleClick() {
    await this.page.dblclick('#doubleClickBtn');
  }

  async rightClick() {
    await this.page.click('#rightClickBtn', { button: 'right' });
  }

  async normalClick() {
    await this.clickMeBtn.click();
  }

  async assertDoubleClickSuccess() {
    await expect(this.doubleClickMessage).toHaveText('You have done a double click');
  }

  async assertRightClickSuccess() {
    await expect(this.rightClickMessage).toHaveText('You have done a right click');
  }

  async assertNormalClickSuccess() {
    await expect(this.dynamicClickMessage).toHaveText('You have done a dynamic click');
  }
}