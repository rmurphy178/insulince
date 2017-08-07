import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import JournalEntriesReducer from './journal_entries_reducer';
import MeasurementsReducer from './measurements_reducer';
import ErrorsReducer from './errors_reducer';

<<<<<<< HEAD

const RootReducer = combineReducers ({

=======
const RootReducer = combineReducers({
  currentUser: SessionReducer,
  journalEntries: JournalEntriesReducer,
  measurements: MeasurementsReducer,
  errors: ErrorsReducer
>>>>>>> 5aa57cd3450ecf8c52e3a5732a3991dc49a926cf
});

export default RootReducer;
