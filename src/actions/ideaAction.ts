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

export const chagneGoodCount =  {
  start: () => ({
    type: ActionTypes.GOOD_COUNT_CHANGE_START as typeof ActionTypes.GOOD_COUNT_CHANGE_START,
  }),
  success: () => ({
    type: ActionTypes.GOOD_COUNT_CHANGE_SUCCESS as typeof ActionTypes.GOOD_COUNT_CHANGE_SUCCESS
  }),
  failure: () => ({
    type: ActionTypes.GOOD_COUNT_CHANGE_FAILURE as typeof ActionTypes.GOOD_COUNT_CHANGE_FAILURE
  })
};

//  全ての記事を最新順に取得
export const getIdeasByLatest = {
  start: () => ({
    type: ActionTypes.GET_ALL_IDEA_LATEST_START as typeof ActionTypes.GET_ALL_IDEA_LATEST_START
  }),
  success: (payload: Models.PostIdea[]) => ({
    type: ActionTypes.GET_ALL_IDEA_LATEST_SUCCESS as typeof ActionTypes.GET_ALL_IDEA_LATEST_SUCCESS,
    payload: payload
  }),
  failure: () => ({
    type: ActionTypes.GET_ALL_IDEA_LATEST_FAILURE as typeof ActionTypes.GET_ALL_IDEA_LATEST_FAILURE
  })
}

//  全ての記事をいいね順で取得
export const getIdeasByGoodCount = {
  start: () => ({
    type: ActionTypes.GET_ALL_IDEA_GOOD_START as typeof ActionTypes.GET_ALL_IDEA_GOOD_START
  }),
  success: (payload: Models.PostIdea[]) => ({
    type: ActionTypes.GET_ALL_IDEA_GOOD_SUCCESS as typeof ActionTypes.GET_ALL_IDEA_LATEST_SUCCESS,
    payload: payload
  }),
  failure: () => ({
    type: ActionTypes.GET_ALL_IDEA_GOOD_FAILURE as typeof ActionTypes.GET_ALL_IDEA_GOOD_FAILURE
  })
}

//  ユーザーマイページに表示する投稿データ一覧取得
export const getIdeasUserPosted = {
  start: (uid: string) => ({
    type: ActionTypes.GET_USER_POST_IDEA_START as typeof ActionTypes.GET_USER_POST_IDEA_START,
    payload: uid
  }),
  success: (payload: Models.PostIdea[]) => ({
    type: ActionTypes.GET_USER_POST_IDEA_SUCCESS as typeof ActionTypes.GET_USER_POST_IDEA_SUCCESS,
    payload: payload
  }),
  failure: () => ({
    type: ActionTypes.GET_USER_POST_IDEA_FAILURE as typeof ActionTypes.GET_USER_POST_IDEA_FAILURE
  })
}

//  ユーザーマイページに表示する下書きデータ一覧取得
export const getIdeasUserDrafted = {
  start: (uid: string) => ({
    type: ActionTypes.GET_USER_DRAFT_IDEA_START as typeof ActionTypes.GET_USER_DRAFT_IDEA_START,
    payload: uid
  }),
  success: (payload: Models.PostIdea[]) => ({
    type: ActionTypes.GET_USER_DRAFT_IDEA_SUCCESS as typeof ActionTypes.GET_USER_DRAFT_IDEA_SUCCESS,
    payload: payload
  }),
  failure: () => ({
    type: ActionTypes.GET_USER_DRAFT_IDEA_FAILURE as typeof ActionTypes.GET_USER_DRAFT_IDEA_FAILURE
  })
}