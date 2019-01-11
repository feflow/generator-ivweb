'use strict';

import React from 'react';
import './index.less';

export default class DefaultComponent extends React.Component {

    render() {
        return (
            <div className="default-component">
                <p>欢迎使用由Feflow提供的Starkit.</p>
                <p>Feflow官网：<a href="http://feflowjs.org/">http://feflowjs.org/</a></p>
            </div>
        );
    }
}
