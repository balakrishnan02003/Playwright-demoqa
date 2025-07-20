export class SelectablePage {
  constructor(page) {
    this.page = page;
    this.listTab = page.locator('#demo-tab-list');
    this.gridTab = page.locator('#demo-tab-grid');
    this.listItems = page.locator('#verticalListContainer .list-group-item');
    this.gridItems = page.locator('#gridContainer .list-group-item');
  }

  async goto() {
    await this.page.goto('https://demoqa.com/selectable');
  }

  async selectListItemByText(text) {
    await this.page.locator(`#verticalListContainer .list-group-item:has-text("${text}")`).click();
  }

  async selectGridItemByText(text) {
    await this.gridTab.click();
    await this.page.locator(`#gridContainer .list-group-item:has-text("${text}")`).click();
  }

  async isListItemSelected(text) {
    const item = this.page.locator(`#verticalListContainer .list-group-item:has-text("${text}")`);
    return item.getAttribute('class').then(cls => cls.includes('active'));
  }

  async isGridItemSelected(text) {
    const item = this.page.locator(`#gridContainer .list-group-item:has-text("${text}")`);
    return item.getAttribute('class').then(cls => cls.includes('active'));
  }
}
