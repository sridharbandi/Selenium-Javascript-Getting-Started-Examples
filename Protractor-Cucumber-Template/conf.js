exports.config = {
    framework: 'custom',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    specs: ['./features/*.feature'],
    cucumberOpts: {
        require: ['./steps/*.js'],
        format: 'json:results.json',
        strict: true,
        'no-colors': true
    },
    onPrepare: () => {
        require("@babel/register");
        browser.ignoreSynchronization = true;
    }
}