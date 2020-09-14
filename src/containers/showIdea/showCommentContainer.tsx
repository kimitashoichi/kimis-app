import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import styled from 'styled-components';

// material ui

// file
import * as Models from '../../models/commentModel';
import { getCommentById } from '../../actions/commentAction';
import { AppState } from '../../models';
import { dateToString } from '../../utils/utilFunctions';

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
`

interface Props {
  comment: Models.Comment;
};

interface DispatchProps {
  getCommentById: () => void;
};

interface StateProps {
  isLoading?: boolean;
};

type DefaultProps = Props & DispatchProps & StateProps;

const ShowCommentContainer: FC<DefaultProps> = ({
  isLoading,
  comment,
  getCommentById
}) => {

  useEffect(() => {
    getCommentById()
  }, []);



  return (
    <>
      { comment ? (
        <IdeaContent>
          <div style={{marginRight: '30px'}}>
            <h5>{ comment.userName }</h5>
          </div>
          <div>
            <h5>{ comment.content }</h5>
            <h6>{CREATED_AT + ' ' + dateToString(comment.createdAt) }</h6>
          </div>
        </IdeaContent>
      ): (<IdeaContent>{NOT_FOUND_IDEA}</IdeaContent>)}
    </>
  );
};

const mapStateToProps = (state: AppState) => ({
  isLoading: state.comment.isLoading,
  comment: state.comment.comment
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({
    getCommentById: () => getCommentById.start()
  }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowCommentContainer);