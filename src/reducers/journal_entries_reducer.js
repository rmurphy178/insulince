import { RECEIVE_ALL_JOURNAL_ENTRIES, RECEIVE_JOURNAL_ENTRY } from '../actions/journal_entries_actions';
import { CLEAR_STORE } from '../actions/session_actions';
import merge from 'lodash/merge';

const defaultState =  {
    allIds: [],
    byId: {}
};

const JournalEntriesReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let nextState;
  switch(action.type) {
    case(RECEIVE_ALL_JOURNAL_ENTRIES):
      nextState = merge({}, defaultState);
      nextState.allIds = Object.keys(action.journalEntries).reverse();
      nextState.allIds.forEach(journalEntryId => {
        nextState.byId[journalEntryId] = action.journalEntries[journalEntryId];
      });
      return nextState;
    case(RECEIVE_JOURNAL_ENTRY):
      nextState = merge({}, state);
      nextState.byId[action.journalEntry.id] = action.journalEntry.entry;
      if (!nextState.allIds.includes(action.journalEntry.id)) {
        nextState.allIds.shift(action.journalEntry.id);
      }
      return nextState;
    case CLEAR_STORE:
      return defaultState;
    default:
      return state;
  }
};

export default JournalEntriesReducer;
