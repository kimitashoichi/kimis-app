import React, {FC, useEffect, FormEvent} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

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

// ui design
import {
  IdeaContent,
  ShowIdeaSubmitButton,
  IdeaBox
} from './style';
import Typography from '@material-ui/core/Typography';

interface Props {
  idea: Models.PostIdea;
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
          <ShowIdeaSubmitButton onClick={(e) => handleOnGoodCount(e)}>いいね</ShowIdeaSubmitButton>
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