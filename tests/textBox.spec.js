import {test,expect} from '@playwright/test'
import { textBox } from '../pages/TextBoxPage.js'

test('TextBox Testing', async({page}) => {
    const textbox = new textBox(page);
    await textbox.gotoElementsPage();
    await textbox.textBoxEnterData('John','John@gmail.com','TC 111/221 Park Avenue','TC 234/222 Central Park Happy villa');

})