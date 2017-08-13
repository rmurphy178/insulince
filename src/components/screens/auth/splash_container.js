import { connect } from 'react-redux';
import SplashScreen from './splash';
import ASYNC from '../../../util/async_util.js';
// import { receiveCurrentUser } from '../../..actions/session_actions';

const mapStateToProps = ({ currentUser, errors }) => {
  return {
    currentUser: currentUser,
    errors: errors
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // receiveCurrentUser: currentUser => dispatch(receiveCurrentUser(currentUser)),
    setItem: ASYNC.setItem,
    getItem: ASYNC.getItem,
    removeItem: ASYNC.removeItem
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen);
