import { Given, When, Then, After, Before } from 'cucumber';
import GoogleSearchPage from '../pages/googlehomepage';
import SearchResultsPage from '../pages/searchresultspage';
import { assert } from 'chai';
import getDriver from '../driverutil/driverutil';

let driver;
let googlesearchpage;
let searchresultspage;

Before(async () => {
    driver = await getDriver();
    googlesearchpage = new GoogleSearchPage(driver);
    searchresultspage = new SearchResultsPage(driver);
});

Given(/^User is on Google search page$/, async () => {
    await googlesearchpage.navigate();
});

When(/^User searches for Selenium$/, async () => {
    await googlesearchpage.searchfor('Selenium');
});

Then(/^User can see Selenium results$/, async () => {
    await searchresultspage.waitUntilPageLoaded();
    assert.isTrue(await searchresultspage.assertlinkpresent(), 'Selenium Link Not Present');
});

After(() => driver.quit());