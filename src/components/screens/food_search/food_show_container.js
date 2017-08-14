import { connect } from 'react-redux';
import FoodShow from './food_show';
import { addJournalEntryItem } from '../../../actions/journal_entries_actions';

const mapStateToProps = state => {
  return {

  };
};

const mapDispatchToProps = dispatch => {
  return {
    addJournalEntryItem: (item, meal, journalEntryId) => dispatch(addJournalEntryItem(item, meal, journalEntryId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FoodShow);
