import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import * as Models from '../../models/ideaModel';
import { AppState } from '../../models';
import { getIdeasUserPosted } from '../../actions/ideaAction';
import UserMyPageIdeaComponent from '../../components/userMyPageIdeaComponent'
import { getUrlId } from '../../utils/utilFunctions';

interface DispatchProps {
  getIdeasUserPosted: (uid: string) => void;
}

interface StateProps {
  userId: string | null;
  isLoading: boolean;
  postedIdeas: Models.PostIdea[];
}

type DefaultProps = DispatchProps & StateProps;

const UserMyPagePostedIdeas: FC<DefaultProps> = ({
  isLoading,
  userId,
  postedIdeas,
  getIdeasUserPosted
}) => {

  useEffect(() => {
    getIdeasUserPosted(getUrlId())
  }, [])

  // 取得した投稿データを```IdeaSingleComponent```に渡して繰り返し表示させればOK
  return (
    <>
     { postedIdeas ? (
        <>
          { postedIdeas.map((idea) => {
              return (
                <UserMyPageIdeaComponent idea={idea} userId={userId} key={idea.content.length} />
              )})
          }
        </>
      ) : (
        <>
          <p>No posts yet.</p>
        </>
      ) 
      }
    </>
  )
};

const mapStateToProps = (state: AppState) => ({
  isLoading: state.postIdea.isLoading,
  postedIdeas: state.postIdea.userPostedIdeas
})

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({
    getIdeasUserPosted: (uid: string) => getIdeasUserPosted.start(uid)
  }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserMyPagePostedIdeas);