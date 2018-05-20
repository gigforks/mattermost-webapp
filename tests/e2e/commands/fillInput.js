// Copyright (c) 2018-present TF Chat, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

exports.command = function fillInput(element, string) {
    return this.
        waitForElementVisible(element, 3000).
        clearValue(element).
        pause(300).
        setValue(element, string).
        pause(1000);
};
