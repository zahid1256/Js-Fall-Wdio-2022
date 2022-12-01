const Commands = require('../Commands');

class SignupPage {

    commands = new Commands();

    // Locators for web-elements on the sign up page
    dayDropdownLocator = '#day'
    monthDropdownLocator = '#month'
    yearDropDownLocator = 'year'
    
    defaultSelectedDateLocator = '//select[@id="day"]//option[@selected="1"]'
    defaultSelectedMonthLocator = '//select[@id="month"]//option[@selected="1"]'
    defaultSelectedYearLocator = '//select[@id="year"]//option[@selected="1"]'


    // Functions to interact with web-elements on sign up page
    getDefaultSelectedDate() {
        return this.commands.getTextOfWebElement(this.defaultSelectedDateLocator)
    }

    getDefaultSelectedMonth() {
        return this.commands.getTextOfWebElement(this.defaultSelectedMonthLocator)
    }

    getDefaultSelectedYear() {
        return this.commands.getTextOfWebElement(this.defaultSelectedYearLocator)
    }




};
module.exports = SignupPage