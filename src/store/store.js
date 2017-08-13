import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import RootReducer from '../reducers/root_reducer';
import { composeWithDevTools }  from 'remote-redux-devtools';

const configureStore = (preloadedState = {}) => (
  createStore(
    RootReducer,
    preloadedState,
    composeWithDevTools(applyMiddleware(thunk, logger))
  )
);

export default configureStore;
