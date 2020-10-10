import React, { FC, useEffect } from  'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import * as Models from '../../models/ideaModel';
import { AppState } from '../../models/index'; 
import { getIdeasByLatest } from '../../actions/ideaAction';
import IdeaSingleComponent from '../../components/ideaSingleComponent';

interface StateProps {
  ideas: Models.PostIdea[];
  isLoading: boolean;
};

interface DispatchProps {
  getIdeasByLatest: () => void;
};

type DefaultProps = DispatchProps & StateProps;

const LatestIdeaComponent: FC<DefaultProps> = ({
  isLoading,
  ideas,
  getIdeasByLatest
}) => {
  useEffect(() => {
    getIdeasByLatest()
  }, [])

  return (
    <>
      { ideas.map(idea => {
        return (
          <IdeaSingleComponent idea={idea} key={idea.ideaId}/>
        )
      })}
    </>
  )
};

const mapStateToProps = (state: AppState) => ({
  isLoading: state.postIdea.isLoading,
  ideas: state.postIdea.postIdeasbyLatest
});

const mapDispatchToProps = (dispatch: Dispatch) => 
  bindActionCreators({
    getIdeasByLatest: () => getIdeasByLatest.start()
  }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LatestIdeaComponent);