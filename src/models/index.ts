import { PostIdeaState } from './ideaModel';
import { LoginUserState } from './userModels';
import { CommentState } from './commentModel';

export interface AppState {
  postIdea: PostIdeaState;
  draftIdea: PostIdeaState;
  userInfromation: LoginUserState;
  comment: CommentState;
}