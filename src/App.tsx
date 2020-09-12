// TODO: Component sepalete, According to the layout
import * as React from 'react';
import { StylesProvider } from '@material-ui/styles';

import PostIdeaContainer from './containers/ideaPostContainer';
import UserInfromation from './containers/showIdeaUserProfile';
import ShowIdeabyIdContainer from './containers/showIdeaContainer';
import CreateCommentContainer from './containers/createCommentContainer';
import ShowCommentContainer from './containers/showCommentContainer';

const App: React.FC = () => {
  return (
    <>
     <StylesProvider injectFirst>
       <ShowCommentContainer />
     </StylesProvider>
    </>
  )
}

export default App;