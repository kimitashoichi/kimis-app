import { all, fork, call, put, takeEvery } from 'redux-saga/effects';

import * as Models from '../models/commentModel';
import * as ActionTypes from '../constants/actionTypes';
import * as API from '../apis/commentAPI';
import { 
  createComment,
  getCommentById
 } from '../actions/commentAction';

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

// TODO: get comment by idea id
export function* runGetCommentById() {
  // mock id
  const id = 'C8Al8oz9t3pgqoEx053r'
  const handler = API.getCommentbyId;
  const {comment, error} = yield call(handler, id);
  if(comment && !error) {
    console.log('OK commentSaga');
    yield put(getCommentById.success(comment));
  } else {
    console.log('NG commentSaga');
    yield put(getCommentById.failure());
  }
}


export function* watchComments() {
  yield takeEvery(ActionTypes.CREATE_COMMENT_START, runCretaeComment);
  yield takeEvery(ActionTypes.GET_COMMENT_START, runGetCommentById);
}


export default function* rootSaga() {
  yield all([fork(watchComments)])
}