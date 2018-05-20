// Copyright (c) 2018-present TF Chat, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import {shallow} from 'enzyme';

import FileInfoPreview from 'components/file_info_preview/file_info_preview.jsx';

describe('components/FileInfoPreview', () => {
    test('should match snapshot, can download files', () => {
        const wrapper = shallow(
            <FileInfoPreview
                fileUrl='/'
                fileInfo={{name: 'Test Image', size: 100, extension: 'jpg'}}
                canDownloadFiles={true}
            />
        );

        expect(wrapper).toMatchSnapshot();
    });

    test('should match snapshot, cannot download files', () => {
        const wrapper = shallow(
            <FileInfoPreview
                fileUrl='/'
                fileInfo={{name: 'Test Image 2', size: 200, extension: 'png'}}
                canDownloadFiles={false}
            />
        );

        expect(wrapper).toMatchSnapshot();
    });
});
