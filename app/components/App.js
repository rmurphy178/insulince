import React, { Component } from 'react';
import configureStore from '../store/store';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Provider } from 'react-redux';
import { AuthNav } from './config/router';
import AppWithNavigationState from './appNavigator/app_navigator';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.store = configureStore();

  }

  render () {
    return (
      <Provider store={this.store}>
        <AppWithNavigationState />      
      </Provider>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
