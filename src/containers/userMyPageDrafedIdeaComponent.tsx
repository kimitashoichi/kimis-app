import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import styled from 'styled-components';

import * as Models from '../models/ideaModel';
import { AppState } from '../models';
import { getIdeasUserDrafted } from '../actions/ideaAction';

interface DispatchProps {
  getIdeasUserDrafted: (uid: string) => void;
}

interface StateProps {
  isLoading: boolean;
  draftedIdea: Models.PostIdea[];
}

type DefaultProps = DispatchProps & StateProps;

const UserMyPageDraftedIdeas: FC<DefaultProps> = ({
  isLoading,
  draftedIdea,
  getIdeasUserDrafted
}) => {

  useEffect(() => {
    getIdeasUserDrafted('c62EgmuKdcBZB1md3Nvz')
  }, [])

  // 取得した投稿データを```IdeaSingleComponent```に渡して繰り返し表示させればOK
  return (
    <>
      {console.log('UserMyPageDraftedIdeas', draftedIdea)}
    </>
  )
};

const mapStateToProps = (state: AppState) => ({
  isLoading: state.postIdea.isLoading,
  draftedIdea: state.postIdea.postIdeas
})

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({
    getIdeasUserDrafted: (uid: string) => getIdeasUserDrafted.start(uid)
  }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserMyPageDraftedIdeas);