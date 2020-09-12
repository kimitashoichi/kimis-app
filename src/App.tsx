import * as React from 'react';
import { StylesProvider } from '@material-ui/styles';

import PostIdeaContainer from './containers/ideaPostContainer';
import UserInfromation from './containers/showIdeaUserProfile';
import ShowIdeabyIdContainer from './containers/showIdeaContainer';

const App: React.FC = () => {
  return (
    <>
     <StylesProvider injectFirst>
       {/* <PostIdeaContainer /> */}
       {/* <UserInfromation /> */}
       <ShowIdeabyIdContainer />
     </StylesProvider>
    </>
  )
}

export default App;