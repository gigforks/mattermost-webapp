// Copyright (c) 2018-present TF Chat, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {connect} from 'react-redux';
import {getCurrentUser} from 'mattermost-redux/selectors/entities/users';

import {getIsWebrtcOpen} from 'selectors/webrtc';

import WebrtcSidebar from './webrtc_sidebar';

function mapStateToProps(state) {
    return {
        isOpen: getIsWebrtcOpen(state),
        currentUser: getCurrentUser(state),
    };
}

export default connect(mapStateToProps)(WebrtcSidebar);
