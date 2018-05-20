// Copyright (c) 2018-present TF Chat, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {connect} from 'react-redux';
import {getConfig} from 'mattermost-redux/selectors/entities/general';

import UserSettingsModal from './user_settings_modal.jsx';

function mapStateToProps(state) {
    const config = getConfig(state);

    const closeUnusedDirectMessages = config.CloseUnusedDirectMessages === 'true';
    const experimentalGroupUnreadChannels = config.ExperimentalGroupUnreadChannels;

    return {
        closeUnusedDirectMessages,
        experimentalGroupUnreadChannels,
    };
}

export default connect(mapStateToProps)(UserSettingsModal);
