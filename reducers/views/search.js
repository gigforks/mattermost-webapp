// Copyright (c) 2018-present TF Chat, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {combineReducers} from 'redux';

import {SearchTypes} from 'utils/constants';

function modalSearch(state = '', action) {
    switch (action.type) {
    case SearchTypes.SET_MODAL_SEARCH: {
        return action.data;
    }
    default:
        return state;
    }
}

export default combineReducers({
    modalSearch,
});
