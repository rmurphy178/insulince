import { connect } from 'react-redux';
import { login, signup, logout } from '../../../actions/session_actions';
import Login from './login';

const mapStateToProps = ( { currentUser, errors }) => {
  return {
    errors: errors,
    currentUser: currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: user => dispatch(login(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
