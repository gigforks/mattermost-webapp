// Copyright (c) 2018-present TF Chat, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {connect} from 'react-redux';
import {getCurrentTeam} from 'mattermost-redux/selectors/entities/teams';

import {getSiteURL} from 'utils/url.jsx';

import GetPostLinkModal from './get_post_link_modal';

function mapStateToProps(state, ownProps) {
    const currentTeam = getCurrentTeam(state) || {};
    const currentTeamUrl = `${getSiteURL()}/${currentTeam.name}`;
    return {
        ...ownProps,
        currentTeamUrl,
    };
}

export default connect(mapStateToProps)(GetPostLinkModal);
