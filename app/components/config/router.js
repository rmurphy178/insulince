import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

// Tab Screens

// Stack Screens
import LoginContainer from '../screens/auth/login_container';
import SignUpContainer from '../screens/auth/signup_container';
import SplashScreenContainer from '../screens/auth/splash_container';





export const AuthNav = StackNavigator({
  Login: {
    screen: LoginContainer
  },
  SplashScreenContainer: {
    screen: SplashScreenContainer
  },
  SignUpContainer: {
    screen: SignUpContainer
  }
},
{ headerMode: 'none' }
);
