import { all, call, fork, put, takeEvery } from 'redux-saga/effects';

import * as ActionTypes from '../constants/actionTypes';
import * as Models from '../models/ideaModel';
import * as API from '../apis/ideaAPI';
import { 
  postIdeaAction,
  getIdeabyId,
  chagneGoodCount,
  getIdeasByLatest,
  getIdeasByGoodCount,
  getIdeasUserPosted,
  getIdeasUserDrafted,
  updateIdeaAction,
  deleteIdeaAction
} from '../actions/ideaAction';

export function* runPostIdea(actions: Models.PostIdeaStart) {
  const data = actions.payload;
  const handler = API.postIdea;
  const { success, error } = yield call(handler, data);
  if(success && !error) {
    console.log('POST IDEA: OK');
    yield put(postIdeaAction.success());
  } else {
    console.log('POST IDEA: FAILUER', error);
    yield put(postIdeaAction.failure());
  }
}

// TODO: arg is change for idea id.
// Temporary support Under development.
export function* runGetIdeaById(action: Models.GetIdeaStart) {
   const ideaId = action.payload;
   const handler = API.getIdeabyId;
   const {idea, error} = yield call(handler, ideaId);
   if(idea && !error) {
     console.log('runGetIdeaById OK');
     yield put(getIdeabyId.success(idea))
   } else {
    console.log('runGetIdeaById NG');
     yield put(getIdeabyId.failure());
   }
}

// good coutn update
// TODO: 投稿に関連づけることと、すでにいいねしていた場合にもう一度いいねを押すといいねすうが減少するようにする
export function* runChangeGoodCount() {
  const mockId = 'testGetIdeaById';
  const handler = API.changeGoodCount;
  const { success, error } = yield call(handler, mockId);
  if(success && !error) {
    console.log('OK changeGoodCount Saga');
    yield put(chagneGoodCount.success());
  } else {
    console.log('NG changeGoodCount Saga');
    yield put(chagneGoodCount.failure());
  }
}

export function* runGetIdeasByLatest() {
  const handler = API.getIdeasByLatest;
  const {ideas, error} = yield call(handler);
  if(ideas && !error) {
    console.log('OK GetIdeas Saga');
    yield put(getIdeasByLatest.success(ideas));
  } else {
    console.log('NG GetIdeas Saga');
    yield put(getIdeasByLatest.failure());
  }
}

export function* runGetIdeasByGood() {
  const handler = API.getIdeasByGood;
  const {ideas, error} = yield call(handler);
  if(ideas && !error) {
    console.log('OK GetIdeas Saga');
    yield put(getIdeasByGoodCount.success(ideas));
  } else {
    console.log('NG GetIdeas Saga');
    yield put(getIdeasByGoodCount.failure());
  }
}

export function* runGetPostedIdea(actions: Models.GetAllPostedIdeasForUserStart) {
  const data = actions.payload;
  const handler = API.getUserPostedIdeas;
  const {postedIdeas, error} = yield call(handler, data);
  if(postedIdeas && !error) {
    console.log('OK runGetPostedIdea Saga');
    yield put(getIdeasUserPosted.success(postedIdeas));
  } else {
    console.log('NG unGetPostedIdea Saga');
    yield put(getIdeasUserPosted.failure());
  }
}

export function* runGetDraftedIdea(actions: Models.GetAllPostedIdeasForUserStart) {
  const data = actions.payload;
  const handler = API.getUserDraftedIdeas;
  const {draftedIdeas, error} = yield call(handler, data);
  if(draftedIdeas && !error) {
    console.log('OK runGetDraftedIdea Saga');
    yield put(getIdeasUserDrafted.success(draftedIdeas));
  } else {
    console.log('NG runGetDraftedIdea Saga');
    yield put(getIdeasUserDrafted.failure());
  }
}

export function* runUpdateIdea(action: Models.UpdateIdeaStart) {
  const data = action.payload;
  const handler = API.updateIdea;
  const {success, error} = yield call(handler, data);
  if(success && !error){
    console.log('OK runUpdateIdea Saga');
    yield put(updateIdeaAction.success())
  } else {
    console.log('NG runUpdateIdea Saga');
    yield put(updateIdeaAction.failure())
  }
}

export function* runDeleteIdea(action: Models.DeleteIdeaStart) {
  const data = action.payload;
  const handler = API.deleteIdea;
  const {success, error} = yield call(handler, data);
  if(success && !error){
    console.log('OK runDeleteIdea Saga');
    yield put(deleteIdeaAction.success())
  } else {
    console.log('NG runDeleteIdea Saga');
    yield put(deleteIdeaAction.failure())
  }
}

export function* watchIdeas() {
  yield takeEvery(ActionTypes.POST_IDEA_START, runPostIdea);
  yield takeEvery(ActionTypes.GET_IDEA_START, runGetIdeaById);
  yield takeEvery(ActionTypes.GOOD_COUNT_CHANGE_START, runChangeGoodCount)
  yield takeEvery(ActionTypes.GET_ALL_IDEA_LATEST_START, runGetIdeasByLatest);
  yield takeEvery(ActionTypes.GET_ALL_IDEA_GOOD_START, runGetIdeasByGood);
  yield takeEvery(ActionTypes.GET_USER_POST_IDEA_START, runGetPostedIdea);
  yield takeEvery(ActionTypes.GET_USER_DRAFT_IDEA_START, runGetDraftedIdea);
  yield takeEvery(ActionTypes.UPDATE_IDEA_START, runUpdateIdea);
  yield takeEvery(ActionTypes.DELETE_IDEA_START, runDeleteIdea);
}


export default function* rootSaga() {
  yield all([fork(watchIdeas)])
}
