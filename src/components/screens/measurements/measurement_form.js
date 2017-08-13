import React, { Component } from 'react';
import { Container, Content, Form, Item, Input, Label, Icon, Button } from 'native-base';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  List,
  ListItem,
  Text,
  Separator,
  Left,
  Right,
  Title,
  Body,
  Image,
  Spinner
} from 'react-native';
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
      height: '',
      errors: []
    };

    this.update = this.update.bind(this);
    this.updatePressed = this.updatePressed.bind(this);

  }


  update(event) {

  }

  updatePressed() {
    this.setState ({
      chest: this.state.chest,
      waist: this.state.waist,
      hips: this.state.hips,
      weight: this.state.weight,
      height: this.state.height

    });
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
                <Title>Measurements</Title>
              </Body>
              <Right />
            </Header>
            <Content style={{ backgroundColor: 'white' }}>



      <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
      >
        <Container>
        <Text style={styles.text}> Add New Measurements </Text>
          <Content>
            <Form>
              <Item floatingLabel>
                <Label>Weight</Label>
                <Input />
              </Item>
              <Item floatingLabel>
                <Label>Chest</Label>
                <Input />
              </Item>
              <Item floatingLabel>
                <Label>Waist</Label>
                <Input />
              </Item>
              <Item floatingLabel>
                <Label>Hips</Label>
                <Input />
              </Item>
              <Item floatingLabel last>
                <Label>Height</Label>
                <Input />
              </Item>
            </Form>
            <Button block warning style={ styles.newbutton }
                    onPress={() => this.props.navigation.goBack()}>
              <Text>Add</Text>
            </Button>
          </Content>
        </Container>
      </KeyboardAvoidingView>
    );
  }
}

export default MeasurementForm;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    flex: 1,
    padding: 60,
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
