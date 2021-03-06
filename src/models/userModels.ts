import * as ActionTypes from '../constants/actionTypes';

export interface LoginUser {
  userId: string;
  email?: string;
  displayName?: string;
  phoneNumber?: string;
  userName?: string;
  introduce?: string;
};

export interface LoginUserState {
  isLoading: boolean;
  loginUser: LoginUser;
};

// get login user information
export interface GetLoginUserStart {
  type: typeof ActionTypes.GET_USER_PROFILE_START;
  payload: string;
};

export interface GetLoginUserSuccess {
  type: typeof ActionTypes.GET_USER_PROFILE_SUCCESS
  payload: LoginUser
};

export interface GetLoginUserFailure {
  type: typeof ActionTypes.GET_USER_PROFILE_FAILURE
};

// user login action
export interface LoginStart {
  type: typeof ActionTypes.USER_LOGIN_START
  payload: string
};

export interface LoginSuccess {
  type: typeof ActionTypes.USER_LOGIN_SUCCESS
  payload: LoginUser
};

export interface LoginFailure {
  type: typeof ActionTypes.USER_LOGIN_FAILURE
};

// user already login action
export interface AlreadyLoginStart {
  type: typeof ActionTypes.USER_ALREADY_LOGIN_START
};

export interface AlreadyLoginSuccess {
  type: typeof ActionTypes.USER_ALREADY_LOGIN_SUCCESS
  payload: LoginUser
};

export interface AlreadyLoginFailure {
  type: typeof ActionTypes.USER_ALREADY_LOGIN_FAILURE
};

// user logout action
export interface LogoutStart {
  type: typeof ActionTypes.USER_LOGOUT_START
};

export interface LogoutSuccess {
  type: typeof ActionTypes.USER_LOGOUT_SUCCESS
};

export interface LogoutFailure {
  type: typeof ActionTypes.USER_LOGOUT_FAILURE
};

// user edit profile
export interface EditProfileStart {
  type: typeof ActionTypes.USER_PROFILE_EDIT_START
  payload: LoginUser
};

export interface EditProfileSuccess {
  type: typeof ActionTypes.USER_PROFILE_EDIT_SUCCESS
};

export interface EditProfileSFailure {
  type: typeof ActionTypes.USER_PROFILE_EDIT_FAILURE
};

export type getUserAction = 
  | GetLoginUserStart
  | GetLoginUserSuccess
  | GetLoginUserFailure
  | LoginStart
  | LoginSuccess
  | LoginFailure
  | LogoutStart
  | LogoutSuccess
  | LogoutFailure
  | AlreadyLoginStart
  | AlreadyLoginSuccess
  | AlreadyLoginFailure
  | EditProfileStart
  | EditProfileSuccess
  | EditProfileSFailure;

