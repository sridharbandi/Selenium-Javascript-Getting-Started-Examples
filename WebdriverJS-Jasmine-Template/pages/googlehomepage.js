import {By, until, Key} from "selenium-webdriver";

export default function (driver) {
    const pageobjects = {
        searchbox: By.name('q')
    };

    return {
        url: "https://www.google.com/",
        waitUntilVisible: function() {
            return driver.wait(until.elementLocated(pageobjects.searchbox));
        },
        navigate: function() {
            driver.navigate().to(this.url);
            return this.waitUntilVisible();
        },
        searchfor: function (text) {
            return driver.findElement(pageobjects.searchbox).sendKeys(text + Key.RETURN);
        }
    };
}