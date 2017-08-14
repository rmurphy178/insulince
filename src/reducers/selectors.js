import { values } from 'lodash';


//
// export const getAllJournalEntries = ({ journalEntries }) => (
// 	Object.keys(journalEntries).map(key => journalEntries[key])
// );


const getAllJournalEntries = ({ journalEntries }) => (
	values(journalEntries)
);
