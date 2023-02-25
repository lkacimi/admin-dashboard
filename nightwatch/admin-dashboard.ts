import {NightwatchTests} from 'nightwatch';
const home: NightwatchTests = {
    'Title test': () => {
      browser.url('http://localhost:4200').assert.titleEquals('AdminDashboard');
    },
  
    'DOM test': () => {
      browser
        .assert.textContains('.navbar', 'Orders');
    }
  };

  export default home;