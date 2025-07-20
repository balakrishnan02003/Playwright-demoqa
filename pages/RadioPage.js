import {expect} from '@playwright/test'

export class RadioPage {
    constructor(page) {
        this.page=page;
        this.resultText = page.locator('.text-success');
    }
async gotoRB() {
    await this.page.goto('https://demoqa.com/radio-button');
  }

  optionLabel(name) {
    return this.page.locator(`label[for='${name.toLowerCase()}Radio']`);
  }

async selectOption(name) {
    const label = this.optionLabel(name);
    await label.click();
  }

async assertSelected(name) {
    await expect(this.resultText).toHaveText(name);
  }

async isOptionDisabled(name) {
    const input = this.page.locator(`input[id='${name.toLowerCase()}Radio']`);
    return await input.isDisabled();
  }

}