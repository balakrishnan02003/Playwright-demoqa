import {test,expect} from '@playwright/test'
import {RadioPage} from '../pages/RadioPage.js'

test('Radio Button Test', async({page}) => {
    const radio = new RadioPage(page);
    await radio.gotoRB();

    await radio.selectOption('Yes');
    await radio.assertSelected('Yes');

    await radio.selectOption('Impressive');
    await radio.assertSelected('Impressive');

    const isOptionDisabled=await radio.isOptionDisabled('No');
    expect(isOptionDisabled).toBe(true);
})