class SearchResultsPage {
    constructor() {
        this.linkselenium = element(by.partialLinkText('Selenium - Web Browser Automation'));
    }

    async isSeleniumPresent() {
        return await this.linkselenium.isDisplayed();
    }
}
export default new SearchResultsPage();