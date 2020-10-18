const puppeteer = require('puppeteer');
var fs = require('fs');
var passoword = fs.readFileSync('sececrt.text').toString();
//this reads my password from the file called secert.txt
(async() =>{
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto ('https://www.myjdw.co.uk/home/my-rota')
    
    //The scripts tries to go to the my-rota page frist. But it redirect to the login page
    //login in using username and password
    console.log('here1');
    await page.waitForSelector('[type=text]');
    console.log('here2');
    await page.type('[type=text]','Emplyee Number ');
    console.log('here3');
    //The password is varble from the secert.text
    await page.type('[type=password]',passoword);
    await page.click('[type=submit]');
    //This clicks the submit button
    
    
})();

