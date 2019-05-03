export default class GoogleSearchPage {
    constructor() {
        this.searchbox = element(by.name('q'))
    }

    async open() {
        await browser.get('http://www.google.com');
    }

    async title() {
        return await browser.getTitle();
    }

    async searchFor(searchterm) {
        await this.searchbox.sendKeys(searchterm, protractor.Key.RETURN);
    }
}