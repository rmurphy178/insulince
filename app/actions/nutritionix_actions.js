import * as nutritionixAPIUtil from '../util/nutritionix_api_util';
import { receiveErrors, clearErrors } from './errors_actions';

export const RECEIVE_NUTRITIONIX_RESULTS = "RECEIVE_NUTRITIONIX_RESULTS";

export const receiveNutritionixResults = results => {
  return {
    type: RECEIVE_NUTRITIONIX_RESULTS,
    results
  };
};

export const searchNutritionix = query => dispatch => {
  return nutritionixAPIUtil.searchNutritionix(query)
    .then(response => response.data.hits,
      errors => receiveErrors(errors.response.data));
};
