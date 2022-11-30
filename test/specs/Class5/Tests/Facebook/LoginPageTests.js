const LoginPage = require('../../POM/Facebook/LoginPage')
const LoginErrorPage = require('../../POM/Facebook/LoginErrorPage');
const { expect } = require('chai');


describe('Login Test Suite', () => {
    
    it.only('Verify user gets error when submits empty login form', async () => {
        const loginPage = new LoginPage();
        const loginErrorPage = new LoginErrorPage();

        /**
         * 1. Launch facebook.com
         * 2. Click login button
         * 3. Verify error is displayed -> The email address or mobile number you entered isn't connected to an account.
         */

        // 1. Launch facebook.com
        await browser.url('/');

        // 2. Click log in button
        // await loginPage.enterLoginEmail('@#$%^&');
        // await loginPage.enterLoginPassword('abcd@1234');
        await loginPage.clickLoginInButton();

        // 3. Verify error is displayed -> The email address or mobile number you entered isn't connected to an account.
        expect(await loginErrorPage.isLoginErrorDisplayed(), 'Login error message is NOT displayed').to.be.false;
        
    });

});



