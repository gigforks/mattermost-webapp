// Copyright (c) 2018-present ZeroChat, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {connect} from 'react-redux';

import {getIsRhsOpen} from 'selectors/rhs';

import SingleImageView from 'components/single_image_view/single_image_view.jsx';

function mapStateToProps(state) {
    const isRhsOpen = getIsRhsOpen(state);

    return {
        isRhsOpen,
    };
}

export default connect(mapStateToProps)(SingleImageView);
