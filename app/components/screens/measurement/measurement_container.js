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

  editTag(event) {
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
