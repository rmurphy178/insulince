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
                 value={this.state.weight}/>
              </Item>
              <Item floatingLabel>
                <Label>Chest</Label>
                <Input
                value={this.state.chest} />
              </Item>
              <Item floatingLabel>
                <Label>Waist</Label>
                <Input
                value={this.state.waist} />
              </Item>
              <Item floatingLabel>
                <Label>Hips</Label>
                <Input
                value={this.state.hips} />
              </Item>
              <Item floatingLabel last>
                <Label>Height</Label>
                <Input
                value={this.state.height}/>
              </Item>
            </Form>
            <Button block warning style={ styles.newbutton }
            onClick={this.addMeasurement()}
                    onPress={() => this.props.navigation.goBack()}>
              <Text>
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
