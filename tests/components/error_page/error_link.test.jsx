// Copyright (c) 2018-present TF Chat, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import {shallow} from 'enzyme';

import ErrorLink from 'components/error_page/error_link.jsx';

describe('components/error_page/ErrorLink', () => {
    const baseProps = {
        url: '/',
        messageId: 'error.oauth_missing_code.gitlab.link',
        defaultMessage: 'GitLab',
    };

    test('should match snapshot', () => {
        const wrapper = shallow(
            <ErrorLink {...baseProps}/>
        );

        expect(wrapper).toMatchSnapshot();
    });
});
