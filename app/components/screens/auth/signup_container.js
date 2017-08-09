import { connect } from 'react-redux';
import { login, signUp, logout } from '../../../actions/session_actions';
import SignUp from './signup';


const mapStateToProps = ({ currentUser, errors }) => {
  return {
    errors: errors,
    currentUser: currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: user => dispatch(signUp(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
