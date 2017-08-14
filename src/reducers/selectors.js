import { values } from 'lodash';


export const getAllJournalEntries = ({ journalEntries }) => (
	Object.keys(journalEntries).map(id => journalEntries[id])
);
