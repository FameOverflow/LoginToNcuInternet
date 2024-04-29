const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
    // Read the config file
    const data = fs.readFileSync('D:/Code/Login/config.json', 'utf8');
    const config = JSON.parse(data);

    const browser = await puppeteer.launch({
        headless: config.headless,
    });
    const page = await browser.newPage();
    await page.goto('http://222.204.3.154');

    await page.type('#username', config.username);
    await page.type('#password', config.password);
    
    // Set the value the hidden input field
    await page.evaluate((domain) => {
        document.querySelector('#domain').value = domain;
    }, config.domain);

    // Wait for navigation and click the login button at the same time
    await Promise.all([
        page.waitForNavigation({ waitUntil: 'networkidle0' }),
        page.click('#login'), // assuming '#login' is the selector for the login button
    ]);

    await browser.close();
})();