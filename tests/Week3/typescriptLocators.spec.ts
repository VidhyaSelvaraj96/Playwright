import {test} from "@playwright/test"
test ('exploring playwright locators',async ({page}) =>{

await page.goto('https://parabank.parasoft.com/parabank/index.htm')
await page.getByTitle("ParaBank").click()
await page.getByRole('link',{name: 'Forgot login info?'}).click()



await page.waitForTimeout(3000)
})