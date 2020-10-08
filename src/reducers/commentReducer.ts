import { Reducer } from 'redux';

import * as Models from '../models/commentModel';
import * as ActionTypes from '../constants/actionTypes';

const initialState = {
  isLoading: false,
  comment: {
    userId: '',
    ideaId: '',
    content: '',
    userName: 'test taro',
    createdAt: new Date()
  },
  comments: [] ,
  commentbyId: []
}

const comment: Reducer<
  Models.CommentState,
  Models.CommentAction
  > = (
    state: Models.CommentState = initialState,
    action: Models.CommentAction
  ): Models.CommentState => {
    switch(action.type) {
      case ActionTypes.CREATE_COMMENT_START:
        return {
          ...state,
          isLoading: true
        };
      case ActionTypes.CREATE_COMMENT_SUCCESS:
        return {
          ...state,
          isLoading: false
        };
      case ActionTypes.CREATE_COMMENT_FAILURE:
        return {
          ...state,
          isLoading: false
        };
      case ActionTypes.CREATE_COMMENT_SUCCESS:
        return {
          ...state,
          isLoading: true
        }
      case ActionTypes.GET_COMMENT_SUCCESS:
        return {
          ...state,
          isLoading: false,
          commentbyId: action.payload
        }
      case ActionTypes.GET_COMMENT_FAILURE:
        return {
          ...state,
          isLoading: false
        }
      default: {
        return state
      };
    };
  };

  export default comment;