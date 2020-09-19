import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import styled from 'styled-components';

import * as Models from '../../models/ideaModel';
import { AppState } from '../../models';
import { getIdeasUserPosted } from '../../actions/ideaAction';

interface DispatchProps {
  getIdeasUserPosted: (uid: string) => void;
}

interface StateProps {
  isLoading: boolean;
  postedIdea: Models.PostIdea[];
}

type DefaultProps = DispatchProps & StateProps;

const UserMyPagePostedIdeas: FC<DefaultProps> = ({
  isLoading,
  postedIdea,
  getIdeasUserPosted
}) => {

  useEffect(() => {
    getIdeasUserPosted('c62EgmuKdcBZB1md3Nvz')
  }, [])

  // 取得した投稿データを```IdeaSingleComponent```に渡して繰り返し表示させればOK
  return (
    <>
      {console.log('UserMyPagePostedIdeas', postedIdea)}
    </>
  )
};

const mapStateToProps = (state: AppState) => ({
  isLoading: state.postIdea.isLoading,
  postedIdea: state.postIdea.postIdeas
})

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({
    getIdeasUserPosted: (uid: string) => getIdeasUserPosted.start(uid)
  }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserMyPagePostedIdeas);