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
    this.setState
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
      
            </Form>
            <Button block warning style={ styles.newbutton }
                    onPress={() => this.props.navigation.goBack()}>
              <Text>
              onClick={this.addMeasurement()}
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
