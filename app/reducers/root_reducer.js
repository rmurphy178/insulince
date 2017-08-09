import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import JournalEntriesReducer from './journal_entries_reducer';
import MeasurementsReducer from './measurements_reducer';
import ErrorsReducer from './errors_reducer';
import navReducer from '../appNavigator/app_navigator';


const RootReducer = combineReducers({
  currentUser: SessionReducer,
  journalEntries: JournalEntriesReducer,
  measurements: MeasurementsReducer,
  errors: ErrorsReducer,
  nav: navReducer
});

export default RootReducer;
