import React, {FC} from 'react';
import styled from 'styled-components';

// file
import ShowIdeabyIdContainer from './showIdeaContainer';
import IdeaShowUserProfile from './showIdeaUserProfile';
import ShowCommentContainer from './showCommentContainer';
import CreateCommentContainer from './createCommentContainer';


const ShowPageWarpper = styled.div`
  width: 50%
  margin: 0 auto;
`
// 投稿一覧画面から遷移した時に指定の投稿データの詳細を表示するために投稿に関するIDを全て取得しなければいけない
interface StateProps {
  ideaId: number;
  ideaAuthorId: number;
  ideaCommentId: number
}

const ShowIdeaContainer: FC = () => {
  return (
    <>
      <ShowPageWarpper>
        <IdeaShowUserProfile />
        <ShowIdeabyIdContainer />
        <ShowCommentContainer />
        <CreateCommentContainer />
      </ShowPageWarpper>
    </>
  );
};

export default ShowIdeaContainer;