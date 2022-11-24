

describe('Practice', () => {


    it('Verify no gender error on Facebooj SignUp', async () => {

        Launch
        await browser.url('/');

        // 2. Click Create New Account
        const createNewAccountButton = await $('=Create New Account');
        createNewAccountButton.click();

        await browser.pause(7000);

        // Enter data
        await $('//input[@aria-label="First name"]').setValue('FIRST');

        await $('//input[contains(@name , "last")]').setValue('LAST');

        await $('//input[@name="reg_email__"]').setValue('9898989898');

        await $('//input[contains(@id , "word_")]').setValue('abcd@1234');

        await $('//select[@title="Day"]').selectByVisibleText('20');

        await $('//select[contains(@name , "ay_m")]').selectByVisibleText('Mar');

        await $('//select[contains(@id , "ear")]').selectByVisibleText('1990'); 

        const signUpButton = await $('button[name=websubmit]') 
            signUpButton.click()


        const errorMessage = await 
        

    })


})

 














//     it('Launch Dark Sky',  async() => {

//         await browser.url('https://www.darksky.net/')

//     })


//     it('Enter zip code in search box', async() => {

//         const webElement = await $('input[type=text]')
//         webElement.setValue('07512')


//     })

    
//     it('Click on Search Button', async() => {

//         await browser.url('https://www.darksky.net/')

//         const webElement = await $('input[type=text]')
//         webElement.setValue('07512')

//         const searchButton = await $('img[alt=Search Button]')
//         searchButton.click()
        
//     })

    
// })












