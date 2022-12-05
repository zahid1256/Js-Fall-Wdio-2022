const Commands = require('../Commands');

class OculusHomepage {

    commands = new Commands()

    //Locators 
    supportTabLocator = 'span=Support'


    //functions

    async isSupportTabDisplayed() {
        await this.commands.isWebElementDisplayed(this.supportTabLocator)
    }

    
    
    

}
module.exports = OculusHomepage