import { fork } from 'redux-saga/effects';

import ideaSaga from './ideaSaga';

export default function* rootSaga() {
  yield fork(ideaSaga);
};