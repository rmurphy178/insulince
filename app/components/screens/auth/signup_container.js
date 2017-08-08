import { connect } from 'react-redux';
import { login, signUp, logout } from '../../../actions/session_actions';
import SignUp from './signup';


const mapStateToProps = ({ session }) => {
  return {
    errors: session.errors
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signup: user => dispatch(signUp(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
