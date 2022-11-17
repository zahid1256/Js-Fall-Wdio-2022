const { expect } = require("chai");

describe('Sample Testcases', () => {
    
    it('Testcase-1', () => {
        
        const res = 2 + 2;

        
        expect(res, '').to.equal(5);

    })


    it.only('Launch facebook.com', async () => {

        await browser.url('https://www.facebook.com');

        browser.pause(2000);
    })






})