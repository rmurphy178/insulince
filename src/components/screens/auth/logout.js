import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import baseStyles from '../styles/styles';
import AYSNC from '../../../util/aync_util';


class Logout extends Component {
  constructor(props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    AYSNC.removeItem('token')
      .then(this.props.navigation.navigate('Login'));
  }

  render() {
    return(
      <TouchableOpacity
        style={baseStyles.buttonContainer}
        onPress={this.handleLogout}
      >
        <Text style={baseStyles.buttonText}>Logout</Text>
      </TouchableOpacity>
    );
  }
}

export default Logout;
