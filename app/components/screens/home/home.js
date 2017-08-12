import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Header from '../header/header';

import { Container } from 'native-base';


class Home extends React.Component {
    render() {


    return (
      <Container>
      <Header />
      <Text>
        Home
      </Text>
    </Container>
    );
  }
}


// Home.navigationOptions = {
//   title: 'Home Screen',
// };


export default Home;
