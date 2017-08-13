import { connect } from 'react-redux';
import { login, signUp, logout } from '../../../actions/session_actions';
import { fetchAllJournalEntries } from '../../../actions/journal_entries_actions';
import JournalEntries from './journal_entries';


const mapStateToProps = state => {
  return {
    errors: state.errors,
    currentUser: state.currentUser,
    journalEntries: state.journalEntries
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllJournalEntries: () => dispatch(fetchAllJournalEntries())
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(JournalEntries);
