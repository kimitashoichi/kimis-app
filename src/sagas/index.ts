import { fork } from 'redux-saga/effects';

import ideaSaga from './ideaSaga';
import userSaga from './userSaga';
import commetSaga from './commentSaga';

export default function* rootSaga() {
  yield fork(ideaSaga);
  yield fork(userSaga);
  yield fork(commetSaga);
};