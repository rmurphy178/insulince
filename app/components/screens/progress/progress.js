import React, { Component } from 'react';
import {
  Content,
  Text,
  Container,
  Header,
  Left,
  Button,
  Icon,
  Right,
  Body,
  Title
} from 'native-base';
import Footer from '../footer/footer';

export default class Progress extends Component {
  constructor(props) {
    super(props);
    this.redirectToMeasurements = this.redirectToMeasurements.bind(this);
  }

  redirectToMeasurements() {
    this.props.navigation.navigate('Measurements');
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
            <Title>Progress</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Text>Progress</Text>
          <Button
            onPress={ this.redirectToMeasurements }>
            <Text>Measurements</Text>
          </Button>
        </Content>
        <Footer navigation={ this.props.navigation } />
      </Container>
    );
  }
}
