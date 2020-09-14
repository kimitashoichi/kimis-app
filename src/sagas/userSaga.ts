// TODO: when login function implements, rename file for loginSaga.ts

import { all, call, fork, put, takeEvery } from 'redux-saga/effects';

import * as ActionTypes from '../constants/actionTypes';
import * as Models from '../models/userModels';
import * as API from '../apis/userAPI'; // TODO: implemets get user infromation API
import {
  getUserInformation,
  loginUserAction,
  logoutUserAction
} from '../actions/userAction';

export function* runGetUserInfromation() {
  // TODO: This function after Login, baceuse uid is trigger, get user information;
  // this function must be change
  const data = 'testUser' // mock uid
  const handler = API.getUserInfromation;
  const { userInfromation, error } = yield call(handler, data);
  if(userInfromation && !error) {
    console.log('GET USERINFROMATION OK')
    yield put(getUserInformation.success(userInfromation))
  } else {
    console.log('GET USERINFORMATION FAILUER')
    yield put(getUserInformation.failure())
  };
};

export function* runLoginUser() {
  const handler = API.userLogin;
  const { loginUser, error } = yield call(handler);
  if(loginUser && !error) {
    console.log('LOGIN SAGA OK');
    yield put(loginUserAction.success(loginUser));
  } else {
    console.log('LOGIN SAGA NG');
    yield put(loginUserAction.failure());
  }
}

export function* runLogout() {
  const handler = API.userLogout;
  const { success, error } = yield call(handler);
  if(success && !error) {
    console.log('LOGOUT SAGA OK');
    yield put(logoutUserAction.success());
  } else {
    console.log('LOGOUT SAGA NG');
    yield put(logoutUserAction.failure());
  }
}

export function* watchUsers() {
  yield takeEvery(ActionTypes.GET_USER_PROFILE_START ,runGetUserInfromation)
  yield takeEvery(ActionTypes.USER_LOGIN_START, runLoginUser)
  yield takeEvery(ActionTypes.USER_LOGOUT_START, runLogout)
}

export default function* rootSaga() {
  yield all([fork(watchUsers)])
}