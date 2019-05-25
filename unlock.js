/*==============================================================================*/
/* Casper generated Sat May 18 2019 01:20:10 GMT-0400 (Eastern Daylight Time) */
/*==============================================================================*/

var x = require('casper').selectXPath;
casper.options.viewportSize = {width: 1440, height: 725};

casper.test.begin('Unlocking Car', function(test) {

    casper.start('https://www.mysubaru.com');

    casper.waitForSelector("form#loginForm input[name='username']",
        function success() {
            test.assertExists("form#loginForm input[name='username']");
            this.click("form#loginForm input[name='username']");
        },
        function fail() {
            test.assertExists("form#loginForm input[name='username']");
        });
    casper.waitForSelector("input[name='username']",
        function success() {
            this.sendKeys("input[name='username']", process.env.USERNAME);
        },
        function fail() {
            test.assertExists("input[name='username']");
        });
    casper.waitForSelector("form#loginForm input[name='password']",
        function success() {
            test.assertExists("form#loginForm input[name='password']");
            this.click("form#loginForm input[name='password']");
        },
        function fail() {
            test.assertExists("form#loginForm input[name='password']");
        });
    casper.waitForSelector("input[name='password']",
        function success() {
            this.sendKeys("input[name='password']", process.env.PASSWORD);
        },
        function fail() {
            test.assertExists("input[name='password']");
        });
    casper.waitForSelector("form#loginForm button#submitLoginForm",
        function success() {
            test.assertExists("form#loginForm button#submitLoginForm");
            this.click("form#loginForm button#submitLoginForm");
        },
        function fail() {
            test.assertExists("form#loginForm button#submitLoginForm");
        });

    casper.waitForSelector(".col-xs-6.col-sm-4.remote-services__button.remote-services__button--no-hover.unlockButton.remote-services__button--two-columns .remote-services__icon.remote-services__icon--big",
        function success() {
            test.assertExists(".col-xs-6.col-sm-4.remote-services__button.remote-services__button--no-hover.unlockButton.remote-services__button--two-columns .remote-services__icon.remote-services__icon--big");
            this.click(".col-xs-6.col-sm-4.remote-services__button.remote-services__button--no-hover.unlockButton.remote-services__button--two-columns .remote-services__icon.remote-services__icon--big");
        },
        function fail() {
            test.assertExists(".col-xs-6.col-sm-4.remote-services__button.remote-services__button--no-hover.unlockButton.remote-services__button--two-columns .remote-services__icon.remote-services__icon--big");
        });
    casper.waitForSelector("form#starlinkOptionsForm input[name='pin']",
        function success() {
            test.assertExists("form#starlinkOptionsForm input[name='pin']");
            this.click("form#starlinkOptionsForm input[name='pin']");
        },
        function fail() {
            test.assertExists("form#starlinkOptionsForm input[name='pin']");
        });
    casper.waitForSelector("input[name='pin']",
        function success() {
            this.sendKeys("input[name='pin']", process.env.PIN);
        },
        function fail() {
            test.assertExists("input[name='pin']");
        });
    casper.waitForSelector("form#starlinkOptionsForm .btn.btn-primary.btn-block.form__inline-button.form__inline-button--has-labels.submitOptionsTrigger.trn",
        function success() {
            test.assertExists("form#starlinkOptionsForm .btn.btn-primary.btn-block.form__inline-button.form__inline-button--has-labels.submitOptionsTrigger.trn");
            this.click("form#starlinkOptionsForm .btn.btn-primary.btn-block.form__inline-button.form__inline-button--has-labels.submitOptionsTrigger.trn");
        },
        function fail() {
            test.assertExists("form#starlinkOptionsForm .btn.btn-primary.btn-block.form__inline-button.form__inline-button--has-labels.submitOptionsTrigger.trn");
        });
    casper.waitForSelector(x("//*[contains(text(), \'Doors Unlocked\')]"),
        function success() {
            test.assertExists(x("//*[contains(text(), \'Doors Unlocked\')]"));
        },
        function fail() {
            test.assertExists(x("//*[contains(text(), \'Doors Unlocked\')]"));
        }, 20000);

    casper.run(function() {test.done();});
});