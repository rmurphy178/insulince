import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

// Tab Screens

// Stack Screens
import LoginContainer from '../screens/auth/login_container';
import SignUpContainer from '../screens/auth/signup_container';
import SplashScreenContainer from '../screens/auth/splash_container';
import JournalEntriesContainer from '../screens/journal_entries/journal_entries_container';
import Home from '../screens/home/home';




export const AuthNav = StackNavigator({
  Login: { screen: LoginContainer },
  SignUp: { screen: SignUpContainer},
  Home: { screen: Home },
  // JournalEntries: { screen: JournalEntriesContainer}
},
    { headerMode: 'none' }
  );
