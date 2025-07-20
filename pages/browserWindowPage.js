export class BrowserWindowPage {
  constructor(page) {
    this.page = page;
    this.tabButton = page.locator('#tabButton');
    this.windowButton = page.locator('#windowButton');
    this.messageWindowButton = page.locator('#messageWindowButton');
  }

  async gotoBW() {
    await this.page.goto('https://demoqa.com/browser-windows');
  }

  async openNewTab() {
    const [newPage] = await Promise.all([
      this.page.context().waitForEvent('page'),
      this.tabButton.click(),
    ]);
    return newPage;
  }

  async openNewWindow() {
    const [newPage] = await Promise.all([
      this.page.context().waitForEvent('page'),
      this.windowButton.click(),
    ]);
    return newPage;
  }

  async openNewMessageWindow() {
    const [popup] = await Promise.all([
      this.page.context().waitForEvent('page'),
      this.messageWindowButton.click(),
    ]);
    return popup;
  }
}
