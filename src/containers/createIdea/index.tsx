import React, { FC } from 'react';
import styled from 'styled-components';

import PostIdeaContainer from './ideaPostContainer';

const IdeaCreateAndEditWarapper = styled.div`
  width: 60%
  margin: 0 auto;
`;

const IdeaCreateContainer: FC = () => {
  return (
    <>
      <IdeaCreateAndEditWarapper>
        <PostIdeaContainer />
      </IdeaCreateAndEditWarapper>
    </>
  );
};

export default IdeaCreateContainer;