import {assert} from "chai";
import GoogleSearchPage from '../pages/googlesearchpage';
import SearchResultsPage from '../pages/searchresultspage';

describe('GoogleSearch Test', function () {
    it('Search for Selenium', function () {
        GoogleSearchPage.open();
        GoogleSearchPage.searchfor('Selenium');
        assert.isOk(SearchResultsPage.linkselenium, 'Selenium Link Present')
    });
});