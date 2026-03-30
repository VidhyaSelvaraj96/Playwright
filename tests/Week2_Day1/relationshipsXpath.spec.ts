import {test} from "@playwright/test"


test('path relationships', async ({page}) => {

await page.goto('https://www.leafground.com/select.xhtml')
await page.locator('//label[text()="Select Country"]').click();
//await page.locator('//div[@class="col-12"/div]').click(); //parent to child 
await page.locator('//li[@data-label="India"]').click();
//await page.locator('//div[@id="j_idt87:country_panel"]//li').click(); //grandparent to grandchild
await page.waitForTimeout(3000)

})

/* RELATIONSHIPS
PARENT TO CHILD: Parent relative Xpath/tagname of the child --> syntax
GRANDPARENT TO GRANDCHILD: Grandparent relative Xpath//tagname of the grandchild --> syntax
CHILD TO PARENT: Child relative Xpath/PARENT::tagname of the parent --> syntax
GRANDCHILD TO GRANDPARENT: Grandchild relative Xpath/ANCESTOR::tagname of the grandparent --> syntax
*/