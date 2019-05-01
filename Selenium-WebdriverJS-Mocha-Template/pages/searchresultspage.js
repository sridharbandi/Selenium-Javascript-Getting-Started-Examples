import {By, until} from "selenium-webdriver";

export default function (driver) {
    const pageobjects = {
        linkselenium: By.partialLinkText('Selenium - Web Browser Automation')
    };

    return {
        waitUntilPageLoaded: function() {
            return driver.wait(until.titleIs("Selenium - Google Search"));
        },

        assertlinkpresent: function() {
            return driver.findElement(pageobjects.linkselenium).isDisplayed();
        }
    };
}