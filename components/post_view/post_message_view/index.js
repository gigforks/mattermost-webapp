// Copyright (c) 2018-present TF Chat, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {connect} from 'react-redux';
import {Preferences} from 'mattermost-redux/constants';
import {getTheme, getBool} from 'mattermost-redux/selectors/entities/preferences';

import PostMessageView from './post_message_view.jsx';

function mapStateToProps(state) {
    return {
        enableFormatting: getBool(state, Preferences.CATEGORY_ADVANCED_SETTINGS, 'formatting', true),
        pluginPostTypes: state.plugins.postTypes,
        theme: getTheme(state),
    };
}

export default connect(mapStateToProps)(PostMessageView);
