
class GoogleSearchPage {

    get searchbox() { return $('//*[@name="q"]'); }

    open() {
        browser.url('http://www.google.com')
    }

    searchfor(searchterm) {
        this.searchbox.setValue(searchterm);
        browser.keys('Enter');
    }
}

export default new GoogleSearchPage();