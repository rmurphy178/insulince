import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';


import Header from '../header/header';

// Tab Screens
import Home from '../screens/home/home';
import JournalEntriesContainer from '../screens/journal_entries/journal_entries_container';
import MeasurementsContainer from '../screens/measurement/measurement_container';
import FoodSearchContainer from '../screens/food_search/food_search_container';

// Stack Screens
import LoginContainer from '../screens/auth/login_container';
import SignUpContainer from '../screens/auth/signup_container';
import SplashScreenContainer from '../screens/auth/splash_container';
import MacroTrackerContainer from '../screens/macro_tracker/macro_tracker_container';


// JournalEntries: { screen: JournalEntriesContainer},
// FoodSearch: { screen: FoodSearchContainer },
// Measurements: { screen: MeasurementsContainer },


//
// export const Tabs = TabNavigator({
//
// });

//
// const navigationOptions = {
//   title: ({ state }) => state.routeName,
//   header: ({ navigate }) => ({
//     left: (
//       <IconToggle
//         onPress={() => navigate('Home')}
//       />
//     ),
//   }),
// };


export const Tabs = TabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarIcon: () => <Icon name='ios-planet-outline' size={30} type={'ionicon'} />
    }
  },
  JournalEntries: {
    screen: JournalEntriesContainer,
    navigationOptions: {
      tabBarIcon: () => <Icon name='ios-search-outline' size={30} type={'ionicon'} />
    }
  },
  'Fab': {
    screen: LoginContainer,
    navigationOptions: {
      tabBarIcon: () => <Icon name='ios-add-circle-outline' size={30} type={'ionicon'} />
    }
  },
  Measurements: {
    screen: MeasurementsContainer,
    navigationOptions: {
      tabBarIcon: () => <Icon name='ios-navigate-outline' size={30} type={'ionicon'} />
    }
  },
  FoodSearch: {
    screen: FoodSearchContainer,
    navigationOptions: {
      tabBarIcon: () => <Icon name='md-person' size={30} type={'ionicon'} />
    }
  }
});

export const AuthNav = StackNavigator({
  // Home: { screen: Home },
  // Splash: { screen: SplashScreenContainer },
  Login: { screen: LoginContainer },
  SignUp: { screen: SignUpContainer},
  Tabs: { screen: Tabs },
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
