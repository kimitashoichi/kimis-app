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

const ShowIdeaContainer: FC = () => {
  return (
    <ShowPageWarpper>
      <IdeaShowUserProfile />
      <ShowIdeabyIdContainer />
      <ShowCommentContainer />
      <CreateCommentContainer />
    </ShowPageWarpper>
  );
};

export default ShowIdeaContainer;