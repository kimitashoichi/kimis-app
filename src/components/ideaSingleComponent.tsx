import React , { FC } from 'react';
import styled from 'styled-components';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import * as Models from '../models/ideaModel';
import { CREATED_AT } from '../constants/textIndex';
import { 
  dateToString,
  characterLimit
 } from '../utils/utilFunctions';
import LinkComponent from '../components/LinkComponest';

const useStyles = makeStyles({
  pos: {
    marginBottom: 12,
  },
});

const IdeaBox = styled(Card)`
  min-width: 200px;
  margin-bottom: 25px;
`;

//  TODO: divタグで作成しているが呼び出ししている親コンポーネントで囲っている要素がpタグなのでコンソールにエラーが出ている。elemet要素を変更してエラーが出ないようにする

interface StateProps {
  idea?: Models.PostIdea
}

const IdeaSingleComponent: FC<StateProps> = ({idea}) => {
  const classes = useStyles();
  if(!idea) return null;

  return (
    <>
      <IdeaBox>
        <CardContent>
          <Typography variant="h5" component="h2">
            <LinkComponent src={`/show/${idea.ideaId}`}>
              {characterLimit(idea.content)}
            </LinkComponent>
          </Typography>

          <Typography className={classes.pos} color="textSecondary">
            <LinkComponent src={`/profile/${idea.uid}`}>
              { idea.authorName }
            </LinkComponent>
          </Typography>

          <Typography variant="body2" component="h4">
            {CREATED_AT}: {dateToString(idea.createdAt)}
          </Typography>

          <Typography variant="body2" component="h4">
            Good : {idea.goodCount ? idea.goodCount : 0}
          </Typography>
        </CardContent>
      </IdeaBox>
    </>
  )
};

export default IdeaSingleComponent;