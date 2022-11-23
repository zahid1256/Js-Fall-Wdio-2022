/**
 * TC-1: https://www.facebook.com/
 * Facebook: Verify current date is displayed on Sign-Up form
 * 
 * Steps:
 * 1. Launch facebook.com
 * 2. Click Create New Account button
 * 3. Verify current date is displayed in Date of birth dropdowns
 *
 */

const { expect } = require('chai');
const moment= require('moment')

 describe('Homework 2 test cases', () => {

    it('Verify current date is displayed on sign up form', async () => {

        await browser.url('/')

        const createNewAccountButton = await $('//a[text()="Create new account"]');
        createNewAccountButton.click();

        await browser.pause(7000);

        const now = moment().format('ll');  
       
        const webDate = await $('//span[@data-type="selectors"]');
        const isWebDateDisplayed = await webDate.isDisplayed(now)
        expect(isWebDateDisplayed, 'Date is not current').to.be.true
    });




        /**
 * TC-2: https://www.facebook.com/
 * Facebook: Verify user gets error when submits empty login form
 * 
 * Expected error msg -> The email address or mobile number you entered isn't connected to an account.
 */


        it('Verify user gets error when submits empty login form', async () => {

            await browser.url('/')

            const loginButton = await $('//button[text()="Log In"]');
            loginButton.click()

            await browser.pause(7000);

            const loginErrorMessage = await $('//div[contains(text() , "you entered isn’t")]');
            const isLoginErrorMessageDisplayed = await loginErrorMessage.isDisplayed();
            expect (isLoginErrorMessageDisplayed, 'Login error message is NOT displayed').to.be.true;
        });






/**
 * TC-3: https://www.facebook.com/
 * Facebook: Verify user gets error when submit empty login on messenger screen
 * 
 * 1. Click Messenger
 * 2. Verify "Keep me signed in" is NOT selected
 * 3. Click "Log in" button
 * 4. Verify link (Find your account and log in.) is displayed
 * 5. Verify "Continue" button is enabled
 * 6. Verify "Keep me signed in" is NOT selected
 * 7. Click "Keep me signed in" checkbox
 * 8. Verify "Keep me signed in" is selected
 * 
 */

        it('Verify user gets error when submit empty login on messenger screen', async () => {

            await browser.url('/')

            const messengerLink = await $('//a[@title="Check out Messenger."]');
            messengerLink.click()

            await browser.pause(5000)

            const keepSignedInButton = $(`//label[text() = 'Keep me signed in']`)
            const isKeepSignedInButtonSelected = await keepSignedInButton.isSelected()
            expect (isKeepSignedInButtonSelected, 'Keep me signed in button is selected').to.be.false;

            await browser.pause(5000)


            const logInButton = await $('#loginbutton');
            logInButton.click()

            await browser.pause(5000)

            const errorLink = await $('=Find your account and log in.')
            const isErrorLinkDisplayed = await errorLink.isDisplayed()
            expect(isErrorLinkDisplayed, "Find your account and log in link is not displayed").to.be.true
            
            const continueButton = await $('//button[text()="Continue"]');
            const isContinueButton = await continueButton.isEnabled()
            expect(isContinueButton, "Continue button is not enabled").to.be.true;

            const keepMeSignedInButton = await $('//label[text()="Keep me signed in"]');
            const isKeepMeSignedInButtonSelected = await keepMeSignedInButton.isSelected()
            expect(isKeepMeSignedInButtonSelected, "Keep me signed is selected").to.be.false;

            await keepMeSignedInButton.click()

            await browser.pause(10000)

            const keepMeSignedInButton2 = await $('//input[@type="checkbox"]');
            const isKeepMeSignedInButtonSelected2 = await keepMeSignedInButton2.isSelected()
            expect(isKeepMeSignedInButtonSelected, "Keep me signed is not selected").to.be.true

          
        });



            /**
 * TC-4: https://www.darksky.net/
 * Darksky: Verify feelsLikeTempValue is in between lowTempValue and highTempValue
 * 
 * 31˚(string) -> 31(string) -> 31(number)
 * 25˚(string) -> 25(string) -> 25(number)
 * 39˚(string) -> 39(string) -> 39(number)
 * 
 * feelsLikeTempValue <= lowTempValue AND feelsLikeTempValue <= highTempValue
 * 
 */


        it.only('Verify feelsLikeTempValue is in between lowTempValue and highTempValue', async () => {

            await browser.url('https://www.darksky.net/')

            const feelsLikeTemp =  await $('//span[@class="feels-like-text"]')
            const lowTemp = await $(`//span[@xpath='2']`)
            const highTemp =  await $(`//span[@xpath='1']`)

            const feelsLikeTempValue =  parseFloat(feelsLikeTemp.getText())
            const lowTempValue =  parseFloat(lowTemp.getText())
            const highTempValue =  parseFloat(highTemp.getText())

            expect(feelsLikeTemp <= highTemp && feelsLikeTemp >= lowTemp, 'Feels Like Temp is not between low and high')
         
        })

 })


