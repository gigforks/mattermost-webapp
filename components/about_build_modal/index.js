// Copyright (c) 2018-present TF Chat, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {connect} from 'react-redux';
import {getConfig, getLicense} from 'mattermost-redux/selectors/entities/general';

import AboutBuildModal from './about_build_modal.jsx';

function mapStateToProps(state, ownProps) {
    return {
        ...ownProps,
        config: getConfig(state),
        license: getLicense(state),
    };
}

export default connect(mapStateToProps)(AboutBuildModal);
