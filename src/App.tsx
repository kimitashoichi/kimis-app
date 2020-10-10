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
import IdeaCreateContainer from './containers/createIdea';
import IdeaEditContainer from './containers/editIdea';
import EditUserProfile from './containers/editUserProfile/editUserProfileContainer'
import HeaderContainer from './containers/header/headerContainer';
import FooterComponent from './components/footer';

// footer Menu Compoent
import AboutAdministrator from './components/footerMenu/aboutAdministrator'
import Privacy from './components/footerMenu/privacy'
import Feedback from './components/footerMenu/feedback'
import Contact from './components/footerMenu/contact'



const App: React.FC = () => {
  return (
    <>
     <StylesProvider injectFirst>
        <Router>
          <HeaderContainer />
            <Route exact path='/' component={TopIndexComponent} />
            <Route path='/create' component={IdeaCreateContainer} />
            <Route path='/show/:ideaId' component={ShowIdeaContainer} />
            <Route path='/profile/:author_name' component={UserMyPage} />
            <Route path='/edit/:ideaId' component={IdeaEditContainer} />
            <Route path='/useredit/:userId' component={EditUserProfile} />
            <Route exact path='/administrator' component={AboutAdministrator} />
            <Route exact path='/privacy' component={Privacy} />
            <Route exact path='/contact' component={Feedback} />
            <Route exact path='/feedback' component={Contact} />
          <FooterComponent />
        </Router>
     </StylesProvider>
    </>
  )
}

export default App;