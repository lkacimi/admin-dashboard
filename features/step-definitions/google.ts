const {Given, Then } = require('@cucumber/cucumber');


Given('I browse to the Google search engine', () => {
    return browser.url('https://www.google.com');
});

Then('the title of the page should be {string}', (title) => {
    browser.assert.titleEquals(title);
});

