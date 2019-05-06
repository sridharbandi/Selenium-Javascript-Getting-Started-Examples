## Selenium NightwatchJS Cucumber Template with Page Object Model

### How to use?
Create the Page Objects of your Web application under **_pages_** package and call those Page Objects in your step definitions under **_steps_** package (Sample Page Objects, Step definitions & Feature file included in this template)

### How to run?
To install the dependencies issue the below commands in project root directory
```javascript

npm install
``` 
To run the tests issue the below command
```javascript
npm test
``` 
By default it runs in Chrome browser, you can specify which browser to use as well
```javascript
BROWSER=firefox npm test
```

Browsers added in this template are 
* chrome
* firefox
* edge
* ie

> Feel free to modify it to your own needs :)