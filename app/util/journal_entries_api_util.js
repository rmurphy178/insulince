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
  return ASYNC.getItem("auth_token").then(token => {
    const url = "https://insulince-api.herokuapp.com/api/journal_entries";
    return axios({
      method: 'POST',
      url: url,
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token
      },
      data: { journal_entry: journalEntry }
    });
  });
};

export const updateJournalEntry = journalEntry => {
  return ASYNC.getItem("auth_token").then(token => {
    const url = `https://insulince-api.herokuapp.com/api/journal_entries/${journalEntry.id}`;
    return axios({
      method: 'POST',
      url: url,
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token
      },
      data: { journal_entry: journalEntry }
    });
  });
};

export const deleteJournalEntry = journalEntryId => {
  return ASYNC.getItem("auth_token").then(token => {
    const url = `https://insulince-api.herokuapp.com/api/journal_entries/${journalEntryId}`;
    return axios({
      method: 'DELETE',
      url: url,
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token
      }
    });
  });
};
