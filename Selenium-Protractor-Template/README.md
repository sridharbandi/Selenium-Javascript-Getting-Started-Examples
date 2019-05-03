## Selenium Protractor Template with Page Object Model
>[Protractor](https://www.protractortest.org/#/) is an end-to-end test framework for Angular and AngularJS applications.Protractor runs tests against your application running in a real browser, interacting with it as a user would.

### How to use?
Create the Page Objects of your Web application under **_pages_** package, call those Page Objects in tests under **_specs_** package (Sample Page Objects, testcase included in this template)

### How to run?
To install the dependencies issue the below command in project root directory
```javascript
npm install
``` 
To start the selenium server issue the below command in project root directory
```javascript
./node_modules/.bin/webdriver-manager update
``` 
and then 
```javascript
./node_modules/.bin/webdriver-manager start
``` 
To run the tests issue the below command
```javascript
npm test
``` 
By default it runs in Chrome browser, you can specify which browser to use as well
```javascript
npm test -- --browser=firefox
``` 
Currently supported browsers in this template are
 * chrome
 * firefox

> Feel free to modify it to your own needs :)