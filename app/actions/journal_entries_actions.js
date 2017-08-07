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
