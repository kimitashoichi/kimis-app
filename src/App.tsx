// TODO: Component sepalete, According to the layout
import * as React from 'react';
import { StylesProvider } from '@material-ui/styles';

// import ShowIdeaContainer from './containers/showIdea/index';
// import IdeaCreateAndEditContainer from './containers/createAndEditIdea/index'
// import FbShareButton from './components/fbShareButton';
// import TwShareButton from './components/twShareButton';
// import HeaderContainer from './containers/headerContainer';
import FooterComponent from './components/footer'

const App: React.FC = () => {
  return (
    <>
     <StylesProvider injectFirst>
       <FooterComponent />
     </StylesProvider>
    </>
  )
}

export default App;