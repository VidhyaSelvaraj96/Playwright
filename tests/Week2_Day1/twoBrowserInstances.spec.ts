import { test, chromium, webkit } from '@playwright/test';

test('Launch two separate browser instances', async () => {
    //Edge Instance
    const edgeBrowser = await chromium.launch({ headless: false, channel: 'msedge' });
    const edgeContext = await edgeBrowser.newContext();
    const edgePage = await edgeContext.newPage();
    
    await edgePage.goto('https://www.redbus.in');
    console.log('Red Bus Title:', await edgePage.title());
    console.log('Red Bus URL:', edgePage.url());

    //Webkit Instance
    const webkitBrowser = await webkit.launch({ headless: false });
    const webkitContext = await webkitBrowser.newContext();
    const webkitPage = await webkitContext.newPage();
    
    await webkitPage.goto('https://www.flipkart.com');
    console.log('Flipkart Title:', await webkitPage.title());
    console.log('Flipkart URL:', webkitPage.url());

    // Clean up
    await edgeBrowser.close();
    await webkitBrowser.close();
});