import axios from 'axios';

export const fetchAllJournalEntries = () => {
  const url = "https://insulince-api.herokuapp.com/api/journal_entries";
  return axios.get(url)
    .then(response => console.log(response));
};

export const createJournalEntry = journalEntry => {
  const url = "https://insulince-api.herokuapp.com/api/journal_entries";
  return axios.post(url, { journalEntry })
    .then(response => console.log(response));
};

export const updateJournalEntry = journalEntry => {
  const url = `https://insulince-api.herokuapp.com/api/journal_entries/${journalEntry.id}`;
  return axios.patch(url, { journalEntry })
    .then(response => console.log(response));
};

export const deleteJournalEntry = journalEntryId => {
  const url = `https://insulince-api.herokuapp.com/api/journal_entries/${journalEntryId}`;
  return axios.delete(url)
    .then(response => console.log(response));
};
