import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native';
import baseStyles from '../styles/styles';

class Measurements extends Component {
  constructor() {
    super();
    this.state = {
      chest: '',
      waist: '',
      hips: '',
      weight: '',
      height: '',
      errors: []
    }

    this.updatePressed = this.updatePressed.bind(this);
  }

  handleUpdate(event) {
    const updateInput = document.getElementById(this.update.name);
    updateInput.classList.remove('hidden');
    updateInput.focus();
  }

  update(event) {
    const key = event.keyCode;
    if (key === 13) {
      this.props.updateTag(event.currentTarget.id, this.state)
        .then(() => {
          document.getElementById(this.props.tag.name).classList.add('hidden');
        }, errors => this.setState({
            name: this.props.tag.name
          }));
    }
  }

  updatePressed() {
    this.props.update({
      chest: this.state.chest,
      waist: this.state.waist,
      hips: this.state.hips,
      weight: this.state.weight,
      height: this.state.height
    })
    // should this redirect or just update?
  }

  render() {
    return (
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






        </View>
      </KeyboardAvoidingView>
    )
  }

}

export default Measurements;
