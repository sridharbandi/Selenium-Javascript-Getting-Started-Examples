import {By, until} from "selenium-webdriver";

export default function (driver) {
    const pageobjects = {
        linkselenium: By.partialLinkText('Selenium')
    };

    return {
        waitUntilPageLoaded: function() {
            return driver.wait(until.titleContains("Selenium"));
        },

        assertlinkpresent: function() {
            return driver.findElement(pageobjects.linkselenium).isDisplayed();
        }
    };
}