// TODO: when login function implements, rename file for loginSaga.ts

import { all, call, fork, put, takeEvery, takeLatest } from 'redux-saga/effects';

import * as ActionTypes from '../constants/actionTypes';
import * as API from '../apis/userAPI'; // TODO: implemets get user infromation API
import * as Models from '../models/userModels';
import {
  getUserInformation,
  loginUserAction,
  logoutUserAction,
  alreadyLoginUserAction,
  editUserProfile
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

export function* runAlreadyLogin() {
  const handler = API.loginCheck;
  const { loginUser, error } = yield call(handler);
  if(loginUser && !error) {
    console.log('ALREADY LOGIN SAGA OK');
    yield put(alreadyLoginUserAction.success(loginUser));
  } else {
    console.log('ALREADY LOGIN SAGA NG');
    yield put(alreadyLoginUserAction.failure());
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

export function* runEditProfile(action: Models.editProfileStart) {
  const data = action.payload;
  console.log('runEditProfile', data);
  const handler = API.editProfile;
  const {success, error} = yield call(handler, data);
  if(success && !error) {
    console.log('OK runEditProfile Saga');
    yield put(editUserProfile.success());
  } else {
    console.log('NG runEditProfile Saga');
    yield put(editUserProfile.failure());
  }
}

export function* watchUsers() {
  yield takeEvery(ActionTypes.GET_USER_PROFILE_START ,runGetUserInfromation);
  yield takeEvery(ActionTypes.USER_LOGIN_START, runLoginUser);
  yield takeEvery(ActionTypes.USER_LOGOUT_START, runLogout);
  yield takeLatest(ActionTypes.USER_ALREADY_LOGIN_START, runAlreadyLogin);
  yield takeEvery(ActionTypes.USER_PROFILE_EDIT_START, runEditProfile)
}

export default function* rootSaga() {
  yield all([fork(watchUsers)])
}