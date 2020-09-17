import React , { FC } from 'react';
import styled from 'styled-components';

import * as Models from '../models/ideaModel';
import { CREATED_AT } from '../constants/textIndex';
import { 
  dateToString,
  characterLimit
 } from '../utils/utilFunctions';

const IdeaBox = styled.div`
  height: 250px;
`;

const DateBox = styled.div`
  display: flex;
`;

interface StateProps {
  idea?: Models.PostIdea
}

const IdeaSingleComponent: FC<StateProps> = ({idea}) => {
  if(!idea) return null;

  return (
    <>
      <IdeaBox>
        <h3>{idea.title ? characterLimit(idea.title): null}</h3>
        <h3>{characterLimit(idea.content)}</h3>
        <DateBox>
          <h4>Author Name</h4>
          <h4>{CREATED_AT} :</h4>
          <h4>{dateToString(idea.createdAt)}</h4>
        </DateBox>
        <label>Good</label>
        <h3>{idea.goodCount ? idea.goodCount : 0}</h3>
      </IdeaBox>
    </>
  )
};


export default IdeaSingleComponent;