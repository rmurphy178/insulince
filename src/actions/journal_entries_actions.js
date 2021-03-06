import * as journalEntriesAPIUtil from '../util/journal_entries_api_util';
import { receiveErrors, clearErrors } from './errors_actions';

export const RECEIVE_ALL_JOURNAL_ENTRIES = "RECEIVE_ALL_JOURNAL_ENTRIES";
export const RECEIVE_JOURNAL_ENTRY = "RECEIVE_JOURNAL_ENTRY";

export const receiveAllJournalEntries = journalEntries => {
  return {
    type: RECEIVE_ALL_JOURNAL_ENTRIES,
    journalEntries
  };
};

export const receiveJournalEntry = journalEntry => {
  return {
    type: RECEIVE_JOURNAL_ENTRY,
    journalEntry
  };
};

export const fetchAllJournalEntries = () => dispatch => {
  return(
    journalEntriesAPIUtil.fetchAllJournalEntries()
      .then(response => {
        dispatch(receiveAllJournalEntries(response.data));
        dispatch(clearErrors());
      }, errors => receiveErrors(errors.response.data))
  );
};

export const fetchLastJournalEntry = () => dispatch => {
  return(
    journalEntriesAPIUtil.fetchLastJournalEntry()
      .then(response => {
        dispatch(receiveAllJournalEntries(response.data));
        dispatch(clearErrors());
      }, errors => receiveErrors(errors.response.data))
  );
};

export const createJournalEntry = journalEntry => dispatch => {
  return(
    journalEntriesAPIUtil.createJournalEntry(journalEntry)
      .then(response => {
        dispatch(receiveJournalEntry(response.data));
        dispatch(clearErrors());
      }, errors => receiveErrors(errors.response.data))
  );
};

export const updateJournalEntry = journalEntry => dispatch => {
  return(
    journalEntriesAPIUtil.updateJournalEntry(journalEntry)
      .then(response => {
        dispatch(receiveJournalEntry(response.data));
        dispatch(clearErrors());
      }, errors => receiveErrors(errors.response.data))
  );
};

export const addJournalEntryItem = (item, meal, journalEntryId) => dispatch => {
  return(
    journalEntriesAPIUtil.addJournalEntryItem(item, meal, journalEntryId)
      .then(response => {
        dispatch(receiveJournalEntry(response.data));
        dispatch(clearErrors());
      }, errors => receiveErrors(errors.response.data))
  );
};

export const deleteJournalEntry = journalEntryId => dispatch => {
  return(
    journalEntriesAPIUtil.deleteJournalEntry(journalEntryId)
      .then(() => {
        dispatch(clearErrors());
      }, errors => receiveErrors(errors.response.data))
  );
};
