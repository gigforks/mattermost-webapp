// Copyright (c) 2018-present TF Chat, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {connect} from 'react-redux';
import {getConfig} from 'mattermost-redux/selectors/entities/general';

import ErrorPage from './error_page.jsx';

function mapStateToProps(state) {
    const config = getConfig(state);

    return {
        siteName: config.SiteName,
        asymmetricSigningPublicKey: config.AsymmetricSigningPublicKey,
    };
}

export default connect(mapStateToProps)(ErrorPage);
