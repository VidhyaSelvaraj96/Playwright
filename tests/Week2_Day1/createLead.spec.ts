import {test} from '@playwright/test'

test('login to leaftaps', async({page})=>{

    await page.goto('http://leaftaps.com/opentaps/control/main')
    await page.locator('#username').fill('demosalesmanager')
    await page.locator('//input[@id="password"]').fill('crmsfa')
    await page.click('//input[@class="decorativeSubmit"]')
    await page.locator('//a[contains(text(),"CRM")]').click()
    await page.click('//a[text()="Leads"]')
    await page.locator('//a[text()="Create Lead"]').click()
    await page.locator('//input[@id="createLeadForm_companyName"]').fill('Testleaf')
    await page.locator('//input[@id="createLeadForm_firstName"]').fill('Vidhya')
    await page.locator('//input[@id="createLeadForm_lastName"]').fill('Selvaraj')
    await page.locator ('//input[@id="createLeadForm_personalTitle"]').fill('Ms')
    await page.locator ('//input[@id="createLeadForm_generalProfTitle"]').fill('Playwright')
    await page.locator ('//input[@id="createLeadForm_annualRevenue"]').fill("150000")
    await page.locator ('//input[@id="createLeadForm_departmentName"]')
    await page.locator ('//input[@id="createLeadForm_primaryPhoneNumber"]').fill("9876543210")
    await page.locator ('//input[@value="Create Lead"]').click()
    await page.waitForTimeout(4000)

})
