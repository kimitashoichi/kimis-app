import * as ActionTypes from '../constants/actionTypes';
import * as Models from '../models/userModels';

export const getUserInformation = {
  start: (uid: string) => ({
    type: ActionTypes.GET_USER_PROFILE_START as typeof ActionTypes.GET_USER_PROFILE_START,
    payload: uid
  }),

  success: (userInfromation: Models.LoginUser) => ({
    type: ActionTypes.GET_USER_PROFILE_SUCCESS as typeof ActionTypes.GET_USER_PROFILE_SUCCESS,
    payload: userInfromation
  }),

  failure: () => ({
    type: ActionTypes.GET_USER_PROFILE_FAILURE as typeof ActionTypes.GET_USER_PROFILE_FAILURE
  })
};

export const loginUserAction = {
  start: () => ({
    type: ActionTypes.USER_LOGIN_START as typeof ActionTypes.USER_LOGIN_START
  }),

  success: (loginUser: Models.LoginUser) => ({
    type: ActionTypes.USER_LOGIN_SUCCESS as typeof ActionTypes.USER_LOGIN_SUCCESS,
    payload: loginUser
  }),

  failure: () => ({
    type: ActionTypes.USER_LOGIN_FAILURE as typeof ActionTypes.USER_LOGIN_FAILURE
  })
};

export const logoutUserAction = {
  start: () => ({
    type: ActionTypes.USER_LOGOUT_START as typeof ActionTypes.USER_LOGOUT_START
  }),

  success: () => ({
    type: ActionTypes.USER_LOGIN_SUCCESS as typeof ActionTypes.USER_LOGOUT_SUCCESS
  }),

  failure: () => ({
    type: ActionTypes.USER_LOGOUT_FAILURE as typeof ActionTypes.USER_LOGOUT_FAILURE
  })
};

export const alreadyLoginUserAction = {
  start: () => ({
    type: ActionTypes.USER_ALREADY_LOGIN_START as typeof ActionTypes.USER_ALREADY_LOGIN_START
  }),

  success: (loginUser: Models.LoginUser) => ({
    type: ActionTypes.USER_ALREADY_LOGIN_SUCCESS as typeof ActionTypes.USER_ALREADY_LOGIN_SUCCESS,
    payload: loginUser
  }),

  failure: () => ({
    type: ActionTypes.USER_ALREADY_LOGIN_FAILURE as typeof ActionTypes.USER_ALREADY_LOGIN_FAILURE
  })
};

export const editUserProfile = {
  // TODO: add paylod => uid: fireabase auth uid; beacuse, this action user after login.
  start: (editData: Models.LoginUser) => ({
    type: ActionTypes.USER_PROFILE_EDIT_START as typeof ActionTypes.USER_PROFILE_EDIT_START,
    payload: editData
  }),

  success: () => ({
    type: ActionTypes.USER_PROFILE_EDIT_SUCCESS as typeof ActionTypes.USER_PROFILE_EDIT_SUCCESS
  }),

  failure: () => ({
    type: ActionTypes.USER_PROFILE_EDIT_FAILURE as typeof ActionTypes.USER_PROFILE_EDIT_FAILURE
  })
};


