import {test} from "@playwright/test"


test('select options under select tool', async ({page}) => {


await page.goto('https://www.leafground.com/select.xhtml')
const dropDown=page.locator('//select[@class="ui-selectonemenu"]/option')
const dropDowncount=await dropDown.count()
console.log(`no of values in the dropDown is ${dropDowncount}`);
 

    for(let index=0;index<dropDowncount;index++){
        console.log(await dropDown.nth(index).innerText());
        
    }
await page.locator('//label[text()="Select Country"]').click();
await page.locator('//li[@data-label="India"]').click();
await page.waitForTimeout(3000)

})
