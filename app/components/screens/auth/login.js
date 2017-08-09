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

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      errors: []
    };

  this.logInPressed = this.logInPressed.bind(this);
  this.redirectToSignUp = this.redirectToSignUp.bind(this);
  }

  logInPressed() {
    this.props.login({ username: this.state.username,
                       password: this.state.password
          })
        .then(currentUser => {
          if (currentUser) {
            return this.props.navigation.navigate('Home');
          }
        });

   }

   redirectToSignUp() {
    this.props.navigation.navigate('SignUpContainer');
   }

   render() {
     return (
       <KeyboardAvoidingView
       style={styles.container}
       behavior={'padding'}
       >

       <View>
         {this.state.errors.map((error, i) => (
           <Text key={i}>{error}</Text>
         ))}
       </View>
       <Text>{this.state.errors}</Text>

       <View style={baseStyles.inputContainer}>
         <TextInput style={baseStyles.input}
          placeholder='username'
          value={this.state.username}
          onChangeText={(text) => this.setState({username: text})}
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
