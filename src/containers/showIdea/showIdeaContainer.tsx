import React, {FC, useEffect, FormEvent} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import styled from 'styled-components'

import Button from '@material-ui/core/Button'

// file
import * as Models from '../../models/ideaModel';
import { 
  getIdeabyId,
  chagneGoodCount
 } from '../../actions/ideaAction';
import { AppState } from '../../models';
import { dateToString } from '../../utils/utilFunctions';

// texts
import {
  NOT_FOUND_IDEA,
  CREATED_AT,
  UPDATED_AT
} from '../../constants/textIndex';

// styled elements
const IdeaContent = styled.div`
  width: 60%;
  margin: 0 auto;
`
const SubmitButton = styled(Button)`
  background: linear-gradient(45deg, #6babfe 30%, #6b6dfe 90%);
  border-radius: 3px;
  border: 0;
  color: white;
  height: 38px;
  padding: 0 30px;
  box-shadow: 0 3px 5px 2px rgba(0,153,255, .3);
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
  chagneGoodCount: () => void;
}

type DefaultProps = Props & StateProps & DispatchProps;

const ShowIdeabyIdContainer: FC<DefaultProps> = ({
  isLoading,
  getIdeabyId,
  chagneGoodCount,
  idea
}) => {

  useEffect(() => {
    getIdeabyId()
  }, []);

  const handleOnGoodCount = async (e: FormEvent) => {
    e.preventDefault();
    await chagneGoodCount();
    await getIdeabyId();
  }

  return (
    <>
      { idea ? (
        <IdeaContent>
          <h5>{CREATED_AT + ' ' + dateToString(idea.createdAt) }</h5>
          <h5>{ idea.updatedAt ? UPDATED_AT + ' ' + dateToString(idea.updatedAt) : '' }</h5>
          <div>
            { idea.content }
          </div>
          <h1>{ idea.goodCount }</h1>
          <SubmitButton onClick={(e) => handleOnGoodCount(e)}>いいね</SubmitButton>
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
    getIdeabyId: () => getIdeabyId.start(),
    chagneGoodCount: () => chagneGoodCount.start()
  }, dispatch)

export default connect(
  mapStateToProps,
  mapDisoatchToProps
)(ShowIdeabyIdContainer);