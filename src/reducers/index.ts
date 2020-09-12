import { History } from 'history';
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

// Reducer
import ideaReducer from './ideaReducer';
import userReducer from './userReducer';
import commentReducer from './commentReducer';

const rootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    postIdea: ideaReducer,
    userInfromation: userReducer,
    comment: commentReducer
  })

export default rootReducer;