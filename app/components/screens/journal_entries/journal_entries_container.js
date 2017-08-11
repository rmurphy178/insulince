import { connect } from 'react-redux';
import { login, signUp, logout } from '../../../actions/session_actions';
import { fetchAllJournalEntries } from '../../../actions/journal_entries_actions';
import JournalEntries from './journal_entries';


const mapStateToProps = ( { currentUser, errors }) => {
  return {
    errors: errors,
    currentUser: currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getJournalEntries: () => dispatch(fetchAllJournalEntries)
  };
};
