const Commands = require('../Commands')

class Homepage {

    //Locators for HomePage Web elements

    feelsLikeTempLocator = '//span[@class="feels-like-text"]'
    lowTempLocator = `//span[@xpath='2']`
    highTempLocator =  `//span[@xpath='1']`


    //Functions to interact with Homepage WebElements

    commands = new Commands

    async TextOfFeelsLikeTemp(){
        return parseFloat(await getTextOfWebElement(this.feelsLikeTempLocator))
    }
    async TextOfLowTemp(){
        return parseFloat(await getTextOfWebElement(this.lowTempLocator))
    }
    async TextOfHighTemp(){
        return parseFloat(await getTextOfWebElement(this.highTempLocator))
    }
}

module.exports = Homepage