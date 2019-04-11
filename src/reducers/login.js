import { POST_LOGIN_REQUEST, POST_LOGIN_SUCCESS, POST_LOGIN_FAIL } from '@/actionTypes/index';

const initState = {
    loginStatus: null
}

function loginReducer(state = initState, action) {
    console.log('loginReducer');

    switch (action.type) {
        case POST_LOGIN_REQUEST:
            return {
                ...state,
            }
        case POST_LOGIN_SUCCESS:
            return {
                ...state,
                ...action.payload
            }
        case POST_LOGIN_FAIL:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

export { loginReducer }