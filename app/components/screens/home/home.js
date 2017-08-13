import React, { Component } from 'react';
import {
  Content,
  Text,
  View,
  Header,
  Left,
  Icon,
  Button,
  Body,
  Title,
  Right,
  Container
} from 'native-base';
import Footer from '../footer/footer';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Insulince</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Text>Home</Text>
        </Content>
        <Footer navigation={ this.props.navigation } />
      </Container>
    );
  }
}

export default Home;
