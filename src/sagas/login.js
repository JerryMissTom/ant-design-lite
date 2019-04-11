import { put, fork, take, call, takeEvery } from 'redux-saga/effects';
import { POST_LOGIN_REQUEST, POST_LOGIN_SUCCESS, POST_LOGIN_FAIL } from '@/actionTypes/index';
import { loginAction } from '@/actions/login';
import { login } from '@/services/login';

function* loginWorker(payload, callback) {
    console.log('loginWorker----saga');
    const response = yield call(login, payload);
    console.log(response);
    if (response && response.errorCode === 0) {
        callback(response.errorCode);
        yield put({ type: POST_LOGIN_SUCCESS, payload: { loginStatus: true } })
    } else {
        yield put({ type: POST_LOGIN_FAIL, payload: { loginStatus: false } })
    }
}

function* watchLogin() {
    // const { payload, callback } = yield take(POST_LOGIN_REQUEST)
    // yield fork(loginWorker, payload, callback)
     yield takeEvery(POST_LOGIN_REQUEST, loginWorker);
}

export {
    watchLogin
}
