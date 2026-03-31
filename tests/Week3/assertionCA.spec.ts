import {test,expect} from '@playwright/test';
test('learning assertions', async({page})=>{

await page.goto('https://leafground.com/input.xhtml')
await expect(page.getByRole('textbox',{name:'Babu Manickam'})).toBeDisabled({timeout:10000})
console.log("Disabled assertion is passed")

await expect(page.getByText('Chennai')).toBeEditable()
console.log("Chennai is located and is edible");
await page.getByText('Chennai',{exact:true}).first().fill('Coimbatore')

await expect.soft(page.getByPlaceholder('About yourself')).toBeDisabled()

await page.getByText('Can you clear me, please?').fill("value cleared")

})