import * as React from 'react';
import { StylesProvider } from '@material-ui/styles';

import PostIdeaContainer from './containers/ideaPostContainer';

const App: React.FC = () => {
  return (
    <>
     <StylesProvider injectFirst>
       <PostIdeaContainer />
     </StylesProvider>
    </>
  )
}

export default App;