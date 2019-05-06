import { Given, When, Then } from 'cucumber';
import { client } from 'nightwatch-api';
var GoogleSearchPage = client.page.googlesearchpage();
var SearchResultsPage = client.page.searchresultspage();

Given(/^User is on Google search page$/, async function () {
    await GoogleSearchPage.navigate();
});

When(/^User searches for Selenium$/, async function () {
    await GoogleSearchPage.searchFor('Selenium');
});

Then(/^User can see Selenium results$/, async function () {
    SearchResultsPage.expect.element('@linkselenium').to.be.visible;
});

