import GoogleSearchPage from '../pages/googlehomepage';
import SearchResultsPage from '../pages/searchresultspage';
import {assert} from 'chai';
import getDriver from '../driverutil/driverutil';

describe('Google Search', function () {
    let driver;
    let googlesearchpage;
    let searchresultspage;

    beforeEach(async () => {
        driver = await getDriver()
        googlesearchpage = new GoogleSearchPage(driver);
        searchresultspage = new SearchResultsPage(driver);
    });

    it('Google Search Test', async function () {
        await googlesearchpage.navigate();
        await googlesearchpage.searchfor('Selenium');
        await searchresultspage.waitUntilPageLoaded();
        assert.isTrue(await searchresultspage.assertlinkpresent(), 'Selenium Link Not Present');
    });

    afterEach(() => driver.quit());
});