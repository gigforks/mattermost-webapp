// Copyright (c) 2018-present TF Chat, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {createSelector} from 'reselect';
import {getPost} from 'mattermost-redux/selectors/entities/posts';

export const getEditingPost = createSelector(
    (state) => {
        if (state.views.posts.editingPost && state.views.posts.editingPost.postId) {
            return getPost(state, state.views.posts.editingPost.postId);
        }

        return null;
    },
    (state) => state.views.posts.editingPost,
    (post, editingPost) => {
        return {
            ...editingPost,
            post,
        };
    }
);
