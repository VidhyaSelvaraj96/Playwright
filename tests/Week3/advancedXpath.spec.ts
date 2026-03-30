import {test} from '@playwright/test'

test('Create Lead in Salesforce', async({page})=>{

await page.goto('https://login.salesforce.com/')
await page.locator('//div[@id="username_container"]//input[@id="username"]').fill('dilipkumar.rajendran@testleaf.com')
await page.locator('//input[@type="submit"]/preceding::input[@type="password"]').fill('TestLeaf@2025');
await page.locator ('//input[@name="Login"]').click()
await page.waitForTimeout(4000)


})