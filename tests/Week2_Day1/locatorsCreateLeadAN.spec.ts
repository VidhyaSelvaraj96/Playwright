import {test} from '@playwright/test'

test('Create Lead in Salesforce', async({page})=>{

await page.goto('https://login.salesforce.com/')
await page.locator('#username').fill('dilipkumar.rajendran@testleaf.com')
await page.locator('#password').fill('TestLeaf@2025')
await page.click('#Login')
await page.locator('//div[@class="slds-r5"]').click()
await page.locator('//button[@aria-label="View All Applications"]').click()
await page.locator('//p[@title="Manage your sales process with accounts, leads, opportunities, and more"]').click()
await page.locator('//a[@title="Leads"]').click()
await page.locator('//div[@title="New"]').click()
await page.locator('//button[@id="combobox-button-516"]').click()
await page.locator('//button[@data-value="Ms."]').click()
await page.locator('//input[@name="lastName"]').fill('Selvaraj')
await page.locator('//input[@name="Company"]').fill('TestLeaf')
await page.locator('//button[@name="SaveEdit"]').click()
//await page.locator('//a[@title="Leads"]').click()

})
    

