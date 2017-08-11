import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Header from '../header/header';


class Home extends React.Component {
    render() {


    return (
      <View>
      <Header />
      <Text>
        Home
      </Text>
      </View>
    );
  }
}


// Home.navigationOptions = {
//   title: 'Home Screen',
// };


export default Home;
