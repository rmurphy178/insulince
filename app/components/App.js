import React, { Component } from 'react';
import configureStore from '../store/store';
import {
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';
import { Provider } from 'react-redux';
import { AuthNav } from './config/router';
import Expo, { AppLoading } from "expo";
import { Root } from "native-base";


export default class App extends Component {

  constructor(props) {
    super(props);
    this.store = configureStore();
    this.state = {
      ready: false
    }
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
    });
    this.setState({ ready: true });
  }

  render () {
    if (!this.state.ready) {
      return <AppLoading />;
    } else {
      return (
        <Provider store={this.store}>
          <Root>
            <StatusBar hidden={true} />
            <AuthNav />
          </Root>
        </Provider>
      );
    }
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
