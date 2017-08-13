import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import RootReducer from '../reducers/root_reducer';
import { composeWithDevTools }  from 'remote-redux-devtools';
import screenTracking from '../components/screens/screen_tracking/screen_tracking';

const configureStore = (preloadedState = {}) => (
  createStore(
    RootReducer,
    preloadedState,
    composeWithDevTools(applyMiddleware(thunk, screenTracking, logger))
  )
);

export default configureStore;
