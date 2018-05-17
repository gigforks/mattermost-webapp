// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import {FormattedHTMLMessage, FormattedMessage} from 'react-intl';

import * as Utils from 'utils/utils.jsx';

import AdminSettings from './admin_settings.jsx';
import BooleanSetting from './boolean_setting.jsx';
import SettingsGroup from './settings_group.jsx';
import TextSetting from './text_setting.jsx';

export default class IyoSettings extends AdminSettings {
    constructor(props) {
        super(props);
        this.getConfigFromState = this.getConfigFromState.bind(this);
        this.renderSettings = this.renderSettings.bind(this);
        this.updateIyoUrl = this.updateIyoUrl.bind(this);
    }

    getConfigFromState(config) {
        config.IyoSettings.Enable = this.state.enable;
        config.IyoSettings.Id = this.state.id;
        config.IyoSettings.Secret = this.state.secret;
        config.IyoSettings.UserApiEndpoint = this.state.userApiEndpoint;
        config.IyoSettings.AuthEndpoint = this.state.authEndpoint;
        config.IyoSettings.TokenEndpoint = this.state.tokenEndpoint;

        return config;
    }

    getStateFromConfig(config) {
        return {
            enable: config.IyoSettings.Enable,
            id: config.IyoSettings.Id,
            secret: config.IyoSettings.Secret,
            IyoUrl: config.IyoSettings.UserApiEndpoint.replace('/api/v4/user', ''),
            userApiEndpoint: config.IyoSettings.UserApiEndpoint,
            authEndpoint: config.IyoSettings.AuthEndpoint,
            tokenEndpoint: config.IyoSettings.TokenEndpoint,
        };
    }

    updateIyoUrl(id, value) {
        let trimmedValue = value;
        if (value.endsWith('/')) {
            trimmedValue = value.slice(0, -1);
        }

        this.setState({
            saveNeeded: true,
            IyoUrl: value,
            userApiEndpoint: trimmedValue + '/api/users/%s/info',
            authEndpoint: trimmedValue + '/v1/oauth/authorize',
            tokenEndpoint: trimmedValue + '/v1/oauth/access_token',
        });
    }

    isIyoURLSetByEnv = () => {
        // Assume that if one of these has been set using an environment variable,
        // all of them have been set that way
        return this.isSetByEnv('IyoSettings.AuthEndpoint') ||
            this.isSetByEnv('IyoSettings.TokenEndpoint') ||
            this.isSetByEnv('IyoSettings.UserApiEndpoint');
    };

    renderTitle() {
        return (
            <FormattedMessage
                id='admin.authentication.iyo'
                defaultMessage='itsyou.online'
            />
        );
    }

    renderSettings() {
        return (
            <SettingsGroup>
                <BooleanSetting
                    id='enable'
                    label={
                        <FormattedMessage
                            id='admin.iyo.enableTitle'
                            defaultMessage='Enable authentication with Itsyou.online: '
                        />
                    }
                    value={this.state.enable}
                    onChange={this.handleChange}
                    setByEnv={this.isSetByEnv('IyoSettings.Enable')}
                />
                <TextSetting
                    id='id'
                    label={
                        <FormattedMessage
                            id='admin.iyo.clientIdTitle'
                            defaultMessage='Application ID:'
                        />
                    }
                    placeholder={Utils.localizeMessage('admin.iyo.clientIdExample', 'E.g.: "gigorg"')}
                    value={this.state.id}
                    onChange={this.handleChange}
                    disabled={!this.state.enable}
                    setByEnv={this.isSetByEnv('IyoSettings.Id')}
                />
                <TextSetting
                    id='secret'
                    label={
                        <FormattedMessage
                            id='admin.iyo.clientSecretTitle'
                            defaultMessage='Application Secret Key:'
                        />
                    }
                    placeholder={Utils.localizeMessage('admin.iyo.clientSecretExample', 'E.g.: "jcuS8PuvcpGhpgHhlcpT1Mx42pnqMxQY"')}
                    value={this.state.secret}
                    onChange={this.handleChange}
                    disabled={!this.state.enable}
                    setByEnv={this.isSetByEnv('IyoSettings.Secret')}
                />
                <TextSetting
                    id='iyoUrl'
                    label={
                        <FormattedMessage
                            id='admin.iyo.siteUrl'
                            defaultMessage='Itsyou.online Site URL:'
                        />
                    }
                    placeholder={Utils.localizeMessage('admin.iyo.siteUrlExample', 'E.g.: https://itsyou.online')}
                    value={this.state.gitLabUrl}
                    onChange={this.updateIyoUrl}
                    disabled={!this.state.enable}
                    setByEnv={this.isIyoURLSetByEnv()}
                />
                <TextSetting
                    id='userApiEndpoint'
                    label={
                        <FormattedMessage
                            id='admin.iyo.userTitle'
                            defaultMessage='User API Endpoint:'
                        />
                    }
                    placeholder={''}
                    value={this.state.userApiEndpoint}
                    disabled={true}
                    setByEnv={false}
                />
                <TextSetting
                    id='authEndpoint'
                    label={
                        <FormattedMessage
                            id='admin.iyo.authTitle'
                            defaultMessage='Auth Endpoint:'
                        />
                    }
                    placeholder={''}
                    value={this.state.authEndpoint}
                    disabled={true}
                    setByEnv={false}
                />
                <TextSetting
                    id='tokenEndpoint'
                    label={
                        <FormattedMessage
                            id='admin.iyo.tokenTitle'
                            defaultMessage='Token Endpoint:'
                        />
                    }
                    placeholder={''}
                    value={this.state.tokenEndpoint}
                    disabled={true}
                    setByEnv={false}
                />
            </SettingsGroup>
        );
    }
}
