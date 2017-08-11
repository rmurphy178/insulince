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

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''
    };
    this.signUpUser = this.signUpUser.bind(this);
    this.redirectToLogin = this.redirectToLogin.bind(this);
  }

    signUpUser() {
      this.props.signUp(this.state);
    }

    redirectToLogin() {
      this.props.navigation.navigate('Login');
      this.props.clearErrors();
    }

    render() {
      return (
          <KeyboardAvoidingView
            style={styles.container}
            behavior={'padding'}
            >

          <View>
            {this.props.errors.map((error, i) => (
              <Text key={i}>{error}</Text>
            ))}
          </View>
          <Text>{this.state.errors}</Text>

          <View style={styles.inputsContainer}>
            <View style={baseStyles.inputContainer}>
              <TextInput style={baseStyles.input}
                placeholder='username'
                onChangeText={(text) => this.setState({username: text})}
              />
            </View>
            <View style={baseStyles.inputContainer}>
              <TextInput style={baseStyles.input}
                placeholder='email'
                onChangeText={(text) => this.setState({email: text})}
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
              onPress={this.signUpUser}>
              <Text style={styles.buttonText}>Sign Up!</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[baseStyles.buttonContainer, styles.loginButton]}
              onPress={this.redirectToLogin}>

             <Text style={baseStyles.buttonText}>Already a member? Login!</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      );
    }
}

export default SignUp;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    flex: 1,
    padding: 60


  },
  loginButton: {
    marginBottom: 40

  }

});
