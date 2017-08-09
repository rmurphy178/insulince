import AppWithNavigationState from './app_navigator';
import { connect } from 'react-redux';
import ASYNC from '../../util/async_util.js';


const mapStateToProps = (state) => ({
  nav: state.nav
});


export default connect(mapStateToProps)(AppWithNavigationState);
