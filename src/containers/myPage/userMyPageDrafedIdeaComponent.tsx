import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import styled from 'styled-components';

import * as Models from '../../models/ideaModel';
import { AppState } from '../../models';
import { getIdeasUserDrafted } from '../../actions/ideaAction';
import IdeaSingleComponent from '../../components/ideaSingleComponent';

interface DispatchProps {
  getIdeasUserDrafted: (uid: string) => void;
}

interface StateProps {
  isLoading: boolean;
  draftedIdeas: Models.PostIdea[];
}

type DefaultProps = DispatchProps & StateProps;

const UserMyPageDraftedIdeas: FC<DefaultProps> = ({
  isLoading,
  draftedIdeas,
  getIdeasUserDrafted
}) => {

  useEffect(() => {
    getIdeasUserDrafted('c62EgmuKdcBZB1md3Nvz')
  }, [])

  // 取得した投稿データを```IdeaSingleComponent```に渡して繰り返し表示させればOK
  return (
    <>
      { draftedIdeas ? (
        <>
          { draftedIdeas.map((idea) => {
            return (
              <IdeaSingleComponent idea={idea} key={idea.content.length} />
            )
          })}
        </>
      ) : (
        <>
          <p>No posts yet.</p>
        </>
      )}
    </>
  )
};

const mapStateToProps = (state: AppState) => ({
  isLoading: state.postIdea.isLoading,
  draftedIdeas: state.postIdea.userDraftedIdeas
})

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({
    getIdeasUserDrafted: (uid: string) => getIdeasUserDrafted.start(uid)
  }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserMyPageDraftedIdeas);