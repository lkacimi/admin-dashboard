import {NightwatchTests} from 'nightwatch';
const login: NightwatchTests = {
   
    'Title test': () => {
        browser.url('http://localhost:4200/login');
      },

    'Email field is present': () => {
      browser
        .assert.elementPresent("#email");
    },

    'Submit login form with right credentials': () => {
        //1. Setup
        browser
        .setValue("#email", "nobody@gmail.com")
        .setValue("#password", 'changeme')
        .saveScreenshot('test/fields.png')
        .click("button.btn.btn-primary");
        //2. Assertion
        browser.assert.urlEquals("http://localhost:4200/");
        browser.assert.textContains("app-dashboard", "dashboard works!");        
    },

    'Submit login form with invalid credentials': () => {
        //1. Setup
        browser.url('http://localhost:4200/login')
        .setValue("#email", "yet-another-nobody@gmail.com")
        .setValue("#password", 'changeme')
        .saveScreenshot('test/invalid-fields.png')
        .click("button.btn.btn-primary");
        //2. Assertion
        browser.assert.urlEquals("http://localhost:4200/login");        
    },


  };

  export default login;