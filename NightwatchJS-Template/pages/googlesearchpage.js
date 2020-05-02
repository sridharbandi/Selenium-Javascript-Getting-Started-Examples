var googleCommands = {
    searchFor: function(searchtext) {
        return this.waitForElementVisible('@searchbox', 1000)
            .setValue('@searchbox', [searchtext, this.api.Keys.ENTER]);
    }
};

module.exports = {
    url: 'http://google.com',
    commands: [googleCommands],
    elements: {
        searchbox: {
            selector: 'input[name=q]'
        }
    }
};