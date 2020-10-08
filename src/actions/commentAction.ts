import * as Models from '../models/commentModel';
import * as ActionTypes from '../constants/actionTypes';

export const createComment = {
  start: (payload: Models.Comment) => ({
    type: ActionTypes.CREATE_COMMENT_START as typeof ActionTypes.CREATE_COMMENT_START,
    payload: payload
  }),
  success: () => ({
    type: ActionTypes.CREATE_COMMENT_SUCCESS as typeof ActionTypes.CREATE_COMMENT_SUCCESS
  }),
  failure: () => ({
    type: ActionTypes.CREATE_COMMENT_FAILURE as typeof ActionTypes.CREATE_COMMENT_FAILURE
  })
};

export const getCommentById = {
  start: (ideaId: string) => ({
    type: ActionTypes.GET_COMMENT_START as typeof ActionTypes.GET_COMMENT_START,
    payload: ideaId
  }),
  success: (payload: Models.Comment[]) => ({
    type: ActionTypes.GET_COMMENT_SUCCESS as typeof ActionTypes.GET_COMMENT_SUCCESS,
    payload: payload
  }),
  failure: () => ({
    type: ActionTypes.GET_COMMENT_FAILURE as typeof ActionTypes.GET_COMMENT_FAILURE
  })
};

export const deleteComment = {
  start: (commentId: string) => ({
    type: ActionTypes.DELETE_COMMENT_START as typeof ActionTypes.DELETE_COMMENT_START,
    payload: commentId
  }),
  success: () => ({
    type: ActionTypes.DELETE_COMMENT_SUCCESS as typeof ActionTypes.DELETE_COMMENT_SUCCESS
  }),
  failure: () => ({
    type: ActionTypes.DELETE_COMMENT_FAILURE as typeof ActionTypes.DELETE_COMMENT_FAILURE
  })
};

