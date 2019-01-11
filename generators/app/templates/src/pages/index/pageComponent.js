'use strict';

import React, { Component } from 'react';
import DefaultComponent from './components/default-component';
import { hot } from 'react-hot-loader'
import { getActivityConfig } from "./actions";
import './index.less';

class pageComponent extends Component {

    constructor() {
        super(...arguments);

    }

    componentWillMount() {
        // this.getLegoConfig();
    }

    /**
     * get lego config
     */
    getLegoConfig() {
        const { dispatch } = this.props;

        dispatch(getActivityConfig());
    }

    render() {
        const { activityConfig } = this.props;

        return <div className="page-container">
            <DefaultComponent />
        </div>;
    }
}


export default hot(module)(pageComponent);
