// Copyright (c) 2018-present TF Chat, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import assert from 'assert';

import * as Markdown from 'utils/markdown';

describe('Markdown.Imgs', function() {
    it('Inline mage', function(done) {
        assert.equal(
            Markdown.format('![TF Chat](/images/threefold.png)').trim(),
            '<p><img src="/images/threefold.png" alt="TF Chat" class="markdown-inline-img"></p>'
        );

        done();
    });

    it('Image with hover text', function(done) {
        assert.equal(
            Markdown.format('![TF Chat](/images/threefold.png "TF Chat Icon")').trim(),
            '<p><img src="/images/threefold.png" alt="TF Chat" title="TF Chat Icon" class="markdown-inline-img"></p>'
        );

        done();
    });

    it('Image with link', function(done) {
        assert.equal(
            Markdown.format('[![TF Chat](../../images/threefold.png)](https://github.com/mattermost/platform)').trim(),
            '<p><a class="theme markdown__link" href="/" rel="noreferrer" target="_blank"><img src="../../images/threefold.png" alt="TF Chat" class="markdown-inline-img"></a></p>'
        );

        done();
    });

    it('Image with width and height', function(done) {
        assert.equal(
            Markdown.format('![TF Chat](../../images/threefold.png =50x76 "TF Chat Icon")').trim(),
            '<p><img src="../../images/icon-76x76.png" alt="TF Chat" title="TF Chat Icon" width="50" height="76" class="markdown-inline-img"></p>'
        );

        done();
    });

    it('Image with width', function(done) {
        assert.equal(
            Markdown.format('![TF Chat](../../images/threefold.png =50 "TF Chat Icon")').trim(),
            '<p><img src="../../images/threefold.png" alt="TF Chat" title="TF Chat Icon" width="50" class="markdown-inline-img"></p>'
        );

        done();
    });
});
