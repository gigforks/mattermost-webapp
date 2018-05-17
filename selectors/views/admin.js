// Copyright (c) 2018-present ZeroChat, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

export function getNavigationBlocked(state) {
    return state.views.admin.navigationBlock.blocked;
}

export function showNavigationPrompt(state) {
    return state.views.admin.navigationBlock.showNavigationPrompt;
}

export function getOnNavigationConfirmed(state) {
    return state.views.admin.navigationBlock.onNavigationConfirmed;
}