// Copyright (c) 2018-present TF Chat, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';

export default class ThreeFoldLogo extends React.PureComponent {
    render() {
        return (
            <span {...this.props}>
                <svg 
                    version="1.1" 
                    id="Layer_1" 
                    x="0px" 
                    y="0px"
                    viewBox="0 0 566.9 566.9" 
                    style={style.background}
                >
                    <g>
                        <g>
                            <circle style={style.st0} cx="284.5" cy="283.5" r="157.2" />
                        </g>
                        <g>
                            <circle style={style.st1} cx="282.5" cy="277.5" r="157.2" />
                        </g>
                        <g>
                            <rect x="193.1" y="214.1" style={style.st2} width="178.8" height="12.9" />
                            <rect x="193.1" y="328" style={style.st0} width="178.8" height="12.9" />
                            <rect x="193.1" y="271" style={style.st3} width="178.8" height="12.9" />
                        </g>
                    </g>
                </svg>
            </span>
        );
    }
}

const style = {
    background: {
        enableBackground: 'new 0 0 566.9 566.9',
    },
    st0: {
        fill: 'C6C9CD'
    },
    st1: { 
        fill: 'FFFFFF'
    },
    st2: {
        fill: '698FC9'
    },
    st3: { 
        fill: '7DA783'
    },
};
