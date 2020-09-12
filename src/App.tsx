import * as React from 'react';
import { StylesProvider } from '@material-ui/styles';

import PostIdeaContainer from './containers/ideaPostContainer';
import UserInfromation from './containers/showIdeaUserProfile';
import ShowIdeabyIdContainer from './containers/showIdeaContainer';
import CreateCommentContainer from './containers/createCommentContainer';

const App: React.FC = () => {
  return (
    <>
     <StylesProvider injectFirst>
       <CreateCommentContainer />
     </StylesProvider>
    </>
  )
}

export default App;