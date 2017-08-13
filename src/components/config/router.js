import React from 'react';
import { StackNavigator } from 'react-navigation';
import LoginContainer from '../screens/auth/login_container';
import SignUpContainer from '../screens/auth/signup_container';
import SplashScreenContainer from '../screens/auth/splash_container';
import HomeContainer from '../screens/home/home_container';
import JournalEntriesContainer from '../screens/journal_entries/journal_entries_container';
import MeasurementsContainer from '../screens/measurements/measurements_container';
import Progress from '../screens/progress/progress';
import AccountContainer from '../screens/account/account_container';
import NutritionContainer from '../screens/nutrition/nutrition_container';
import FoodSearchContainer from '../screens/food_search/food_search_container';
import FoodShow from '../screens/food_search/food_show';
import MeasurementFormContainer from '../screens/measurements/measurement_form_container';

export const AuthNav = StackNavigator({
  Login: { screen: LoginContainer },
  SignUp: { screen: SignUpContainer},
  Home: { screen: HomeContainer },
  JournalEntries: { screen: JournalEntriesContainer },
  Progress: { screen: Progress },
  Account: { screen: AccountContainer },
  Measurements: { screen: MeasurementsContainer },
  MeasurementForm: { screen: MeasurementFormContainer },
  Nutrition: { screen: NutritionContainer },
  FoodSearch: { screen: FoodSearchContainer },
  FoodShow: { screen: FoodShow }
},
  { headerMode: 'none' }
);
