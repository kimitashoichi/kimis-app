import { Reducer } from 'redux';

import * as ActionTypes from '../constants/actionTypes';
import * as Models from '../models/userModels';


const InitialState: Models.LoginUserState = {
  isLoading: false,
  loginUser: {
    userId: '',
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
    default: {
      return state;
    };
  };
};

export default user;