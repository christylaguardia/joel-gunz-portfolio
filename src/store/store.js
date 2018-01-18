import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import promiseMiddleware from './promiseMiddleware';
import rootReducer from './rootReducer';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(
      thunk,
      promiseMiddleware,
      logger
    )
  )
);

export default store;