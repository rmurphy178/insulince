import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import baseStyles from '../styles/styles';

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    };
    this.signUpUser = this.signUpUser.bind(this);
  }

    onSignUpPress() {
      this.state.password === this.state.confirm_password
        this.signUpUser()
    }

    signUpUser() {
      this.props.signup({ username: this.state.username,
                         password: this.state.password
            })
      // .then go to overview
    }

    render() {
      return (
        <View style={styles.container}>
          <View style={styles.inputsContainer}>
            <View style={baseStyles.inputContainer}>
              <TextInput style={baseStyles.input}
                placeholder='email/username'
                onChangeText={(text) => this.setState({username: text})}
              />
            </View>
            <View style={baseStyles.inputContainer}>
              <TextInput style={baseStyles.input}
                placeholder='password'
                secureTextEntry={true}
                onChangeText={(text) => this.setState({password: text})}
              />
            </View>
          </View>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={[baseStyles.buttonContainer, styles.loginButton]}
              onPress={this.onSignUpPress}>
              <Text style={styles.buttonText}>Sign Up!</Text>
            </TouchableOpacity>
          </View>
        </View>
      )
    }
}

export default SignUp

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    flex: 1,
    padding: 60


  },
  loginButton: {
    marginBottom: 40

  }

})
