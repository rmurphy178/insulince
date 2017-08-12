import axios from 'axios';
import ASYNC from './async_util';

export const fetchAllJournalEntries = () => {
  return ASYNC.getItem("auth_token").then(token => {
    const url = "https://insulince-api.herokuapp.com/api/journal_entries";
    return axios({
      method: 'GET',
      url: url,
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token
      }
    });
  });
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
