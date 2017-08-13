import { connect } from 'react-redux';
import Nutrition from './nutrition';


const mapStateToProps = ( { currentUser, errors }) => ({
    errors: errors,
    currentUser: currentUser
});

const mapDispatchToProps = (dispatch) => ({

});


export default connect(mapStateToProps, mapDispatchToProps)(Nutrition);
