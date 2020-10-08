import React, {FC, useEffect, FormEvent} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import styled from 'styled-components'

import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

// file
import * as Models from '../../models/ideaModel';
import { 
  getIdeabyId,
  chagneGoodCount
 } from '../../actions/ideaAction';
import { AppState } from '../../models';
import { 
  dateToString,
  getUrlId
 } from '../../utils/utilFunctions';

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
`;

const IdeaBox = styled(Card)`
  min-width: 200px;
  min-height: 200px;
`;


interface Props {
  idea: Models.PostIdea
}

interface StateProps {
  isLoading: boolean;
}

interface DispatchProps {
  getIdeabyId: (ideaId: string) => void;
  changeGoodCount: (ideaId: string) => void;
}

type DefaultProps = Props & StateProps & DispatchProps;

const ShowIdeabyIdContainer: FC<DefaultProps> = ({
  isLoading,
  getIdeabyId,
  changeGoodCount,
  idea
}) => {

  useEffect(() => {
    getIdeabyId(getUrlId())
  }, []);

  const handleOnGoodCount = async (e: FormEvent) => {
    e.preventDefault();
    if(idea.ideaId){
      await changeGoodCount(idea.ideaId);
    }
    await getIdeabyId(getUrlId());
  }

  return (
    <>
      { idea ? (
        <IdeaContent>
          <h5>{CREATED_AT + ' ' + dateToString(idea.createdAt) }</h5>
          <h5>{ idea.updatedAt ? UPDATED_AT + ' ' + dateToString(idea.updatedAt) : '' }</h5>
          <IdeaBox>
            <Typography variant="h5" component="h2">{ idea.content }</Typography>
          </IdeaBox>
          <h2>{ idea.goodCount }</h2>
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

const mapDispatchToProps = (dispatch: Dispatch) => 
  bindActionCreators({
    getIdeabyId: ideaId => getIdeabyId.start(ideaId),
    changeGoodCount: ideaId => chagneGoodCount.start(ideaId)
  }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowIdeabyIdContainer);