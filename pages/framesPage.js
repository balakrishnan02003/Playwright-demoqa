export class FramesPage {
  constructor(page) {
    this.page = page;
    this.frame1 = () => page.frameLocator('#frame1');
    this.frame2 = () => page.frameLocator('#frame2');
  }

  async gotoFP() {
    await this.page.goto('https://demoqa.com/frames');
  }

  async getFrame1Text() {
    return await this.frame1().locator('#sampleHeading').textContent();
  }

  async getFrame2Text() {
    return await this.frame2().locator('#sampleHeading').textContent();
  }
}