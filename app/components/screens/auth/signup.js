import React, { Component } from 'react';
import {
  View,
  Image,
  StatusBar,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native';
import { Container, Content, Item, Input, Button, Text, Icon, Toast, Root } from 'native-base';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      loginSuccessful: true
    };
    this.signUpUser = this.signUpUser.bind(this);
    this.redirectToLogin = this.redirectToLogin.bind(this);
  }

    signUpUser() {
      this.props.signUp({
        username: this.state.username,
        email: this.state.email,
        password: this.state.password
      })
        .then(() => {
          if (this.props.currentUser) {
            this.props.navigation.navigate('Home');
          }
        });
    }

    redirectToLogin() {
      this.props.navigation.navigate('Login');
      this.props.clearErrors();
    }

    displayErrors() {
      if (this.props.errors.length > 0) {
        this.props.errors.map((error, i) => (
         Toast.show({
           text: error,
           position: 'top',
           buttonText: 'Okay',
           type: 'danger',
           duration: 3000
         })));
         this.props.clearErrors();
       }
    }

    render() {
      return (
        <Image
        source={{ uri: 'https://res.cloudinary.com/malice/image/upload/v1502485970/insulince-gradient_wofrfg.png' }}
        style={ styles.backgroundImage }>
          <KeyboardAvoidingView
          style={ styles.container }
          behavior={ 'padding' }>
            <StatusBar hidden={true} />
            <Root>
              <Container>
                <Content>
                  <View>
                    {
                    this.displayErrors()
                    }
                  </View>
                  <Item
                    error={ this.state.loginSuccessful ? false : true }>
                    <Input
                      style={ styles.input }
                      placeholderTextColor='white'
                      placeholder='username'
                      value={ this.state.userCredential }
                      onChangeText={ text => this.setState({
                        username: text,
                        loginSuccessful: true
                        }) } />
                    <Icon
                      style={ this.state.loginSuccessful ? styles.iconHidden : styles.iconShow }
                      name='close-circle' />
                  </Item>
                  <Item
                    error={ this.state.loginSuccessful ? false : true }>
                    <Input
                      style={ styles.input }
                      placeholderTextColor='white'
                      placeholder='email address'
                      value={ this.state.userCredential }
                      onChangeText={ text => this.setState({
                        email: text,
                        loginSuccessful: true
                        }) } />
                      <Icon
                        style={ this.state.loginSuccessful ? styles.iconHidden : styles.iconShow }
                        name='close-circle' />
                  </Item>
                  <Item
                    error={ this.state.loginSuccessful ? false : true }>
                    <Input
                      style={ styles.input }
                      placeholderTextColor='white'
                      secureTextEntry={ true }
                      placeholder='password'
                      value={ this.state.password }
                      onChangeText={ text => this.setState({
                        password: text,
                        loginSuccessful: true
                        }) } />
                    <Icon
                      style={ this.state.loginSuccessful ? styles.iconHidden : styles.iconShow }
                      name='close-circle' />
                  </Item>
                  <Button block
                    disabled={ this.state.userCredential && this.state.password && this.state.password.length >= 6 ? false : true }
                    style={ styles.button }
                    onPress={ this.signUpUser }>
                      <Text>Sign Up</Text>
                  </Button>
                  <Text
                    style={ styles.text }>
                      Already a member?
                  </Text>
                  <Button transparent
                    style={ styles.redirectButton }
                    onPress={ this.redirectToLogin }>
                      <Text
                        style={ styles.redirectText }>
                        Login
                      </Text>
                  </Button>
                </Content>
              </Container>
            </Root>
          </KeyboardAvoidingView>
        </Image>
      );
    }
}

export default SignUp;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    padding: 40
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover'
  },
  input: {
    color: '#FFFFFF',
    opacity: .6
  },
  button: {
    marginTop: 20,
    backgroundColor: '#2A132B',
    opacity: .6
  },
  text: {
    color: '#FFFFFF',
    opacity: .6,
    marginTop: 20,
    textAlign: 'center'
  },
  redirectButton: {
    alignSelf: 'center'
  },
  redirectText: {
    color: '#FFFFFF',
    opacity: .6,
    textAlign: 'center'
  },
  iconHidden: {
    opacity: 0
  },
  iconShow: {
    opacity: 1
  }
});
