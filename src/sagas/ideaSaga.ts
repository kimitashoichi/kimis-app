import { all, call, fork, put, takeLatest } from 'redux-saga/effects';

import * as ActionTypes from '../constants/actionTypes';
import * as Models from '../models/ideaModel'
import * as API from '../apis/ideaAPI'
import { postIdeaAction } from '../actions/postIdeaAction';

export function* runPostIdea(actions: Models.PostIdeaStart) {
  const data = actions.payload;
  const handler = API.postIdea;
  const { success, error } = yield call(handler, data);
  if( success && !error ) {
    console.log('POST IDEA: OK');
    yield put(postIdeaAction.success());
  } else {
    console.log('POST IDEA: FAILUER', error);
    yield put(postIdeaAction.failure());
  }
}

export function* watchIdeas() {
  yield takeLatest(ActionTypes.POST_IDEA_START, runPostIdea)
}


export default function* rootSaga() {
  yield all([fork(watchIdeas)])
}
