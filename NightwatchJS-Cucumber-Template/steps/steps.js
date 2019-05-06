import { Given, When, Then } from 'cucumber';
import { client } from 'nightwatch-api';
var GoogleSearchPage = client.page.googlesearchpage();
var SearchResultsPage = client.page.searchresultspage();

Given(/^User is on Google search page$/, async () => {
    await GoogleSearchPage.navigate();
});

When(/^User searches for Selenium$/, async () => {
    await GoogleSearchPage.searchFor('Selenium');
});

Then(/^User can see Selenium results$/, async () => {
    SearchResultsPage.expect.element('@linkselenium').to.be.visible;
});

