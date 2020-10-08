import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import styled from 'styled-components';

// material ui
import Paper from '@material-ui/core/Paper';

// file
import * as Models from '../../models/commentModel';
import { getCommentById } from '../../actions/commentAction';
import { AppState } from '../../models';
import { 
  dateToString,
  getUrlId 
} from '../../utils/utilFunctions';

// texts
import {
  NOT_FOUND_IDEA,
  CREATED_AT
} from '../../constants/textIndex';

// styled elements
const IdeaContent = styled.div`
  width: 60%;
  margin: 0 auto;
  display: flex;
`;

const CommentCard = styled(Paper)`
  min-width: 600px;
  max-width: 800px;
  min-height: 70px;
  margin: 20px 0px;
`;

interface Props {
  comments: Models.GetCommentState[];
};

interface DispatchProps {
  getCommentById: (ideaId: string) => void;
};

interface StateProps {
  isLoading?: boolean;
};

type DefaultProps = Props & DispatchProps & StateProps;

const ShowCommentContainer: FC<DefaultProps> = ({
  isLoading,
  comments,
  getCommentById
}) => {
  useEffect(() => {
    getCommentById(getUrlId())
  }, []);

  return (
    <>
      { comments ? (
        <>
          { comments.map(comment => {
            return (
              <IdeaContent key={comment.commentId}>
                <div style={{marginRight: '30px'}}>
                  <h5>{ comment.userName }</h5>
                  {/* <h5>{ CREATED_AT + ' ' + dateToString(comment.createdAt) }</h5> */}
                </div>
                <CommentCard>
                  { comment.content }
                </CommentCard>
              </IdeaContent>
            )
          })}
        </>
      ): (<IdeaContent>{NOT_FOUND_IDEA}</IdeaContent>)}
    </>
  );
};

const mapStateToProps = (state: AppState) => ({
  isLoading: state.comment.isLoading,
  comments: state.comment.commentbyId
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({
    getCommentById: ideaId => getCommentById.start(ideaId)
  }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowCommentContainer);