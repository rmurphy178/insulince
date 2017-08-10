import axios from 'axios';
import NUTRITIONIX_APP_ID from '../../constants';
import NUTRITIONIX_APP_KEY from '../../constants';

const fields = ["item_name, brand_name, item_id, brand_id, upc, nf_calories, nf_calories_from_fat, nf_total_fat, nf_total_fat, nf_saturated_fat, nf_monounsaturated_fat, nf_polyunsaturated_fat, nf_trans_fatty_acid, nf_cholesterol, nf_sodium, nf_total_carbohydrate, nf_dietary_fiber, nf_sugars, nf_protein, nf_serving_size_qty, nf_serving_size_unit"];

export const searchNutritionix = query => {
  axios({
    method: 'POST',
    url: 'https://api.nutritionix.com/v1_1/search',
    data: {
      "appId": NUTRITIONIX_APP_ID,
      "appKey": NUTRITIONIX_APP_KEY,
      "fields": fields,
      "sort": {
        "field": "_score",
        "order": "desc"
      },
      "query": query
    },
    headers: {
      'Content-Type': 'application/json'
    }
  });
};
