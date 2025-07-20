export class textBox {
    constructor(page) {
        this.page = page;
        //this.textBoxLink = '#item-0'; here id isn't unique.
        this.fullNameInput= '#userName';
        this.emailInput='#userEmail';
        this.currentAddressInput='#currentAddress';
        this.permanentAddressInput='#permanentAddress';
        this.submit='#submit';
    }

    async gotoElementsPage() {
        await this.page.goto('https://demoqa.com/elements')
    }

    async textBoxEnterData(fullName,email,currentAddress,permanentAddress) {
        //await this.page.getByText('Elements', {exact : true}).click();
        const textBoxMenu = this.page.locator('li:has-text("Text Box")');
        //await textBoxMenu.waitFor({state:'visible'})
        //await textBoxMenu.scrollIntoViewIfNeeded();
       // await this.page.screenshot({ path: 'before-textbox-click.png' });
        await textBoxMenu.click();

        await this.page.locator(this.fullNameInput).fill(fullName);
        await this.page.locator(this.emailInput).fill(email);
        await this.page.locator(this.currentAddressInput).fill(currentAddress);
        await this.page.locator(this.permanentAddressInput).fill(permanentAddress);
        await this.page.locator(this.submit).click();

    }
}