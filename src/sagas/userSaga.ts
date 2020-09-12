// TODO: when login function implements, rename file for loginSaga.ts

import { all, call, fork, put, takeEvery } from 'redux-saga/effects';

import * as ActionTypes from '../constants/actionTypes';
import * as Models from '../models/userModels';
import * as API from '../apis/userInfromationAPI'; // TODO: implemets get user infromation API
import {
  getUserInformation
} from '../actions/userAction';

export function* runGetUserInfromation() {
  // TODO: This function after Login, baceuse uid is trigger, get user information;
  // this function must be change
  const data = 'testUser' // mock uid
  const handler = API.getUserInfromation;
  const { userInfromation, error } = yield call(handler, data);
  console.log(userInfromation);
  if(userInfromation && !error) {
    console.log('GET USERINFROMATION OK')
    yield put(getUserInformation.success(userInfromation))
  } else {
    console.log('GET USERINFORMATION FAILUER')
    yield put(getUserInformation.failure())
  };
};



export function* watchUsers() {
  yield takeEvery(ActionTypes.GET_USER_PROFILE_START ,runGetUserInfromation)
}

export default function* rootSaga() {
  yield all([fork(watchUsers)])
}