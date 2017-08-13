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
    this.redirectToNutrition = this.redirectToNutrition.bind(this);
    this.redirectToMeasurements = this.redirectToMeasurements.bind(this);
  }

  redirectToNutrition() {
    this.props.navigation.navigate('Nutrition');
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
          <Button full transparent
            onPress={ this.redirectToNutrition }
            style={ styles.nutritionButton }>
            <Text style={ styles.buttonText }>
              Nutrition
            </Text>
          </Button>
          <Button full transparent
            onPress={ this.redirectToMeasurements }
            style={ styles.measurementButton }>
            <Text style={ styles.buttonText }>
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
  nutritionButton: {
    flex: 1
  },
  measurementButton: {
    flex: 1
  },
  buttonText: {
    fontSize: 20,
    color: 'white'
  }
});
