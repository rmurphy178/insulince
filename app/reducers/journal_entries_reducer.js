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
      action.journalEntries.forEach(journalEntry => {
        nextState.allIds.push(journalEntry.id);
        nextState.byId[journalEntry.id] = journalEntry;
      });
      return nextState;
    case(RECEIVE_JOURNAL_ENTRY):
      nextState = merge({}, state);
      nextState.byId[action.journalEntry.id] = action.journalEntry;
      if (!nextState.allIds.includes(action.journalEntry.id)) {
        nextState.allIds.push(action.journalEntry.id);
      }
      return nextState;
    case CLEAR_STORE:
      return defaultState;
  }
};

export default JournalEntriesReducer;
