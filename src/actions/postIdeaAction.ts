import * as ActionTypes from '../constants/actionTypes';
import * as Models from '../models/ideaModel';

export const postIdeaAction = {
  start: (payload: Models.PostIdea) => ({
    type: ActionTypes.POST_IDEA_START as typeof ActionTypes.POST_IDEA_START,
    payload: payload
  }),

  success: () => ({
    type: ActionTypes.POST_IDEA_SUCCESS as typeof ActionTypes.POST_IDEA_SUCCESS
  }),

  failure: () => ({
    type: ActionTypes.POST_IDEA_FAILURE as typeof ActionTypes.POST_IDEA_FAILURE
  })
};

export const draftIdeaAction =  {
  start: (payload: Models.PostIdea) => ({
    type: ActionTypes.DRAFT_IDEA_START as typeof ActionTypes.DRAFT_IDEA_START,
    payload: payload
  }),

  success: () => ({
    type: ActionTypes.DRAFT_IDEA_SUCCESS as typeof ActionTypes.DRAFT_IDEA_SUCCESS
  }),

  failure: () => ({
    type: ActionTypes.DRAFT_IDEA_FAILURE as typeof ActionTypes.DRAFT_IDEA_FAILURE
  })
};