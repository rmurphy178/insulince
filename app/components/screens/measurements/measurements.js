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
  Container
} from 'native-base';
import Footer from '../footer/footer';

class Measurements extends Component {
  componentDidMount() {
    this.props.fetchAllMeasurements();
  }

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

    this.handleUpdate = this.handleUpdate.bind(this);
    this.update = this.update.bind(this);
    this.updatePressed = this.updatePressed.bind(this);

  }

  handleUpdate(event) {
    const updateInput = document.getElementById(this.update.name);
    updateInput.classList.remove('hidden');
    updateInput.focus();
  }

  update(event) {

  }

  updatePressed() {
    this.props.update({
      chest: this.state.chest,
      waist: this.state.waist,
      hips: this.state.hips,
      weight: this.state.weight,
      height: this.state.height
    });
    // should this redirect or just update?
  }

  render() {
    return (
      <Image
        source={{ uri: 'https://res.cloudinary.com/malice/image/upload/v1502485970/insulince-gradient_wofrfg.png' }}
        style={ styles.backgroundImage }>
        <KeyboardAvoidingView
          style={styles.view}
          behavior={'padding'}
          >
        <Container>
          <Header>
            <Left>
              <Button transparent onPress={() => this.props.navigation.goBack()}>
                <Icon name="arrow-back" />
              </Button>
            </Left>
            <Body>
              <Title>Nutrition</Title>
            </Body>
            <Right />
          </Header>
          <Content style={{ backgroundColor: 'white' }}>
            <View style={styles.inputsContainer}>

              <View>
                {this.state.errors.map((error, i) => (
                  <Text key={i}>{error}</Text>
                ))}
              </View>
              <Text>{this.state.errors}</Text>

              <View style={styles.container}>
                <Text style={styles.update}>Weight</Text>
                <TouchableOpacity style={styles.updateButton}
                  onPress={this.updatePressed}
                  >
                  <Text style={styles.buttonText}>Edit</Text>
                </TouchableOpacity>
                <Text style={styles.update}>Chest</Text>
                <Text style={styles.update}>Waist</Text>
                <Text style={styles.update}>Hips</Text>
                <Text style={styles.update}>Height</Text>
              </View>

            </View>
          </Content>




        </Container>
        </KeyboardAvoidingView>

        <Footer navigation={ this.props.navigation } />
        </Image>

    );
  }

}

export default Measurements;

const styles = StyleSheet.create({
  view: {
    flex: 1
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover'
  }
});
