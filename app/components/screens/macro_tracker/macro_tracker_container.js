import { connect } from 'react-redux';
import MacroTracker from './macro_tracker';


const mapStateToProps = ( { currentUser, errors }) => ({
    errors: errors,
    currentUser: currentUser
});

const mapDispatchToProps = (dispatch) => ({

});


export default connect(mapStateToProps, mapDispatchToProps)(MacroTracker);
