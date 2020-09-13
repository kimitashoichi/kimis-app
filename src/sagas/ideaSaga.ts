import { all, call, fork, put, takeEvery } from 'redux-saga/effects';

import * as ActionTypes from '../constants/actionTypes';
import * as Models from '../models/ideaModel';
import * as API from '../apis/ideaAPI';
import { 
  postIdeaAction,
  draftIdeaAction,
  getIdeabyId,
  chagneGoodCount
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

export function* runDraftIdea(actions: Models.DraftIdeaStart) {
  const data = actions.payload;
  const handler = API.postDraftIdea;
  const { success, error } = yield call(handler, data);
  if(success && !error) {
    yield put(draftIdeaAction.success());
  } else {
    yield put(draftIdeaAction.failure());
  };
}


// TODO: arg is change for idea id.
// Temporary support Under development.
export function* runGetIdeaById() {
   const mockId = 'testGetIdeaById';
   const handler = API.getIdeabyId;
   const {idea, error} = yield call(handler, mockId);
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

export function* watchIdeas() {
  yield takeEvery(ActionTypes.POST_IDEA_START, runPostIdea);
  yield takeEvery(ActionTypes.DRAFT_IDEA_START, runDraftIdea);
  yield takeEvery(ActionTypes.GET_IDEA_START, runGetIdeaById);
  yield takeEvery(ActionTypes.GOOD_COUNT_CHANGE_START, runChangeGoodCount)
}


export default function* rootSaga() {
  yield all([fork(watchIdeas)])
}
