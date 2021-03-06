import React, { FC, useEffect } from  'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import * as Models from '../../models/ideaModel';
import { AppState } from '../../models/index'; 
import { getIdeasByGoodCount } from '../../actions/ideaAction';
import IdeaSingleComponent from '../../components/ideaSingleComponent';

interface StateProps {
  ideas: Models.PostIdea[];
  isLoading: boolean;
};

interface DispatchProps {
  getIdeasByGoodCount: () => void;
};

type DefaultProps = DispatchProps & StateProps;

const GoodCountIdeaComponent: FC<DefaultProps> = ({
  isLoading,
  ideas,
  getIdeasByGoodCount
}) => {
  useEffect(() => {
    getIdeasByGoodCount()
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
  ideas: state.postIdea.ideasByGoodCount
});

const mapDispatchToProps = (dispatch: Dispatch) => 
  bindActionCreators({
    getIdeasByGoodCount: () => getIdeasByGoodCount.start()
  }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GoodCountIdeaComponent);