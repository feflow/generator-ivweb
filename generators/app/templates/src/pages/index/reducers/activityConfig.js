import { GET_ACTIVITY_CONFIG } from '../actions/activityConfig';

export function activityConfig (state = {}, action) {
    switch (action.actionType) {
        case GET_ACTIVITY_CONFIG:
            if (action.data.storeStatus === 'success') {
                const result = action.data || {};
                return Object.assign({}, state, result);
            } else if (action.status === 'fail') {
                return Object.assign({}, state);
            } else {
                return state;
            }
        default:
            return state;
    }
}
