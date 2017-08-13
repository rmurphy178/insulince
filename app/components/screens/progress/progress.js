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
import { StyleSheet, Image } from 'react-native';
import Footer from '../footer/footer';

export default class Progress extends Component {
  constructor(props) {
    super(props);
    this.redirectToMeasurements = this.redirectToMeasurements.bind(this);
  }

  redirectToMacroTracker() {
    this.props.navigation.navigate('MacroTracker');
  }

  redirectToMeasurements() {
    this.props.navigation.navigate('Measurements');
  }

  render() {
    return (
      <Image
      source={{ uri: 'https://res.cloudinary.com/malice/image/upload/v1502485970/insulince-gradient_wofrfg.png' }}
      style={ styles.backgroundImage }>
        <Container style={{ flexDirection: 'column' }}>
          <Header>
            <Left>
              <Button transparent
                onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
              </Button>
            </Left>
            <Body>
              <Title>Progress</Title>
            </Body>
            <Right />
          </Header>
          <Button full
            onPress={ this.redirectToMacroTracker }
            style={ styles.macroButton }>
            <Text>
              Macro Tracker
            </Text>
          </Button>
          <Button full
            onPress={ this.redirectToMeasurements }
            style={ styles.measurementButton }>
            <Text>
              Measurements
            </Text>
          </Button>
          <Footer navigation={ this.props.navigation } />
        </Container>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover'
  },
  macroButton: {
    flex: 1,
    backgroundColor: 'transparent'
  },
  measurementButton: {
    flex: 1,
    backgroundColor: 'transparent'
  }
});
