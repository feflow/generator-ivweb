import axios from 'axios';
import { camelizeKeys, decamelizeKeys } from 'humps';
const STATUS = 'storeStatus';

export const CALL_API = 'Call API';

export default store => next => action => {
    const opts = action[CALL_API];

    if (opts === undefined) {
        return next(action);
    }
    const {url, model} = opts;
    const [requestType, successType, failureType] = opts.types;
    const { useLocal } = opts;
    const startTime = new Date();
    opts.url = url;
    
    // native set cookie
    function actionWith (_action) {
        _action = Object.assign(action, _action);
        //'wait' 'fetching' 'success' 'fail'
        const obj = {
            [STATUS]: 'fetching'
        };

        _action.data = Object.assign(_action.data || {}, obj);

        const finalAction = _action;

        delete finalAction[CALL_API];
        return finalAction;
    }

    const data = Object.assign({}, opts.data);

    next(actionWith({
        type: requestType,
        data
    }));

    if (opts.data) {
        opts.data = decamelizeKeys(opts.data);
    }

    opts.succ = data => {
        if (data && data.result) {
            data.result.extra = opts.extra;
        }

        const cameData = camelizeKeys(data.result || data || {});

        const finalAction = actionWith({
            type: successType,
            transferParam: opts.transferParam,
            data: cameData
        });
        
        if (!data._isLocal) {
            next(finalAction);
        }
        
        
        typeof opts.onSuccess === 'function' && opts.onSuccess(data.result || data || {}, next);

        return finalAction;
    }

    opts.err = data => {
        if (data && data.stack) {
            // error
            setTimeout(function () {
                throw data;
            }, 0);
        } else {

            typeof opts.onFailed === 'function' && opts.onFailed(data || {}, next);

            const finalAction = actionWith({
                type: failureType,
                error: data
            });
            next(finalAction);
            return finalAction;
        }
    }

    return axios(opts).then(opts.success, opts.err);
};
 