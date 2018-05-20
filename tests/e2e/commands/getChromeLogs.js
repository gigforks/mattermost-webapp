// Copyright (c) 2018-present TF Chat, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

exports.command = function getChromeLogs() {
    return this.getLog('browser', (logEntriesArray) => {
        logEntriesArray.forEach((log) => {
            console.log(`[${log.level}] Timestamp: ${log.timestamp}\n`); //eslint-disable-line no-console
        });
    });
};
