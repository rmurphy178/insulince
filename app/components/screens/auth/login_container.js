import { connect } from 'react-redux';
import { login, signup, logout } from '../../../actions/session_actions';
import LogIn from './login';

const mapStateToProps = ({ session }) => {
  return {
    errors: session.errors
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: user => dispatch(login(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
