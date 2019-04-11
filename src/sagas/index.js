import { fork, all } from 'redux-saga/effects';
import { watchLogin } from './login';

export default function* rootSaga() {
    yield all([
        fork(watchLogin),
    ])
}