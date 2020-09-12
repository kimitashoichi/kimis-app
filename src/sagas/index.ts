import { fork } from 'redux-saga/effects';

import ideaSaga from './ideaSaga';
import userSaga from './userSaga';

export default function* rootSaga() {
  yield fork(ideaSaga);
  yield fork(userSaga);
};