import * as ActionTypes from '../constants/actionTypes';

export interface LoginUser {
  userId: string;
  userName: string;
  introduce: string;
  // add any properties
};

export interface LoginUserState {
  isLoading: boolean;
  loginUser: LoginUser;
};

// get login user information
export interface GetLoginUserStart {
  type: typeof ActionTypes.GET_USER_PROFILE_START
};

export interface GetLoginUserSuccess {
  type: typeof ActionTypes.GET_USER_PROFILE_SUCCESS
  payload: LoginUser
};

export interface GetLoginUserFailure {
  type: typeof ActionTypes.GET_USER_PROFILE_FAILURE
};

export type getUserAction = 
  | GetLoginUserStart
  | GetLoginUserSuccess
  | GetLoginUserFailure;

