import React , { FC } from 'react';
import styled from 'styled-components';

import * as Models from '../models/ideaModel';
import { CREATED_AT } from '../constants/textIndex';
import { 
  dateToString,
  characterLimit
 } from '../utils/utilFunctions';
import LinkComponent from '../components/LinkComponest';
import { deleteIdeaAction } from '../actions/ideaAction';
import { connect } from 'react-redux';
import { AppState } from '../models';
import { Dispatch, bindActionCreators } from 'redux';

const IdeaBox = styled.div`
  height: 250px;
`;

const DateBox = styled.div`
  display: flex;
`;

interface StateProps {
  idea?: Models.PostIdea
  deleteIdeaAction: (id: string) => void;
}

const UserMyPageIdeaComponent: FC<StateProps> = ({
  idea,
  deleteIdeaAction
}) => {
  if(!idea) return null;

  const handleOnDelete = () => {
    if(idea.ideaId) {
       deleteIdeaAction(idea.ideaId);
    }
  }

  return (
    <>
      <IdeaBox>
        <LinkComponent src={`/show/${idea.ideaId}`}>
          <h3>{characterLimit(idea.content)}</h3>
        </LinkComponent>
        <LinkComponent src={`/edit/${idea.ideaId}`}>Edit</LinkComponent>
        <button onClick={handleOnDelete}>Delete</button>
        <DateBox>
          <h4>{CREATED_AT} :</h4>
          <h4>{dateToString(idea.createdAt)}</h4>
        </DateBox>
        <label>Good</label>
        <h3>{idea.goodCount ? idea.goodCount : 0}</h3>
      </IdeaBox>
    </>
  )
};

const mapStateToProps = () => ({

})

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({
    deleteIdeaAction: id => deleteIdeaAction.start(id)
  }, dispatch);


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserMyPageIdeaComponent)