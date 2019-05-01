import GoogleSearchPage from '../pageobjects/googlehomepage';
import SearchResultsPage from '../pageobjects/searchresultspage';
import {assert} from 'chai';
import {argv} from 'yargs';
import getDriver from '../driverutil/driverutil';
{
    describe, before, after, it
}
import "selenium-webdriver/testing";

describe('Google Search', function () {
    let driver;
    let googlesearchpage;
    let searchresultspage;
    this.timeout(50000);

    before(async () => {
        driver = await getDriver(argv.browser)
        googlesearchpage = new GoogleSearchPage(driver);
        searchresultspage = new SearchResultsPage(driver);
    });

    it('Google Search Test', async function () {
        await googlesearchpage.navigate();
        await googlesearchpage.searchfor('Selenium');
        await searchresultspage.waitUntilPageLoaded();
        assert.isTrue(await searchresultspage.assertlinkpresent(), 'Selenium Link Present');
    });

    after(() => driver.quit());
});