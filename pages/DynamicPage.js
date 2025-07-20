import { expect } from '@playwright/test';

export class DynamicPage {
  constructor(page) {
    this.page = page;
    this.enableAfterBtn = page.locator('#enableAfter');
    this.colorChangeBtn = page.locator('#colorChange');
    this.visibleAfterBtn = page.locator('#visibleAfter');
  }

  async gotoDP() {
    await this.page.goto('https://demoqa.com/dynamic-properties');
  }

  async waitForEnableAfterEnabled() {
    await expect(this.enableAfterBtn).toBeEnabled({ timeout: 7000 });
  }

  async waitForColorChange() {
    await expect(this.colorChangeBtn).toHaveClass(/text-danger/, { timeout: 7000 });
  }

  async waitForVisibleAfterAppears() {
    await expect(this.visibleAfterBtn).toBeVisible({ timeout: 7000 });
  }
}