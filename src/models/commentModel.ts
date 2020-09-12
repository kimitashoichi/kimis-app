import * as ActionTypes from '../constants/actionTypes';

export interface Comment {
  content: string;
  // when under implements, allow null. 
  // TODO: not allow null, instead loged in userName.
  userName: string | null;
  createdAt: Date;
  // TODO: add prop, idea id, beacuse comments is Linking idea.
}

export interface CommentState {
  isLoading: boolean;
  comment: Comment;
  comments: Comment[];
}

export interface CreateCommentStart {
  type: typeof ActionTypes.CREATE_COMMENT_START,
  payload: Comment
}

export interface CreateCommentSuccess {
  type: typeof ActionTypes.CREATE_COMMENT_SUCCESS,
}

export interface CreateCommentFailure {
  type: typeof ActionTypes.CREATE_COMMENT_FAILURE,
}

export type CommentAction = 
  | CreateCommentStart
  | CreateCommentSuccess
  | CreateCommentFailure;