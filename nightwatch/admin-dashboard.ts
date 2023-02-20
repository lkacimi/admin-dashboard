import {NightwatchTests} from 'nightwatch';
const home: NightwatchTests = {
    'Title test': () => {
     //TODO: Why localhost cannot be loaded by the chrome driver (data; shown in the address box)
      browser.url('http://localhost:62200/login').assert.titleEquals('AdminDashboard');
    },
  
    'DOM test': () => {
      browser
        .assert.textContains('.navbar', 'Orders');
    }
  };