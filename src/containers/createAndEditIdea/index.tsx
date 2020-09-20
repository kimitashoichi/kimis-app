import React, { FC } from 'react';
import styled from 'styled-components';

import PostIdeaContainer from './ideaPostContainer';
import HeaderContainer from '../headerContainer';
import FooterComponent from '../../components/footer';

const IdeaCreateAndEditWarapper = styled.div`
  width: 60%
  margin: 0 auto;
`


const IdeaCreateAndEditContainer: FC = () => {
  return (
    <>
      <HeaderContainer />
      <IdeaCreateAndEditWarapper>
        <PostIdeaContainer />
      </IdeaCreateAndEditWarapper>
      <FooterComponent />
    </>
  );
};

export default IdeaCreateAndEditContainer;