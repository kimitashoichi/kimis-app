import * as ActionTypes from '../constants/actionTypes';

// オプショナルなプロパティはできるだけ無くしたい
export interface PostIdea {
  ideaId?: string;
  uid?: string;
  title?: string;
  authorName?: string;
  content: string;
  createdAt: Date;
  postFlag: boolean;
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
  postIdeasbyLatest: PostIdea[];
  userDraftedIdeas: PostIdea[];
  userPostedIdeas: PostIdea[];
  ideasByGoodCount: PostIdea[];
};

export interface UserPostedIdeaState {
  isLoading: boolean;
  postIdea: PostIdea;
  postIdeas: PostIdea[];
};

export interface UserDraftedPostIdeaState {
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

// UPDATE IDEA
export interface UpdateIdeaStart {
  type: typeof ActionTypes.UPDATE_IDEA_START;
  payload: PostIdea
}

export interface UpdateIdeaSuccess {
  type: typeof ActionTypes.UPDATE_IDEA_SUCCESS;
}

export interface UpdateIdeaFailure {
  type: typeof ActionTypes.UPDATE_IDEA_FAILURE;
}

// DELETE IDEA
export interface DeleteIdeaStart {
  type: typeof ActionTypes.DELETE_IDEA_START;
  payload: string;
}

export interface DeleteIdeaSuccess {
  type: typeof ActionTypes.DELETE_IDEA_SUCCESS;
}

export interface DeleteIdeaFailure {
  type: typeof ActionTypes.DELETE_IDEA_FAILURE;
}

//  GET IDEA BY ID
export interface GetIdeaStart {
  type: typeof ActionTypes.GET_IDEA_START;
  payload: string
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

//  all posted idea for user my page posted idea 
export interface GetAllPostedIdeasForUserStart {
  type: typeof ActionTypes.GET_USER_POST_IDEA_START;
  payload: string;
}

export interface GetAllPostedIdeasForUserSuccess {
  type: typeof ActionTypes.GET_USER_POST_IDEA_SUCCESS;
  payload: PostIdea[]
}

export interface GetAllPostedIdeasForUserFailure {
  type: typeof ActionTypes.GET_USER_POST_IDEA_FAILURE;
}

//  all drafted idea for user my page posted idea 
export interface GetAllDraftedIdeasForUserStart {
  type: typeof ActionTypes.GET_USER_DRAFT_IDEA_START;
  payload: string;
}

export interface GetAllDraftedIdeasForUserSuccess {
  type: typeof ActionTypes.GET_USER_DRAFT_IDEA_SUCCESS;
  payload: PostIdea[]
}

export interface GetAllDraftedIdeasForUserFailure {
  type: typeof ActionTypes.GET_USER_DRAFT_IDEA_FAILURE;
}

export type PostIdeaAction = 
  | PostIdeaStart
  | PostIdeaSuccess
  | PostIdeaFailure
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
  | GetIdeasByGoodFailure
  | GetAllPostedIdeasForUserStart
  | GetAllPostedIdeasForUserSuccess
  | GetAllPostedIdeasForUserFailure
  | GetAllDraftedIdeasForUserStart
  | GetAllDraftedIdeasForUserSuccess
  | GetAllDraftedIdeasForUserFailure
  | UpdateIdeaStart
  | UpdateIdeaSuccess
  | UpdateIdeaFailure
  | DeleteIdeaStart
  | DeleteIdeaSuccess
  | DeleteIdeaFailure;