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

    this.editPressed = this.editPressed.bind(this);
  }

  handleEdit(event) {
    const editInput = document.getElementById(this.edit.name);
    editInput.classList.remove('hidden');
    editInput.focus();
  }

  editPressed() {
    this.props.edit({
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

    )
  }

}
