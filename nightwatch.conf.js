// Refer to the online docs for more details:
// https://nightwatchjs.org/gettingstarted/configuration/
//

//  _   _  _         _      _                     _          _
// | \ | |(_)       | |    | |                   | |        | |
// |  \| | _   __ _ | |__  | |_ __      __  __ _ | |_   ___ | |__
// | . ` || | / _` || '_ \ | __|\ \ /\ / / / _` || __| / __|| '_ \
// | |\  || || (_| || | | || |_  \ V  V / | (_| || |_ | (__ | | | |
// \_| \_/|_| \__, ||_| |_| \__|  \_/\_/   \__,_| \__| \___||_| |_|
//             __/ |
//            |___/

module.exports = {
  // An array of folders (excluding subfolders) where your tests are located;
  // if this is not specified, the test source must be passed as the second argument to the test runner.
  src_folders: ['./features/step-definitions'], 
  webdriver: {},

  test_workers: {
    enabled: true
  },

  test_runner: {
    type: 'cucumber',
    options: {
      feature_path: './features/*.feature'
    }
  },

  test_settings: {
    default: {
      disable_error_log: true,
      launch_url: 'http://localhost:4200',

      screenshots: {
        enabled: false,
        path: 'screens',
        on_failure: true
      },

      desiredCapabilities: {
        browserName: 'chrome',
        "acceptSslCerts": true,
        "acceptInsecureCerts": true,
        "javascriptEnabled": true,
        "acceptSslCerts": true,
        "IgnoreSslErrors": true,
        "chromeOptions" : {
          "args" : [
            "no-sandbox",
            "disable-gpu",
            "ignore-certificate-errors"
          ]
        },
      },
      
      webdriver: {
        start_process: true,
        port: 4444,
        server_path: '/Users/kacimi/Downloads/chromedriver_mac64\ \(1\)/chromedriver'
      },
      
    },
  },
  
};
