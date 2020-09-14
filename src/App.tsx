// TODO: Component sepalete, According to the layout
import * as React from 'react';
import { StylesProvider } from '@material-ui/styles';

import ShowIdeaContainer from './containers/showIdea/index';
import FbShareButton from './components/fbShareButton';
import TwShareButton from './components/twShareButton';

const App: React.FC = () => {
  return (
    <>
     <StylesProvider injectFirst>
       <ShowIdeaContainer />
     </StylesProvider>
    </>
  )
}

export default App;