export class CheckBox {
    constructor(page) {
        this.page= page;
        this.result=page.locator(`#result`);
    }

  expandToggle(name) {
    return this.page.locator(`xpath=//span[text()='${name}']/ancestor::label/preceding-sibling::button`);
  }

  checkbox(name) {
    return this.page.locator(`xpath=//span[text()='${name}']/preceding-sibling::span[@class='rct-checkbox']`);
  }

  async gotoCB() {
    await this.page.goto('https://demoqa.com/checkbox');
  }

  async expand(name) {
    const toggle = this.expandToggle(name);
    if (await toggle.isVisible()) {
      await toggle.click();
    }
  }

  async check(name) {
    const checkbox = this.checkbox(name);
    await checkbox.click();
  }

  async uncheck(name) {
    const checkbox = this.checkbox(name);
    await checkbox.click();
  }

  async assertSelected(name) {
    await this.page.waitForTimeout(300);
    await this.page.locator('#result').getByText(name.toLowerCase()).isVisible();
  }

  async assertNotSelected(name) {
    await this.page.waitForTimeout(300);
    await this.page.locator('#result').getByText(name.toLowerCase()).isHidden();
  }
}