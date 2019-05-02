import "chromedriver";
import "geckodriver";
import "iedriver";
import "edgedriver";
import "operadriver";
import { Builder } from "selenium-webdriver";

export default function getDriver() {
    var browser = process.env.BROWSER;
    var browsername = browser == undefined ? 'chrome' : browser;
    switch (browsername.toUpperCase()) {
        case 'FIREFOX':
            return new Builder().forBrowser('firefox').build();
        case 'CHROME':
            return new Builder().forBrowser('chrome').build();
        case 'IE':
            return new Builder().forBrowser('internet explorer').build();
        case 'EDGE':
            return new Builder().forBrowser('MicrosoftEdge').build();
        case 'OPERA':
            return new Builder().forBrowser('opera').build();
        default:
            return new Builder().forBrowser('chrome').build();
    }
};