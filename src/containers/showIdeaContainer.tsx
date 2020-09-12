import React, {FC, useEffect} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import styled from 'styled-components'

// file
import * as Models from '../models/ideaModel';
import { getIdeabyId } from '../actions/ideaAction';
import { AppState } from '../models';
import { dateToString } from '../utils/utilFunctions';

// texts
import {
  NOT_FOUND_IDEA,
  CREATED_AT,
  UPDATED_AT
} from '../constants/textIndex';

// styled elements
const IdeaContent = styled.div`
  width: 60%;
  margin: 0 auto;
`


interface Props {
  idea: Models.PostIdea
}

interface StateProps {
  isLoading?: boolean;
}

interface DispatchProps {
  // under implemetns arg is none, but arg is ideaId when production.
  getIdeabyId: () => void;
}

type DefaultProps = Props & StateProps & DispatchProps;

const ShowIdeabyIdContainer: FC<DefaultProps> = ({
  isLoading,
  getIdeabyId,
  idea
}) => {

  useEffect(() => {
    getIdeabyId()
  }, []);

  return (
    <>
      { idea ? (
        <IdeaContent>
          <h5>{CREATED_AT + ' ' + dateToString(idea.createdAt) }</h5>
          <h5>{ idea.updatedAt ? UPDATED_AT + ' ' + dateToString(idea.updatedAt) : '' }</h5>
          <div>
            { idea.content }
          </div>
        </IdeaContent>
      ): (<IdeaContent>{NOT_FOUND_IDEA}</IdeaContent>)}
    </>
  );
};

const mapStateToProps = (state: AppState) => ({
  isLoading: state.postIdea.isLoading,
  idea: state.postIdea.postIdea
});

const mapDisoatchToProps = (dispatch: Dispatch) => 
  bindActionCreators({
    getIdeabyId: () => getIdeabyId.start()
  }, dispatch)

export default connect(
  mapStateToProps,
  mapDisoatchToProps
)(ShowIdeabyIdContainer);