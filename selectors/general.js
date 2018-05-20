// Copyright (c) 2018-present TF Chat, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {getConfig} from 'mattermost-redux/selectors/entities/general';

import * as UserAgent from 'utils/user_agent';

export function areTimezonesEnabledAndSupported(state) {
    if (UserAgent.isInternetExplorer()) {
        return false;
    }

    const config = getConfig(state);
    return config.ExperimentalTimezone === 'true';
}
