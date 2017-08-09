import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';


// Tab Screens

// Stack Screens
import LoginContainer from '../screens/auth/login_container';
import SignUpContainer from '../screens/auth/signup_container';







export const AuthNav = TabNavigator({
  Login: {
    screen: LoginContainer
  },
  SignUp: {
    screen: SignUpContainer
    }
  },
  { headerMode: 'none'}
);
