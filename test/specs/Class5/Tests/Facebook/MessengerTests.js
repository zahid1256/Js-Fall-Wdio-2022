const { expect } = require('chai');
const LoginPage = require('../../POM/Facebook/LoginPage')
const Messenger = require('../../POM/Facebook/Messenger')

describe('Messenger Test Suite', () => {
    
    it('Verify user gets error when submit empty login on messenger screen', async () => {

        const loginPage = new LoginPage()
        const messenger = new Messenger()

        await browser.url('https://www.facebook.com')

        //1. Click messenger link
        loginPage.clickMessengerLink()

        await browser.pause(5000)

        // 2. Verify "Keep me signed in" is NOT selected
        expect(await messenger.isKeepMeSignedInButtonSelected(), 'Keep me signed in button is selected').to.be.false

        // 3. Click "Log in" button
        messenger.clickMessengerLoginButton()

        await browser.pause(5000)

        // 4. Verify link (Find your account and log in.) is displayed
        expect(await messenger.isFindAccountAndLoginErrorDisplayed(), 'Error is not displayed').to.be.true

        // 5. Verify "Continue" button is enabled
        expect(await messenger.isContinueButtonEnabled(), 'Continue button is not enabled').to.be.true

        // 6. Verify "Keep me signed in" is NOT selected
        expect(await messenger.isKeepMeSignedInButtonSelected(), 'keep me signed in button is selected').to.be.false

        // 7. Click "Keep me signed in" checkbox
        await messenger.clickKeepSignedInButton()

        await browser.pause(5000)

        // 8. Verify "Keep me signed in" is selected
        // expect(await messenger.isKeepMeSignedInButtonSelected(), 'keep me signed in button is NOT selected').to.be.true


    });
});