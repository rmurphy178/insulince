import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import { Icon } from 'react-native-elements';
import { headerContentStyle } from '../styles/styles';
import Header from '../../header/header';


class Home extends React.Component {
    render() {
    return (
      <View style={{ flex: 1 }}>
        <Header />
        <Text>Insulince Home/Overview</Text>
    </View>
    );
  }
}


export default Home;
