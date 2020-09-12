import * as ActionTypes from '../constants/actionTypes';
import * as Models from '../models/ideaModel';
import { type } from 'os';

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

export const getIdeabyId = {
  // MUST TODO: start action need idea id, beacuse for show pages one idea specific.
  // dummy start action is not id now.
  start: () => ({
    type: ActionTypes.GET_IDEA_START as typeof ActionTypes.GET_IDEA_START
  }),

  // TODO: rename 'PostIdea', beacuse anywhere use 'PostIdea' interface
  success: (payload: Models.PostIdea) => ({
    type: ActionTypes.GET_IDEA_SUCCESS as typeof ActionTypes.GET_IDEA_SUCCESS,
    payload: payload
  }),

  failure: () => ({
    type: ActionTypes.GET_IDEA_FAILURE as typeof ActionTypes.GET_IDEA_FAILURE
  })
}