// Copyright (c) 2018-present TF Chat, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import {shallow} from 'enzyme';

import AutosizeTextarea from 'components/autosize_textarea.jsx';

describe('components/AutosizeTextarea', () => {
    test('should match snapshot, init', () => {
        const wrapper = shallow(
            <AutosizeTextarea/>
        );

        expect(wrapper).toMatchSnapshot();
    });
});
