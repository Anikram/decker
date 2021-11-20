import { fork } from 'redux-saga/effects';
import userSagas from './userSagas';

export default function* rootSaga() {
  yield fork(userSagas);
}
