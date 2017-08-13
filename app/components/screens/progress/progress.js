import React, { Component } from 'react';
import MeasurementsContainer from '../measurement/measurement_container';
import MacroTrackerContainer from '../macro_tracker/macro_tracker_container';
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

export default class Progress extends Component {
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
        </Content>
      </Container>
    );
  }
}
