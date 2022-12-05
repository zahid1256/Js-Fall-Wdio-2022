const LoginPage = require('../../POM/Facebook/LoginPage')
const OculusHomepage = require('../../POM/Facebook/OculusHomepage')
const { expect } = require("chai");

const loginPage = new LoginPage
const oculusHomepage = new OculusHomepage

describe('Oculus Test Suite', () => {

    it('Multiple window test', async () => {

        // 1. Launch facebook.com
        await browser.url('https://www.facebook.com')
        // 2. Click on Oculus
        await loginPage.clickOculusLink()
        await browser.pause(5000)

        // 3. Verify Support tab is displayed
        expect(await oculusHomepage.isSupportTabDisplayed(), 'Support Tab is not displayed').to.be.true
        
        // 4. Verify the Oculus page is launched in new window
        expect(allHandles.length, '').to.equal(2);
        
    })

    it.only('Multiple Windows Test -1', async () => {
        
        await browser.url('https://www.facebook.com')
        loginPage.clickOculusLink();
        const fbLoginHandle = await browser.getWindowHandle();
        console.log(` \n fbLoginHandle -> ${fbLoginHandle} \n`);
        const allHandles = await browser.getWindowHandles();           
        console.log(` \n allHandles -> ${allHandles} \n`);
        for (const handle of allHandles) {
            if (handle !== fbLoginHandle) {
                browser.switchToWindow(handle);
                break;
            }
        }
        await browser.pause(6000);
        oculusHomepage.isSupportTabDisplayed()
        expect(allHandles.length, '').to.equal(2);
    });


});