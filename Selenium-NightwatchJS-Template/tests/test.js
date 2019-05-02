module.exports = {
    'Google Search Example' : function (browser) {
        var google = browser.page.googlesearchpage();
        var googleresults = browser.page.searchresultspage();
        google.navigate().searchFor('Selenium');
        googleresults.expect.element('@linkselenium').to.be.visible;
        browser.end();
    }
};