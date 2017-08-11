import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

// Tab Screens

// Stack Screens
import LoginContainer from '../screens/auth/login_container';
import SignUpContainer from '../screens/auth/signup_container';
import SplashScreenContainer from '../screens/auth/splash_container';
import JournalEntriesContainer from '../screens/journal_entries/journal_entries_container';
import FoodSearchContainer from '../screens/food_search/food_search_container';
import MeasurementsContainer from '../screens/measurement/measurement_container';
import Home from '../screens/home/home';
import MacroTrackerContainer from '../screens/macro_tracker/macro_tracker_container';



//
// export const Tabs = TabNavigator({
//
// });

export const AuthNav = StackNavigator({
  // Splash: { screen: SplashScreenContainer },
  Login: { screen: LoginContainer },
  SignUp: { screen: SignUpContainer},
  Home: { screen: Home },
  JournalEntries: { screen: JournalEntriesContainer},
  FoodSearch: { screen: FoodSearchContainer },
  Measurements: { screen: MeasurementsContainer },
  MacroTracker: { screen: MacroTrackerContainer }

},
    { headerMode: 'none' }
  );


// home
//
// journal
//
// measurements
//
// user/profile
