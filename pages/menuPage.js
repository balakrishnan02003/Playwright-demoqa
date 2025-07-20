export class MenuPage {
  constructor(page) {
    this.page = page;
    this.menuItem = (text) => page.locator(`text=${text}`);
  }

  async goto() {
    await this.page.goto('https://demoqa.com/menu');
  }

  async hoverMenu(text) {
    await this.menuItem(text).hover();
  }

  async clickMenu(text) {
    await this.menuItem(text).click();
  }

  async isVisible(text) {
    return await this.menuItem(text).isVisible();
  }
}
