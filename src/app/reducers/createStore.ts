import { i18nReducer } from 'react-redux-i18n';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import authReducer from './auth';
import loadingReducer from './loading';

const appReducer = combineReducers({
  auth: authReducer,
  i18n: i18nReducer,
  loading: loadingReducer,
});

const rootReducer = (state: any, action: any) => {
  if (action.type === 'AUTH_LOGOUT') {
    state = undefined;
  }

  return appReducer(state, action);
};

const storeCreator = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f: any) => f
  )
);

export default storeCreator;
