// Copyright (c) 2018-present TF Chat, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {loadRolesIfNeeded, editRole} from 'mattermost-redux/actions/roles';

import {getRoles} from 'mattermost-redux/selectors/entities/roles';

import UsersAndTeamsSettings from './users_and_teams_settings.jsx';

function mapStateToProps(state) {
    return {
        roles: getRoles(state),
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            loadRolesIfNeeded,
            editRole,
        }, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersAndTeamsSettings);
