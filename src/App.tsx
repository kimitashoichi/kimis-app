// TODO: Component sepalete, According to the layout
import * as React from 'react';
import { StylesProvider } from '@material-ui/styles';
import { 
  BrowserRouter as Router, 
  Route
} from 'react-router-dom';

import UserMyPage from './containers/myPage';
import TopIndexComponent from './containers/topPageComponent';
import ShowIdeaContainer from './containers/showIdea';
import IdeaCreateAndEditContainer from './containers/createAndEditIdea';
import HeaderContainer from './containers/headerContainer';
import FooterComponent from './components/footer';


const App: React.FC = () => {
  return (
    <>
     <StylesProvider injectFirst>
        <Router>
          <HeaderContainer />
            <Route exact path='/' component={TopIndexComponent} />
            <Route path='/create' component={IdeaCreateAndEditContainer} />
            <Route path='/show/:ideaId' component={ShowIdeaContainer} />
            <Route path='/profile/:author_name' component={UserMyPage} />
          <FooterComponent />
        </Router>
     </StylesProvider>
    </>
  )
}

export default App;