import { connect } from 'react-redux';
import FoodSearch from './food_search';
import { searchNutritionix } from '../../../actions/nutritionix_actions';

const mapStateToProps = state => {
  return {

  };
};

const mapDispatchToProps = dispatch => {
  return {
    searchNutritionix: query => dispatch(searchNutritionix(query))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FoodSearch);
