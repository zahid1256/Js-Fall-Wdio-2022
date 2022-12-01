const Commands = require('../Commands');

class LoginPage {

    commands = new Commands();

    // Locators for web-Elements on the LoginPage (variables)
    loginEmailLocator = '#email';
    loginPassLocator = '#pass';
    loginButtonLocator = '<button>';
    createNewAccountButtonLocator = '//a[text()="Create New Account" or text()="Create new account"]'
    messengerLinkLocator = '=Messenger'

    // functions to interact with the web-Elements on the LoginPage
    async enterLoginEmail(userEmail) {
        await this.commands.typeInWebElement(this.loginEmailLocator, userEmail);
    }

    async enterLoginPassword(userPwd) {
        await this.commands.typeInWebElement(this.loginPassLocator, userPwd);
    }

    async clickLoginInButton() {
        await this.commands.clickWebElement(this.loginButtonLocator);
    }

    async clickCreateNewAccountButton() {
        await this.commands.clickWebElement(this.createNewAccountButtonLocator);

    }

    async clickMessengerLink() {
        await this.commands.clickWebElement(this.messengerLinkLocator)
    }
}
module.exports = LoginPage;