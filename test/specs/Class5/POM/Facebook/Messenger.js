const Commands = require('../Commands')

class Messenger {

    commands = new Commands
    // Locators for Messenger page WebElements
    keepSignedInButtonLocator = '//label[text()="Keep me signed in"]'
    messengerLoginButtonLocator = '#loginbutton'
    findAccountAndLogInErrorLocator = '=Find your account and log in.'
    continueButtonLocator = '//button[text()="Continue"]'


    //Functions to interact with Messenger page WebElements

    async isKeepMeSignedInButtonSelected() {
        return await this.commands.isWebElementSelected(this.keepSignedInButtonLocator)
    }

    async clickMessengerLoginButton() {
        await this.commands.clickWebElement(this.messengerLoginButtonLocator)
    }

    async isFindAccountAndLoginErrorDisplayed() {
        return await this.commands.isWebElementDisplayed(this.findAccountAndLogInErrorLocator)
    }

    async isContinueButtonEnabled() {
        return await this.commands.isWebElementEnabled(this.continueButtonLocator)
    }

    async clickKeepSignedInButton() {
        await this.commands.clickWebElement(this.keepSignedInButtonLocator)
    }


}

module.exports = Messenger