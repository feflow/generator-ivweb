'use strict';

import BasePage from '/modules/page/BasePage';
import pageComponent from "./pageComponent";
import { activityConfig } from "./reducers";

export default class Page extends BasePage {
    static component = pageComponent;

    static reducer = {
        activityConfig
    };
}
