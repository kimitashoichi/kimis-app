import { Reducer } from 'redux';

import * as ActionTypes from '../constants/actionTypes';
import * as Models from '../models/userModels';


const InitialState: Models.LoginUserState = {
  isLoading: false,
  loginUser: {
    userId: '',
    email: '',
    displayName: '',
    phoneNumber: '',
    userName: '',
    introduce: ''
  }
};

const user: Reducer<
  Models.LoginUserState, 
  Models.getUserAction
> = (
  state: Models.LoginUserState = InitialState,
  action: Models.getUserAction
): Models.LoginUserState => {
  switch(action.type) {
    case ActionTypes.GET_USER_PROFILE_START:
      return {
        ...state,
        isLoading: true
      };
    case ActionTypes.GET_USER_PROFILE_SUCCESS:
      return {
        ...state,
        loginUser: action.payload,
        isLoading: false
      };
    case ActionTypes.GET_USER_PROFILE_FAILURE:
      return {
        ...state,
        isLoading: false
      };
    case ActionTypes.USER_LOGIN_START:
      return {
        ...state,
        isLoading: true
      }
    case ActionTypes.USER_LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        loginUser : action.payload
      }
    case ActionTypes.USER_LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false
      }
    case ActionTypes.USER_LOGOUT_START:
      return {
        ...state,
        isLoading: true
      }
    case ActionTypes.USER_LOGOUT_SUCCESS:
        return {
          ...state,
          loginUser : InitialState.loginUser,
          isLoading: false
        }
    case ActionTypes.USER_LOGOUT_FAILURE:
        return {
          ...state,
          isLoading: false
        }
    case ActionTypes.USER_ALREADY_LOGIN_START:
      return {
        ...state,
        isLoading: true
      }
    case ActionTypes.USER_ALREADY_LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        loginUser: action.payload
      }
    case ActionTypes.USER_ALREADY_LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false
      }
    case ActionTypes.USER_PROFILE_EDIT_START:
        return {
          ...state,
          isLoading: true,
          loginUser: action.payload
        }
    case ActionTypes.USER_PROFILE_EDIT_SUCCESS:
      return {
        ...state,
        isLoading: false,
      }
    case ActionTypes.USER_PROFILE_EDIT_FAILURE:
      return {
        ...state,
        isLoading: false
      }
    default: {
      return state;
    };
  };
};

export default user;