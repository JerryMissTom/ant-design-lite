
import { ADD_TAB, REMOVEW_TAB, CLEAR_TAB, CHANGE_TAB } from '@/actionTypes/index';

export const addTabAction = function (payload) {
    return {
        type: ADD_TAB,
        payload,
    }
}

export const removeTabAction = function (payload) {
    return {
        type: REMOVEW_TAB,
        payload,
    }
}

export const clearTabAction = function () {
    return {
        type: CLEAR_TAB,
    }
}

export const changeTabAction = function (payload) {
    return {
        type: CHANGE_TAB,
        payload
    }
}