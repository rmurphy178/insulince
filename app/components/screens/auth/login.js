import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  KeyboardAvoidingView,
  Image
} from 'react-native';
import { Container, Content, Item, Input, Button, Text, Icon, Toast, Root } from 'native-base';
import Header from '../header/header';



class Login extends Component {
  constructor() {
    super();
    this.state = {
      userCredential: '',
      password: '',
      loginSuccessful: true
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.redirectToSignUp = this.redirectToSignUp.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
    this.foodSearch = this.foodSearch.bind(this);
  }

  foodSearch() {
    this.props.navigation.navigate('FoodSearch');
  }

  handleLogin() {
    this.props.login({
      user_credential: this.state.userCredential,
      password: this.state.password
    })
      .then(() => {
        if (this.props.currentUser) {
          this.props.navigation.navigate('Home');
        } else {
          this.setState({
            loginSuccessful: false
          });
        }
      });
   }


  redirectToSignUp() {
  this.props.navigation.navigate('SignUp');
  this.props.clearErrors();
  }

  handleDemo() {
  this.props.login({
   user_credential: "demo",
   password: "12345678"
  }).then(() => {
   this.props.navigation.navigate('Home');
  });
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
        style={ styles.view }
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
                    placeholder='username or email address'
                    value={ this.state.userCredential }
                    onChangeText={ text => this.setState({
                      userCredential: text,
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
                  style={ this.state.userCredential && this.state.password && this.state.password.length >= 6 ? styles.button : styles.disabledButton }
                  onPress={ this.handleLogin }>
                    <Text>Log In</Text>
                </Button>
                <Button block
                  style={ styles.button }
                  onPress={ this.handleDemo }>
                    <Text>Demo</Text>
                </Button>
                <Text
                  style={ styles.text }>
                    Not a member?
                </Text>
                <Button transparent
                  style={ styles.redirectButton }
                  onPress={ this.redirectToSignUp }>
                    <Text
                      style={ styles.redirectText }>
                      Sign up
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

export default Login;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
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
    backgroundColor: 'transparent',
    opacity: .6
  },
  disabledButton: {
    marginTop: 20,
    opacity: .1
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
