// Copyright (c) 2018-present TF Chat, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {connect} from 'react-redux';
import {getLicense} from 'mattermost-redux/selectors/entities/general';

import UserSettingsTheme from './user_settings_theme.jsx';

function mapStateToProps(state) {
    const license = getLicense(state);

    const isLicensed = license.IsLicensed === 'true';
    const ldap = license.LDAP === 'true';

    return {
        isLicensed,
        ldap,
    };
}

export default connect(mapStateToProps)(UserSettingsTheme);
