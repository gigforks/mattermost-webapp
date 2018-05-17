// Copyright (c) 2018-present ZeroChat, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import PropTypes from 'prop-types';
import React from 'react';

import {saveConfig} from 'actions/admin_actions.jsx';
import {localizeMessage} from 'utils/utils.jsx';
import SaveButton from 'components/save_button.jsx';
import FormError from 'components/form_error.jsx';

export default class AdminSettings extends React.Component {
    static propTypes = {

        /*
         * Object representing the config file
         */
        config: PropTypes.object,

        /*
         * Object containing config fields that have been set through environment variables
         */
        environmentConfig: PropTypes.object,

        /*
         * Action for whether a save is needed
         */
        setNavigationBlocked: PropTypes.func,
    }

    constructor(props) {
        super(props);

        this.state = Object.assign(this.getStateFromConfig(props.config), {
            saveNeeded: false,
            saving: false,
            serverError: null,
        });
    }

    handleChange = (id, value) => {
        this.setState({
            saveNeeded: true,
            [id]: value,
        });

        this.props.setNavigationBlocked(true);
    };

    handleSubmit = (e) => {
        e.preventDefault();

        this.doSubmit();
    }

    doSubmit = (callback) => {
        this.setState({
            saving: true,
            serverError: null,
        });

        // clone config so that we aren't modifying data in the stores
        let config = JSON.parse(JSON.stringify(this.props.config));
        config = this.getConfigFromState(config);

        saveConfig(
            config,
            (savedConfig) => {
                this.setState(this.getStateFromConfig(savedConfig));

                this.setState({
                    saveNeeded: false,
                    saving: false,
                });

                this.props.setNavigationBlocked(false);

                if (callback) {
                    callback();
                }

                if (this.handleSaved) {
                    this.handleSaved(config);
                }
            },
            (err) => {
                this.setState({
                    saving: false,
                    serverError: err.message,
                    serverErrorId: err.id,
                });

                if (callback) {
                    callback();
                }

                if (this.handleSaved) {
                    this.handleSaved(config);
                }
            }
        );
    };

    parseInt = (str, defaultValue) => {
        const n = parseInt(str, 10);

        if (isNaN(n)) {
            if (defaultValue) {
                return defaultValue;
            }
            return 0;
        }

        return n;
    };

    parseIntNonZero = (str, defaultValue) => {
        const n = parseInt(str, 10);

        if (isNaN(n) || n < 1) {
            if (defaultValue) {
                return defaultValue;
            }
            return 1;
        }

        return n;
    };

    getConfigValue(config, path) {
        const pathParts = path.split('.');

        return pathParts.reduce((obj, pathPart) => {
            if (!obj) {
                return null;
            }

            return obj[pathPart];
        }, config);
    }

    setConfigValue(config, path, value) {
        function setValue(obj, pathParts) {
            const part = pathParts[0];

            if (pathParts.length === 1) {
                obj[part] = value;
            } else {
                if (obj[part] == null) {
                    obj[part] = {};
                }

                setValue(obj[part], pathParts.slice(1));
            }
        }

        setValue(config, path.split('.'));
    }

    isSetByEnv = (path) => {
        return Boolean(this.getConfigValue(this.props.environmentConfig, path));
    };

    render() {
        return (
            <div className='wrapper--fixed'>
                <h3 className='admin-console-header'>
                    {this.renderTitle()}
                </h3>
                <form
                    className='form-horizontal'
                    role='form'
                    onSubmit={this.handleSubmit}
                >
                    {this.renderSettings()}
                    <div className='form-group'>
                        <FormError error={this.state.serverError}/>
                    </div>
                    <div className='form-group'>
                        <div className='col-sm-12'>
                            <SaveButton
                                saving={this.state.saving}
                                disabled={!this.state.saveNeeded || (this.canSave && !this.canSave())}
                                onClick={this.handleSubmit}
                                savingMessage={localizeMessage('admin.saving', 'Saving Config...')}
                            />
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
