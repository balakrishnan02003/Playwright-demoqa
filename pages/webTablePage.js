import { expect } from '@playwright/test';

export class WebTablePage {
  constructor(page) {
    this.page = page;
    this.addButton = page.locator('#addNewRecordButton');
    this.searchBox = page.locator('#searchBox');
    this.modal = page.locator('.modal-content');

    this.firstNameInput = page.locator('#firstName');
    this.lastNameInput = page.locator('#lastName');
    this.emailInput = page.locator('#userEmail');
    this.ageInput = page.locator('#age');
    this.salaryInput = page.locator('#salary');
    this.departmentInput = page.locator('#department');
    this.submitButton = page.locator('#submit');
    this.rows = page.locator('.rt-tbody .rt-tr-group');
  }

  async gotoWTP() {
    await this.page.goto('https://demoqa.com/webtables');
  }

  async clickAddButton() {
    await this.addButton.click();
  }

  async fillForm({ firstName, lastName, email, age, salary, department }) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.emailInput.fill(email);
    await this.ageInput.fill(age.toString());
    await this.salaryInput.fill(salary.toString());
    await this.departmentInput.fill(department);
  }

  async submitForm() {
    await this.submitButton.click();
  }

  async addRecord(data) {
    await this.clickAddButton();
    await this.fillForm(data);
    await this.submitForm();
  }

  async search(value) {
    await this.searchBox.fill(value);
  }

  async getRowTexts() {
    const count = await this.rows.count();
    const texts = [];
    for (let i = 0; i < count; i++) {
      texts.push(await this.rows.nth(i).innerText());
    }
    return texts;
  }

  async editRecordByName(name, newData) {
    const row = this.page.locator(`.rt-tr-group:has-text("${name}")`);
    await row.locator('[title="Edit"]').click();
    await this.fillForm(newData);
    await this.submitForm();
  }

  async deleteRecordByName(name) {
    const row = this.page.locator(`.rt-tr-group:has-text("${name}")`);
    await row.locator('[title="Delete"]').click();
  }

  async assertRecordVisible(name) {
    await expect(this.page.locator('.rt-tbody')).toContainText(name);
  }

  async assertNoRecordVisible(name) {
    await expect(this.page.locator('.rt-tbody')).not.toContainText(name);
  }
}
