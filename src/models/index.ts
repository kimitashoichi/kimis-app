import { PostIdeaState } from './ideaModel';
import { LoginUserState } from './userModels';

export interface AppState {
  postIdea: PostIdeaState;
  draftIdea: PostIdeaState;
  userInfromation: LoginUserState;
}