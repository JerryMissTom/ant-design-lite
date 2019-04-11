
import { POST_LOGIN_REQUEST, POST_LOGIN_SUCCESS, POST_LOGIN_FAIL } from '@/actionTypes/index';

export const loginAction = function (payload, callback) {
    console.log('loginAction');
    return {
        type: POST_LOGIN_REQUEST,
        payload,
        callback
    }
}

export const loginSuccessAction = function (payload, callback) {
    console.log('loginSuccessAction');
    return {
        type: POST_LOGIN_SUCCESS,
        payload,
    }
}

export const loginFailAction = function (payload, callback) {
    console.log('loginFailAction');
    return {
        type: POST_LOGIN_FAIL,
        payload,
    }
}