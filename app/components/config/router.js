import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

// Tab Screens

// Stack Screens
import LoginContainer from '../screens/auth/login_container';
import SignUpContainer from '../screens/auth/signup_container';




export const AuthNav = StackNavigator({
  Login: {
    screen: LoginContainer
  },
  SignUp: {
    screen: SignUpContainer
    }
  },
  { headerMode: 'none'}
);
