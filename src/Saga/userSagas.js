import {takeEvery} from 'redux-saga/effects'
import { User } from '../Redux/user/types';

function* getUser(action) {
  try {
    yield console.log(action)
  } catch (err) {
    console.error(err.message);
  }
}

export default function* userSagas() {
  yield takeEvery(User.getUser, getUser);
}
