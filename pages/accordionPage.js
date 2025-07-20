export class AccordionPage {
  constructor(page) {
    this.page = page;
    this.sectionHeader = (num) => page.locator(`#section${num}Heading`);
    this.sectionContent = (num) => page.locator(`#section${num}Content`);
  }

  async gotoAccordion() {
    await this.page.goto('https://demoqa.com/accordian');
  }

  async expandSection(num) {
    const header = this.sectionHeader(num);
    await header.click();
  }

  async getSectionContent(num) {
    const content = this.sectionContent(num);
    await content.waitFor({ state: 'visible' });
    return content.textContent();
  }

  async isSectionVisible(num) {
    return await this.sectionContent(num).isVisible();
  }
}
