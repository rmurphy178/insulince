import { connect } from 'react-redux';
import { login, signUp, logout } from '../../../actions/session_actions';
import { clearErrors } from '../../../actions/errors_actions';
import SignUp from './signup';
import ASYNC from '../../../util/async_util.js';


const mapStateToProps = ({ currentUser, errors }) => {
  return {
    errors: errors,
    currentUser: currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: user => dispatch(signUp(user)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
