// TODO: Component sepalete, According to the layout
import * as React from 'react';
import { StylesProvider } from '@material-ui/styles';

// import ShowIdeaContainer from './containers/showIdea/index';
// import IdeaCreateAndEditContainer from './containers/createAndEditIdea/index'
// import FbShareButton from './components/fbShareButton';
// import TwShareButton from './components/twShareButton';
// import HeaderContainer from './containers/headerContainer';
// import FooterComponent from './components/footer'
// import IdeaSingleComponent from './components/ideaSingleComponent';
// import LatestIdeaComponent from './containers/topPageComponent/latestIdeaContainer';
// import GoodCountIdeaComponent from './containers/topPageComponent/goodCountIdeaComponent'
import EditUserProfile from './containers/editUserProfileContainer';



const App: React.FC = () => {
  return (
    <>
     <StylesProvider injectFirst>
       <EditUserProfile />
     </StylesProvider>
    </>
  )
}

export default App;