// Copyright (c) 2018-present TF Chat, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import {shallow} from 'enzyme';

import {emitEmojiPosted} from 'actions/post_actions.jsx';
import Reaction from 'components/post_view/reaction/reaction.jsx';

jest.mock('actions/post_actions.jsx', () => ({
    emitEmojiPosted: jest.fn(),
}));

describe('components/post_view/Reaction', () => {
    const post = {id: 'post_id_1'};
    const profiles = [{id: 'user_id_2', username: 'username_2'}];
    const reactions = [{user_id: 'user_id_2'}, {user_id: 'user_id_3'}];
    const emojiName = 'smile';
    const actions = {
        addReaction: () => {},              //eslint-disable-line no-empty-function
        getMissingProfilesByIds: () => {},   //eslint-disable-line no-empty-function
        removeReaction: () => {},            //eslint-disable-line no-empty-function
    };

    const baseProps = {
        canAddReaction: true,
        canRemoveReaction: true,
        post,
        currentUserId: 'user_id_1',
        emojiName,
        reactionCount: 2,
        profiles,
        otherUsersCount: 2,
        reactions,
        emojiImageUrl: 'emoji_image_url',
        actions,
    };

    test('should match snapshot', () => {
        const wrapper = shallow(<Reaction {...baseProps}/>);
        expect(wrapper).toMatchSnapshot();
    });

    test('should match snapshot when a current user reacted to a post', () => {
        const newReactions = [{user_id: 'user_id_1'}, {user_id: 'user_id_2'}];
        const newProfiles = [{id: 'user_id_1', username: 'username_1'}];
        const props = {
            ...baseProps,
            reactions: newReactions,
            profiles: newProfiles,
            otherUsersCount: 1,
        };
        const wrapper = shallow(<Reaction {...props}/>);
        expect(wrapper).toMatchSnapshot();
    });

    test('should return null/empty if no emojiImageUrl', () => {
        const props = {...baseProps, emojiImageUrl: ''};
        const wrapper = shallow(<Reaction {...props}/>);
        expect(wrapper).toMatchSnapshot();
    });

    test('should disable add reaction when you do not have permissions', () => {
        const props = {...baseProps, canAddReaction: false};
        const wrapper = shallow(<Reaction {...props}/>);
        expect(wrapper).toMatchSnapshot();
    });

    test('should disable remove reaction when you do not have permissions', () => {
        const props = {...baseProps, canRemoveReaction: false, currentUserId: 'user_id_2'};
        const wrapper = shallow(<Reaction {...props}/>);
        expect(wrapper).toMatchSnapshot();
    });

    test('should have called actions.addReaction and emitEmojiPosted when addReaction is called', () => {
        const newActions = {...actions, addReaction: jest.fn()};
        const props = {...baseProps, actions: newActions};

        const wrapper = shallow(<Reaction {...props}/>);
        wrapper.instance().addReaction({preventDefault: jest.fn()});

        expect(newActions.addReaction).toHaveBeenCalledTimes(1);
        expect(newActions.addReaction).toHaveBeenCalledWith(post.id, emojiName);

        expect(emitEmojiPosted).toHaveBeenCalledTimes(1);
        expect(emitEmojiPosted).toHaveBeenCalledWith(emojiName);
    });

    test('should have called actions.removeReaction when removeReaction is called', () => {
        const newActions = {...actions, removeReaction: jest.fn()};
        const props = {...baseProps, actions: newActions};

        const wrapper = shallow(<Reaction {...props}/>);
        wrapper.instance().removeReaction({preventDefault: jest.fn()});

        expect(newActions.removeReaction).toHaveBeenCalledTimes(1);
        expect(newActions.removeReaction).toHaveBeenCalledWith(post.id, emojiName);
    });

    test('should have called actions.getMissingProfilesByIds when loadMissingProfiles is called', () => {
        const newActions = {...actions, getMissingProfilesByIds: jest.fn()};
        const props = {...baseProps, actions: newActions};

        const wrapper = shallow(<Reaction {...props}/>);
        wrapper.instance().loadMissingProfiles();

        expect(newActions.getMissingProfilesByIds).toHaveBeenCalledTimes(1);
        expect(newActions.getMissingProfilesByIds).toHaveBeenCalledWith([reactions[0].user_id, reactions[1].user_id]);
    });
});
