import * as React from 'react';
import { StylesProvider } from '@material-ui/styles';

import PostIdeaContainer from './containers/ideaPostContainer';
import UserInfromation from './containers/showIdeaUserProfile';

const App: React.FC = () => {
  return (
    <>
     <StylesProvider injectFirst>
       {/* <PostIdeaContainer /> */}
       <UserInfromation />
     </StylesProvider>
    </>
  )
}

export default App;