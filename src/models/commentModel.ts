import * as ActionTypes from '../constants/actionTypes';

export interface Comment {
  userId: string;
  ideaId: string;
  content: string;
  userName: string;
  createdAt: Date;
}

export interface GetCommentState {
  commentId: string;
  userId: string;
  ideaId: string;
  content: string;
  userName: string;
  createdAt: Date;
}

export interface CommentState {
  isLoading: boolean;
  commentbyId: GetCommentState[];
  comment: Comment;
  comments: Comment[];
}

// Create comment
export interface CreateCommentStart {
  type: typeof ActionTypes.CREATE_COMMENT_START;
  payload: Comment;
}

export interface CreateCommentSuccess {
  type: typeof ActionTypes.CREATE_COMMENT_SUCCESS;
}

export interface CreateCommentFailure {
  type: typeof ActionTypes.CREATE_COMMENT_FAILURE;
}

// get comment 
export interface GetCommentStart {
  type: typeof ActionTypes.GET_COMMENT_START;
  payload: string;
}

export interface GetCommentSuccess {
  type: typeof ActionTypes.GET_COMMENT_SUCCESS;
  payload: GetCommentState[];
}

export interface GetCommentFailure {
  type: typeof ActionTypes.GET_COMMENT_FAILURE;
}

export type CommentAction = 
  | CreateCommentStart
  | CreateCommentSuccess
  | CreateCommentFailure
  | GetCommentStart
  | GetCommentSuccess
  | GetCommentFailure;