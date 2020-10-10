import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

// file
import * as Models from '../../models/commentModel';
import * as UModels from '../../models/userModels';
import { 
  getCommentById,
  deleteComment
 } from '../../actions/commentAction';
import { AppState } from '../../models';
import { getUrlId } from '../../utils/utilFunctions';

// texts
import {
  NOT_FOUND_IDEA,
  CREATED_AT
} from '../../constants/textIndex';

// ui design
import {
  CommentContent,
  CommentCard,
  DeleteButton
} from './style';
import Typography from '@material-ui/core/Typography';

interface Props {
  comments: Models.GetCommentState[];
  userInfo?: UModels.LoginUser;
};

interface DispatchProps {
  getCommentById: (ideaId: string) => void;
  deleteComment: (commentId: string) => void;
};

interface StateProps {
  isLoading?: boolean;
};

type DefaultProps = Props & DispatchProps & StateProps;

const ShowCommentContainer: FC<DefaultProps> = ({
  isLoading,
  comments,
  getCommentById,
  deleteComment,
  userInfo
}) => {
  useEffect(() => {
    getCommentById(getUrlId())
  }, []);

  let uid: string;
  if(userInfo){
    uid = userInfo.userId
  } else {
    uid = 'noId'
  }

  return (
    <>
      { comments ? (
        <>
          { comments.map(comment => {
            return (
              <CommentContent key={comment.commentId}>
                <div style={{marginRight: '30px'}}>
                  <h5>{ comment.userName }</h5>
                </div>
                <CommentCard>
                  <Typography variant="subtitle2" gutterBottom>
                    { comment.content }
                  </Typography>

                  { comment.userId === uid ? (
                    <DeleteButton 
                        variant="contained" color="secondary" size="small" onClick={() => deleteComment(comment.commentId)}>
                          Delete
                    </DeleteButton>
                  ) : (null) }
                </CommentCard>
              </CommentContent>
            )
          })}
        </>
      ): (<CommentContent>{NOT_FOUND_IDEA}</CommentContent>)}
    </>
  );
};

const mapStateToProps = (state: AppState) => ({
  isLoading: state.comment.isLoading,
  comments: state.comment.commentbyId,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({
    getCommentById: ideaId => getCommentById.start(ideaId),
    deleteComment: commentId => deleteComment.start(commentId)
  }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowCommentContainer);