import * as ActionTypes from '../constants/actionTypes';

export interface PostIdea {
  title?: string;
  content: string;
  createdAt: Date;
  updatedAt: Date | null;
  goodCount?: number;
  // TODO: before implements
  // uid: string
  // tags: []
  // favoriteCount: number
};

export interface PostIdeaState {
  isLoading: boolean;
  postIdea: PostIdea;
  postIdeas: PostIdea[];
};

// POST IDEA
export interface PostIdeaStart {
  type: typeof ActionTypes.POST_IDEA_START;
  payload: PostIdea
}

export interface PostIdeaSuccess {
  type: typeof ActionTypes.POST_IDEA_SUCCESS;
}

export interface PostIdeaFailure {
  type: typeof ActionTypes.POST_IDEA_FAILURE;
}

//  DRAFT IDEA
export interface DraftIdeaStart {
  type: typeof ActionTypes.DRAFT_IDEA_START;
  payload: PostIdea
}

export interface DraftIdeaSuccess {
  type: typeof ActionTypes.DRAFT_IDEA_SUCCESS;
}

export interface DraftIdeaFailure {
  type: typeof ActionTypes.DRAFT_IDEA_FAILURE;
}

//  GET IDEA BY ID
export interface GetIdeaStart {
  type: typeof ActionTypes.GET_IDEA_START;
}

export interface GetIdeaSuccess {
  type: typeof ActionTypes.GET_IDEA_SUCCESS;
  payload: PostIdea
}

export interface GetIdeaFailure {
  type: typeof ActionTypes.GET_IDEA_FAILURE;
}

// Good Count TODO: いいね数を投稿に持たせて、いいねしているかどうかの判定をどこで行うか
export interface AddGoodCountStart {
  type: typeof ActionTypes.GOOD_COUNT_CHANGE_START;
  // TODO: Add Payload for confirm ideaId, and good is done?
}

export interface AddGoodCountSuccess {
  type: typeof ActionTypes.GOOD_COUNT_CHANGE_SUCCESS;
}

export interface AddGoodCountFailure {
  type: typeof ActionTypes.GOOD_COUNT_CHANGE_FAILURE;
}

//  GET IDEAS BY LATEST
export interface GetIdeasbyLatestStart {
  type: typeof ActionTypes.GET_ALL_IDEA_LATEST_START;
}

export interface GetIdeasbyLatestSuccess {
  type: typeof ActionTypes.GET_ALL_IDEA_LATEST_SUCCESS;
  payload: PostIdea[]
}

export interface GetIdeasbyLatestFailure {
  type: typeof ActionTypes.GET_ALL_IDEA_LATEST_FAILURE;
}

//  GET IDEAS BY GOOD COUNT
export interface GetIdeasByGoodStart {
  type: typeof ActionTypes.GET_ALL_IDEA_GOOD_START;
}

export interface GetIdeasByGoodSuccess {
  type: typeof ActionTypes.GET_ALL_IDEA_GOOD_SUCCESS;
  payload: PostIdea[]
}

export interface GetIdeasByGoodFailure {
  type: typeof ActionTypes.GET_ALL_IDEA_GOOD_FAILURE;
}

export type PostIdeaAction = 
  | PostIdeaStart
  | PostIdeaSuccess
  | PostIdeaFailure
  | DraftIdeaStart
  | DraftIdeaSuccess
  | DraftIdeaFailure
  | GetIdeaStart
  | GetIdeaSuccess
  | GetIdeaFailure
  | AddGoodCountStart
  | AddGoodCountSuccess
  | AddGoodCountFailure
  | GetIdeasbyLatestStart
  | GetIdeasbyLatestSuccess
  | GetIdeasbyLatestFailure
  | GetIdeasByGoodStart
  | GetIdeasByGoodSuccess
  | GetIdeasByGoodFailure;