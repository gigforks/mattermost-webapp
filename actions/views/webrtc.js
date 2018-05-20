// Copyright (c) 2018-present TF Chat, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {ActionTypes} from 'utils/constants.jsx';

export const initWebrtc = (userId, isCaller) => (dispatch) => dispatch({
    type: ActionTypes.INIT_WEBRTC,
    userId,
    isCaller,
});

export const closeWebrtc = () => (dispatch) => dispatch({
    type: ActionTypes.CLOSE_WEBRTC,
});
