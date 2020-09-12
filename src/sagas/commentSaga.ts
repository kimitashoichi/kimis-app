import { all, fork, call, put, takeEvery } from 'redux-saga/effects';

import * as Models from '../models/commentModel';
import * as ActionTypes from '../constants/actionTypes';
import * as API from '../apis/commentAPI';
import { createComment } from '../actions/commentAction';

export function* runCretaeComment(action: Models.CreateCommentStart) {
  const data = action.payload;
  const handler = API.createComment;
  const {success, error} = yield call(handler, data);
  if(success && !error) {
    console.log('OK CommetSaga');
    yield put(createComment.success());
  } else {
    console.log('NG CommentSaga');
    yield put(createComment.failure());
  }
}


export function* watchComments() {
  yield takeEvery(ActionTypes.CREATE_COMMENT_START, runCretaeComment)
}


export default function* rootSaga() {
  yield all([fork(watchComments)])
}