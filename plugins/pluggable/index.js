// Copyright (c) 2018-present TF Chat, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {connect} from 'react-redux';
import {getTheme} from 'mattermost-redux/selectors/entities/preferences';

import Pluggable from './pluggable.jsx';

function mapStateToProps(state, ownProps) {
    return {
        ...ownProps,
        components: state.plugins.components,
        theme: getTheme(state),
    };
}

export default connect(mapStateToProps)(Pluggable);
