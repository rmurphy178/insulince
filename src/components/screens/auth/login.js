import React, { Component } from 'react';
import {
  StyleSheet,
  KeyboardAvoidingView,
  Image,
  StatusBar
} from 'react-native';
import {
  Container,
  Content,
  Item,
  Input,
  Button,
  Text,
  Icon,
  Toast,
  Root,
  View
} from 'native-base';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      userCredential: '',
      password: '',
      loginSuccessful: true
    };
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.redirectToSignUp = this.redirectToSignUp.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  handleUpdate(text, key) {
    return () => this.setState({
      [key]: text,
      loginSuccessful: true
    });
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
            loginSuccessful: false,
            userCredential: '',
            password: ''
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
          <Root>
            <StatusBar barStyle="light-content" />
            <Container>
              <Content>
                <View>
                  {
                  this.displayErrors()
                  }
                </View>
                <Container style={ styles.container }>
                  <Image
                    source={{ uri: 'https://res.cloudinary.com/malice/image/upload/v1502605519/insulince-logo.png' }}
                    style={ styles.logo } />
                  <Item
                    error={ this.state.loginSuccessful ? false : true }>
                    <Input
                      style={ styles.input }
                      placeholderTextColor='white'
                      placeholder='username or email address'
                      onChangeText={ text =>
                        this.handleUpdate(text, 'userCredential') } />
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
                      onChangeText={ text =>
                        this.handleUpdate(text, 'password') } />
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
                  <View>
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
                  </View>
                </Container>
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
  },
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 80,
    paddingBottom: 80
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover'
  },
  logo: {
    width: 288,
    height: 69
  },
  input: {
    color: '#FFFFFF',
    opacity: .6
  },
  button: {
    backgroundColor: '#2A132B',
    opacity: .6,
  },
  disabledButton: {
    opacity: .1
  },
  text: {
    color: '#FFFFFF',
    opacity: .6,
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
