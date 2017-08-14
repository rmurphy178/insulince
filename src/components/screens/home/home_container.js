import { connect } from 'react-redux';
import { fetchAllJournalEntries, fetchLastJournalEntry } from '../../../actions/journal_entries_actions';
import { fetchAllMeasurements } from '../../../actions/measurements_actions';
import { getAllJournalEntries } from '../../../reducers/selectors';
import Home from './home';

const mapStateToProps = state => ({
    currentUser: state.currentUser,
    journalEntries: state.journalEntries,
    measurements: state.measurements,
    errors: state.errors
});

const mapDispatchToProps = (dispatch) => ({
  fetchLastJournalEntry: () => dispatch(fetchLastJournalEntry()),
  fetchAllJournalEntries: () => dispatch(fetchAllJournalEntries())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
