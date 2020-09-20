import React, {FC} from 'react';
import styled from 'styled-components';

// file
import ShowIdeabyIdContainer from './showIdeaContainer';
import IdeaShowUserProfile from './showIdeaUserProfile';
import ShowCommentContainer from './showCommentContainer';
import CreateCommentContainer from './createCommentContainer';
import HeaderContainer from '../headerContainer';
import FooterComponent from '../../components/footer';

const ShowPageWarpper = styled.div`
  width: 50%
  margin: 0 auto;
`

const ShowIdeaContainer: FC = () => {
  return (
    <>
      <HeaderContainer />
      <ShowPageWarpper>
        <IdeaShowUserProfile />
        <ShowIdeabyIdContainer />
        <ShowCommentContainer />
        <CreateCommentContainer />
      </ShowPageWarpper>
      <FooterComponent />
    </>
  );
};

export default ShowIdeaContainer;