// Copyright (c) 2018-present TF Chat, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {getUser} from 'mattermost-redux/actions/users';

import SystemUsersList from './system_users_list.jsx';
import {getUsers} from './selectors.jsx';

function mapStateToProps(state, ownProps) {
    return {
        users: getUsers(state, ownProps.loading, ownProps.teamId, ownProps.term),
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            getUser,
        }, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SystemUsersList);
