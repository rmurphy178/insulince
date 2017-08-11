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

import { Container } from 'native-base';
import Header from '../header/header';



class Login extends Component {
  constructor() {
    super();
    this.state = {
      userCredential: '',
      password: ''
    };

  this.logInPressed = this.logInPressed.bind(this);
  this.redirectToSignUp = this.redirectToSignUp.bind(this);
  this.handleDemo = this.handleDemo.bind(this);
  }

  logInPressed() {
    this.props.login(this.state)
      .then(() => {
        this.props.navigation.navigate('Home');
      });

   }

   redirectToSignUp() {
    this.props.navigation.navigate('SignUp');
    this.props.clearErrors();
   }

   handleDemo() {
     this.props.login({
       userCredential: "demo",
       password: "12345678"
     }).then(() => {
       this.props.navigation.navigate('Home');
     });
   }

   render() {
     return (
       <Container>
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

       <View style={baseStyles.inputContainer}>
         <TextInput style={baseStyles.input}
          placeholder='userCredential'
          value={this.state.userCredential}
          onChangeText={(text) => this.setState({userCredential: text})}
        />
       </View>

      <View style={baseStyles.inputContainer}>
        <TextInput style={baseStyles.input}
          placeholder='password'
          value={this.state.password}
          secureTextEntry={true}
          onChangeText={(text) => this.setState({password: text})}
        />
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={[baseStyles.buttonContainer, styles.loginButton]}
          onPress={this.logInPressed}
        >
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[baseStyles.buttonContainer, styles.loginButton]}
          onPress={this.redirectToSignUp}>

         <Text style={baseStyles.buttonText}>Not a member? Sign Up!</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[baseStyles.buttonContainer, styles.loginButton]}
         onPress={this.handleDemo}>

          <Text style={baseStyles.buttonText}>Demo Login</Text>
        </TouchableOpacity>

      </View>

       </KeyboardAvoidingView>
       </Container>
     );
   }
}

export default Login;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    flex: 1,
    padding: 60,
    // backgroundColor: '#510847'
  },
  loginButton: {
    marginBottom: 20
  }

});
