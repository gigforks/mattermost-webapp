// Copyright (c) 2018-present TF Chat, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {Constants} from '../utils';

const logoutCommands = {
    navigateToPage() {
        return this.waitForElementVisible('@mainMenuButton', Constants.DEFAULT_WAIT);
    },
    logout() {
        return this.
            waitForElementVisible('@mainMenuButton', Constants.DEFAULT_WAIT).
            click('@mainMenuButton').
            waitForElementVisible('@logoutButton', Constants.DEFAULT_WAIT).
            click('@logoutButton');
    },
};

module.exports = {
    url: `${Constants.TEST_BASE_URL}`,
    commands: [logoutCommands],
    elements: {
        mainMenuButton: {selector: '#sidebarHeaderDropdownButton'},
        logoutButton: {selector: '#logout'},
    },
};
