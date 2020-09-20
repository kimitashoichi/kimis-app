// TODO: Component sepalete, According to the layout
import * as React from 'react';
import { StylesProvider } from '@material-ui/styles';

import UserMyPage from './containers/myPage';
import TopIndexComponent from './containers/topPageComponent';
import ShowIdeaContainer from './containers/showIdea';
import IdeaCreateAndEditContainer from './containers/createAndEditIdea';




const App: React.FC = () => {
  return (
    <>
     <StylesProvider injectFirst>
       <UserMyPage />
     </StylesProvider>
    </>
  )
}

export default App;