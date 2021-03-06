// Copyright (c) 2018-present TF Chat, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {connect} from 'react-redux';
import {getConfig} from 'mattermost-redux/selectors/entities/general';

import PostBodyAdditionalContent from './post_body_additional_content.jsx';

function mapStateToProps(state) {
    const config = getConfig(state);
    const enableLinkPreviews = config.EnableLinkPreviews === 'true';
    const hasImageProxy = config.HasImageProxy === 'true';

    return {
        enableLinkPreviews,
        hasImageProxy,
    };
}

export default connect(mapStateToProps)(PostBodyAdditionalContent);
