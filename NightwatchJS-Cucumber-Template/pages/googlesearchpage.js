const googleCommands = {
    searchFor: function(searchtext) {
        return this.waitForElementVisible('@searchbox', 1000)
            .setValue('@searchbox', [searchtext, this.api.Keys.ENTER]);
    }
};

export const url = 'http://google.com';
export const commands = [googleCommands];
export const elements = {
    searchbox: {
        selector: 'input[type=text]'
    }
};