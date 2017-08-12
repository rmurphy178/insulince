import { connect } from 'react-redux';
import { login } from '../../../actions/session_actions';
import { clearErrors } from '../../../actions/errors_actions';
import Login from './login';
import ASYNC from '../../../util/async_util.js';

const mapStateToProps = ({ currentUser, errors }) => {
  return {
    errors,
    currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: user => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
