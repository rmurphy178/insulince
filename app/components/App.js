import React, { Component } from 'react';
import configureStore from '../store/store';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { AuthNav } from './config/router';
import Expo, { AppLoading } from "expo";
import { StyleProvider } from 'native-base';
import getTheme from '../../native-base-theme/components';



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
          <StyleProvider style={ getTheme() }>
            <AuthNav />
          </StyleProvider>
        </Provider>
      );
    }
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
