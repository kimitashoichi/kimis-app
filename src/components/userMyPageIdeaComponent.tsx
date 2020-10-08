import React , { FC } from 'react';
import styled from 'styled-components';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import * as Models from '../models/ideaModel';
import { CREATED_AT } from '../constants/textIndex';
import { 
  dateToString,
  characterLimit
 } from '../utils/utilFunctions';
import LinkComponent from '../components/LinkComponest';
import { deleteIdeaAction } from '../actions/ideaAction';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';

const IdeaBox = styled(Card)`
  min-width: 200px;
  margin-bottom: 25px;
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
        <CardContent>
          <Typography variant="h5" component="h2">
            <LinkComponent src={`/show/${idea.ideaId}`}>
              <h3>{characterLimit(idea.content)}</h3>
            </LinkComponent>
          </Typography>

          <Typography variant="body2" component="p">
            {CREATED_AT}: {dateToString(idea.createdAt)}
          </Typography>

          <Typography variant="body2" component="h4">
              Good : {idea.goodCount ? idea.goodCount : 0}
          </Typography>
        </CardContent>
        
        <CardActions>
          <Button size="small" onClick={handleOnDelete}>Delete</Button>
          <Button size="small">
            <LinkComponent src={`/edit/${idea.ideaId}`}>Edit</LinkComponent>
          </Button>
        </CardActions>
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