import React, {Component} from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import baseStyles from '../styles/styles'


class Logout extends Component {
  constructor(props) {
    super(props);
    
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
  //  remove token
  }

  render() {
    return(
      <TouchableOpacity
        style={baseStyles.buttonContainer}
        onPress={this.handleLogout}
      >
        <Text style={baseStyles.buttonText}>Logout</Text>
      </TouchableOpacity>
    )
  }
}

export default Logout
