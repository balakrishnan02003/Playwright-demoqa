import { expect } from '@playwright/test';
import path from 'path';

export class FormPage {
  constructor(page) {
    this.page = page;
    this.firstName = page.locator('#firstName');
    this.lastName = page.locator('#lastName');
    this.email = page.locator('#userEmail');
    this.mobile = page.locator('#userNumber');
    this.dobInput = page.locator('#dateOfBirthInput');
    this.subjectInput = page.locator('#subjectsInput');
    this.address = page.locator('#currentAddress');
    this.genderOption = (gender) => page.locator(`label[for="gender-radio-${gender}"]`);
    this.hobbyOption = (label) => page.locator('label.custom-control-label', { hasText: label });
    this.pictureUpload = page.locator('#uploadPicture');
    this.stateDropdown = page.locator('#state');
    this.cityDropdown = page.locator('#city');
    this.selectOption = (text) => page.locator(`div[id*="react-select"] div`, { hasText: text });
    this.submitBtn = page.locator('#submit');
    this.modal = page.locator('.modal-content');
  }

  async gotoFP() {
    await this.page.goto('https://demoqa.com/automation-practice-form');
  }

  async fillBasicInfo(first, last, email, gender, mobile) {
    await this.firstName.fill(first);
    await this.lastName.fill(last);
    await this.email.fill(email);
    await this.genderOption(gender).click(); // gender = "1" for Male, "2" for Female, "3" for Other
    await this.mobile.fill(mobile);
  }

  async setDateOfBirth(dateStr) {
    await this.dobInput.click();
    await this.page.keyboard.press('Control+A');
    await this.page.keyboard.type(dateStr); // format: 10 Jan 1995
    await this.page.keyboard.press('Enter');
  }

  async selectSubject(subject) {
    await this.subjectInput.fill(subject);
    await this.page.keyboard.press('Enter');
  }

 async selectHobbies(hobbies = []) {
  const modalClose = this.page.locator('button', { hasText: 'Close' });

  // Hide interfering ad
  await this.page.evaluate(() => {
    const ad = document.querySelector('#fixedban');
    if (ad) ad.remove(); 
  });

  if (await modalClose.isVisible()) {
    await modalClose.scrollIntoViewIfNeeded(); // make sure it's visible
    await expect(modalClose).toBeEnabled(); // wait for stability
    await modalClose.click();
    await this.modal.waitFor({ state: 'detached' }); // ensure modal is gone
  }

  for (let hobby of hobbies) {
    const checkbox = this.hobbyOption(hobby);
    await checkbox.scrollIntoViewIfNeeded();
    await expect(checkbox).toBeVisible();
    await checkbox.click();
  }
}


  async uploadPicture(filename) {
    const filePath = path.resolve('tests/assets', filename);
    await this.pictureUpload.setInputFiles(filePath);
  }

  async fillAddress(addressText) {
    await this.address.fill(addressText);
  }

  async selectStateAndCity(state, city) {
  await this.stateDropdown.click();
  await this.page.keyboard.type(state);
  await this.page.keyboard.press('Enter');
  await this.page.waitForTimeout(300); 
  await this.cityDropdown.click();
  await this.page.keyboard.type(city);
  await this.page.keyboard.press('Enter');
}

  async submitForm() {
    await this.submitBtn.click();
    await expect(this.modal).toBeVisible();
  }
}