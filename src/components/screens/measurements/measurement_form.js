import React, { Component } from 'react';
import { StyleSheet, Image, KeyboardAvoidingView } from 'react-native';
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
  Container,
  Separator,
  ListItem,
  List,
  Form,
  Item,
  Label,
  Input
} from 'native-base';
import header from '../header/header';
import Footer from '../footer/footer';

class MeasurementForm extends Component {
  constructor() {
    super();
    this.state = {
      chest: '',
      waist: '',
      hips: '',
      weight: '',
      height: ''

    };

    this.addMeasurement = this.addMeasurement.bind(this);
  }

  addMeasurement() {
    this.props
  }



  render() {
    return (
      <Image
        source={{ uri: 'https://res.cloudinary.com/malice/image/upload/v1502485970/insulince-gradient_wofrfg.png' }}
        style={ styles.backgroundImage }>
        <KeyboardAvoidingView
          style={styles.view}
          behavior={'padding'}>
          <Container>
            <Header>
              <Left>
                <Button transparent onPress={() => this.props.navigation.goBack()}>
                  <Icon name="arrow-back" />
                </Button>
              </Left>
              <Body>
                <Title>Add Measurements</Title>
              </Body>
              <Right />
            </Header>
            <Content style={{ backgroundColor: 'white' }}>

            <Form>
              <Item floatingLabel>
                <Label>Weight</Label>
                <Input
                 />
              </Item>
              <Item floatingLabel>
                <Label>Chest</Label>
                <Input
                onChangeText={ text =>
                  this.addMeasurement(text, 'chest') } />/>
              </Item>
              <Item floatingLabel>
                <Label>Waist</Label>
                <Input
                onChangeText={ text =>
                  this.addMeasurement(text, 'waist') } /> />
              </Item>
              <Item floatingLabel>
                <Label>Hips</Label>
                <Input
                onChangeText={ text =>
                  this.addMeasurement(text, 'hips') } /> />
              </Item>
              <Item floatingLabel last>
                <Label>Height</Label>
                <Input
                onChangeText={ text =>
                  this.addMeasurement(text, 'height') } />/>
              </Item>
            </Form>
            <Button block warning style={ styles.newbutton }
                    onPress={() => this.props.navigation.goBack()}>
              <Text>
              onPress={ this.addMeasurement('Add') }
              Add
              </Text>
            </Button>



          </Content>
        </Container>
      </KeyboardAvoidingView>
    </Image>
    );
  }
}

export default MeasurementForm;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    flex: 1,
    padding: 60
    // backgroundColor: '#510847'
  },
  newbutton: {
    marginTop: 40
    // marginBottom: 20
  },
  text: {
    // textAlign: center
  }

});
