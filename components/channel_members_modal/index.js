// Copyright (c) 2018-present TF Chat, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {connect} from 'react-redux';
import {canManageChannelMembers} from 'mattermost-redux/selectors/entities/channels';

import ChannelMembersModal from './channel_members_modal.jsx';

function mapStateToProps(state) {
    return {
        canManageChannelMembers: canManageChannelMembers(state),
    };
}

export default connect(mapStateToProps)(ChannelMembersModal);
