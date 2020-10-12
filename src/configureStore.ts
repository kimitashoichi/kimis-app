import { applyMiddleware, createStore } from 'redux';
import { History } from 'history';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas'
import rootReducer from './reducers';
import { ExtendedWindow } from './typeDefinition/reduxDevToolExtensionType';
// import { compose } from '@material-ui/system';

// declare var window: ExtendedWindow;

export default function configureStore(history: History) {
  const sagaMiddleware = createSagaMiddleware();
  // const composeReduxDevToolExtension = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  // const enhanser = composeReduxDevToolExtension(applyMiddleware(sagaMiddleware));
  const store = createStore(
    rootReducer(history),
    applyMiddleware(sagaMiddleware)
  )

  sagaMiddleware.run(rootSaga)
  return store;
}