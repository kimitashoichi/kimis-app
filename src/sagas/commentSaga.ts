import { all, fork, call, put, takeEvery } from 'redux-saga/effects';

import * as Models from '../models/commentModel';
import * as ActionTypes from '../constants/actionTypes';
import * as API from '../apis/commentAPI';
import { 
  createComment,
  getCommentById,
  deleteComment
 } from '../actions/commentAction';

export function* runCretaeComment(action: Models.CreateCommentStart) {
  const data = action.payload;
  const handler = API.createComment;
  const {success, error} = yield call(handler, data);
  if(success && !error) {
    console.log('OK CommetSaga create');
    yield put(createComment.success());
  } else {
    console.log('NG CommentSaga create');
    yield put(createComment.failure());
  }
}

export function* runGetCommentById(action: Models.GetCommentStart) {
  const commentId = action.payload;
  const handler = API.getAllComment;
  const {comments, error} = yield call(handler, commentId);
  if(comments && !error) {
    console.log('OK commentSaga get');
    yield put(getCommentById.success(comments));
  } else {
    console.log('NG commentSaga get');
    yield put(getCommentById.failure());
  }
}

export function* runDeleteCommentSaga(action: Models.DeleteCommentStart) {
  const commentId = action.payload;
  const handler = API.deleteComment;
  const { success, error } = yield call(handler, commentId);
  if(success && !error){
    console.log('OK runDeleteCommentSaga');
    yield put(deleteComment.success())
  } else {
    console.log('NG runDeleteCommentSaga');
    yield put(deleteComment.failure())
  }
}


export function* watchComments() {
  yield takeEvery(ActionTypes.CREATE_COMMENT_START, runCretaeComment);
  yield takeEvery(ActionTypes.GET_COMMENT_START, runGetCommentById);
  yield takeEvery(ActionTypes.DELETE_COMMENT_START, runDeleteCommentSaga);
}


export default function* rootSaga() {
  yield all([fork(watchComments)])
}