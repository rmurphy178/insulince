import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native';
import Footer from '../footer/footer';
import { Container } from 'native-base';

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
      <Container>

        <KeyboardAvoidingView
          style={styles.container}
          behavior={'padding'}
          >
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
        </KeyboardAvoidingView>
        <Footer navigation={ this.props.navigation } />
      </Container>
    );
  }

}

export default Measurements;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    flex: 1,
    padding: 60,
    // backgroundColor: '#510847'
  }

});
