import { Reducer } from 'redux';

import * as ActionTypes from '../constants/actionTypes';
import * as Models from '../models/ideaModel';

const initialState: Models.PostIdeaState = {
  isLoading: false,
  postIdea: {
    title: '',
    content: '',
    goodCount: 0,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  postIdeas: []
}

const idea: Reducer<Models.PostIdeaState, Models.PostIdeaAction> = (
  state: Models.PostIdeaState = initialState,
  action: Models.PostIdeaAction
): Models.PostIdeaState => {
  switch(action.type) {
    case ActionTypes.POST_IDEA_START:
      return {
        ...state,
        isLoading: true
      }
    case ActionTypes.POST_IDEA_SUCCESS:
      return {
        ...state,
        isLoading: false
      }
    case ActionTypes.POST_IDEA_FAILURE:
      return {
        ...state,
        isLoading: false
      }
    case ActionTypes.DRAFT_IDEA_START:
      return {
        ...state,
        isLoading: true
      }
    case ActionTypes.DRAFT_IDEA_SUCCESS:
      return {
        ...state,
        isLoading: false
      }
    case ActionTypes.DRAFT_IDEA_FAILURE:
      return {
        ...state,
        isLoading: false
      }
    case ActionTypes.GET_IDEA_START:
      return {
        ...state,
        isLoading: true
      }
    case ActionTypes.GET_IDEA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        postIdea: action.payload
      }
    case ActionTypes.GET_IDEA_FAILURE:
      return {
        ...state,
        isLoading: false
      }
    case ActionTypes.GOOD_COUNT_CHANGE_START:
      return {
        ...state,
        isLoading: true
      }
    case ActionTypes.GOOD_COUNT_CHANGE_SUCCESS:
      return {
        ...state,
        isLoading: false
      }
    case ActionTypes.GOOD_COUNT_CHANGE_FAILURE:
      return {
        ...state,
        isLoading: false
      }
    case ActionTypes.GET_ALL_IDEA_LATEST_START:
      return {
        ...state,
        isLoading: true,
      }
    case ActionTypes.GET_ALL_IDEA_LATEST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        postIdeas: action.payload
      }
    case ActionTypes.GET_ALL_IDEA_LATEST_FAILURE:
      return {
        ...state,
        isLoading: false,
      }
    case ActionTypes.GET_ALL_IDEA_GOOD_START:
      return {
        ...state,
        isLoading: true,
      }
    case ActionTypes.GET_ALL_IDEA_GOOD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        postIdeas: action.payload
      }
    case ActionTypes.GET_ALL_IDEA_GOOD_FAILURE:
      return {
        ...state,
        isLoading: false,
      }
    case ActionTypes.GET_USER_POST_IDEA_START:
      return {
        ...state,
        isLoading: true
      }
    case ActionTypes.GET_USER_POST_IDEA_SUCCESS:
      return {
        ...state,
        postIdeas: action.payload,
        isLoading: false
      }
    case ActionTypes.GET_USER_POST_IDEA_FAILURE:
      return {
        ...state,
        isLoading: false
      }
    case ActionTypes.GET_USER_DRAFT_IDEA_START:
      return {
        ...state,
        isLoading: true
      }
    case ActionTypes.GET_USER_DRAFT_IDEA_SUCCESS:
      return {
        ...state,
        postIdeas: action.payload,
        isLoading: false
      }
    case ActionTypes.GET_USER_DRAFT_IDEA_FAILURE:
      return {
        ...state,
        isLoading: false
      }
    default:{
      return state;
    }
  }
}

export default idea;