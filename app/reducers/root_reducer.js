import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import JournalEntriesReducer from './journal_entries_reducer';
import MeasurementsReducer from './measurements_reducer';
import ErrorsReducer from './errors_reducer';

const RootReducer = combineReducers({
  currentUser: SessionReducer,
  journalEntries: JournalEntriesReducer,
  measurements: MeasurementsReducer,
  errors: ErrorsReducer,
});

export default RootReducer;
