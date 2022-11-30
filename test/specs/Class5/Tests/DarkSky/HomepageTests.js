const Homepage = require('../../POM/DarkSky/Homepage')

const { expect } = require("chai");
const { it } = require("mocha");


describe('DarSky HomePage Test Suite', () => {
    
    it('Verify feelsLikeTempValue is in between lowTempValue and highTempValue', async() => {
       
        const homepage = new Homepage
       
        await browser.url('https://darksky.net')
       
        await browser.pause(2000)
       
        expect(homepage.TextOfFeelsLikeTemp() <= homepage.TextOfHighTemp() && homepage.TextOfFeelsLikeTemp() >= homepage.TextOfLowTemp(), "NOT Working").to.be.true;
    });
});
