/**
 * 活动通用化配置文件，数据通过乐高平台进行编辑
 * @type {string}
 */
export const GET_ACTIVITY_CONFIG = 'GET_ACTIVITY_CONFIG';
export const GET_ACTIVITY_CONFIG_FETCHING = 'GET_ACTIVITY_CONFIG_FETCHING';
export const GET_ACTIVITY_CONFIG_SUCCESS = 'GET_ACTIVITY_CONFIG_SUCCESS';
export const GET_ACTIVITY_CONFIG_FAIL = 'GET_ACTIVITY_CONFIG_FAIL';

export function getActivityConfig () {
    return {
        actionType: GET_ACTIVITY_CONFIG,
        'Call API': {
            url: `//feflow.test.com/getactivityconfig`,
            types: [GET_ACTIVITY_CONFIG, GET_ACTIVITY_CONFIG_SUCCESS, GET_ACTIVITY_CONFIG_FAIL],
            type: 'get',
            data: {
            }
        }
    };
}
