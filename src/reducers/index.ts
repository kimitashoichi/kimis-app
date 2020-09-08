import { History } from 'history';
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

// Reducer
import ideaReducer from './ideaReducer';

const rootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    idea: ideaReducer
  })

export default rootReducer;