import React, { Component } from 'react';
import configureStore from '../store/store';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Provider } from 'react-redux';
// import { StackNavigator } from 'react-navigation';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.store = configureStore();
  }

  render () {
    window.store = this.store;
    return (
      <Provider store={this.store}>
        <View style={styles.container}>
          <Text>Insulince</Text>
          <Text>Open up App.js to start working on your app!</Text>
          <Text>Changes you make will automatically reload.</Text>
          <Text>Shake your phone to open the developer menu.</Text>
        </View>
      </Provider>
    );
  }
}


//
// const Test = StackNavigator({
//   App: { screen: App },
// });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
