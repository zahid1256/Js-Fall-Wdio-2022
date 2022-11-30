const { expect } = require('chai');
const LoginPage = require('../../POM/Facebook/LoginPage');
const SignupPage = require('../../POM/Facebook/SignupPage');
const Dates = require('../../Utils/Dates')


describe('Sign up Tests', () => {
    it('Verify current date is displayed on Sign-Up form', async () => {

        const loginPage = new LoginPage()
        const signupPage = new SignupPage()

        // 1. Launch facebook.com
        await browser.url('https://www.facebook.com');

        
        // 2. Click Create New Account button
        loginPage.clickCreateNewAccountButton()


        // 3. Verify current date is displayed in Date of birth dropdowns
        const actualSelectedDate = await signupPage.getDefaultSelectedDate()
        const expectedSelectedDate = Dates.getCurrentDate()

        const actualSelectedMonth = await signupPage.getDefaultSelectedMonth()
        const expectedSelectedMonth = Dates.getCurrentMonthNameInShort()
        console.log(actualSelectedMonth);
        console.log(expectedSelectedMonth);

        const actualSelectedYear = await signupPage.getDefaultSelectedYear()
        const expectedSelectedYear = Dates.getCurrentYearInYYYY()

        
        expect(actualSelectedDate, 'Default date in dropdown is not current date').to.be.equal(expectedSelectedDate)

        expect(actualSelectedMonth, 'Default month in dropdown is not current month').to.be.equal(expectedSelectedMonth)

        expect(actualSelectedYear, 'Default year in dropdown is not current year').to.be.equal(expectedSelectedYear)

    })
});