import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  KeyboardAvoidingView
} from 'react-native';
// import baseStyles from '../styles/styles';
import { Container, Content, Item, Input, Button, Text, Icon, Toast, Root } from 'native-base';

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
   userCredential: "demo",
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
             <Item error={ this.state.loginSuccessful ? false : true }>
               <Input
                 style={ styles.input }
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
               <Item error={ this.state.loginSuccessful ? false : true }>
                 <Input
                   style={ styles.input }
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
                 <Text
                   style={ styles.redirectText }
                   onPress={ this.redirectToSignUp }>
                   Sign up!
                 </Text>
               </Content>
             </Container>
       </Root>
    </KeyboardAvoidingView>
   );
  }
}

export default Login;

const styles = StyleSheet.create({
  view: {
    justifyContent: 'flex-end',
    flex: 1,
    padding: 20,
    // backgroundColor: '#510847',
  },
  input: {
    color: '#FFFFFF'
  },
  button: {
    marginTop: 20,
    borderRadius: 7
  },
  text: {
    textAlign: 'center',
    color: '#FFFFFF',
    marginTop: 20,
  },
  redirectText: {
    textAlign: 'center',
    fontWeight: '700',
    color: '#FFFFFF'
  },
  iconHidden: {
    opacity: 0
  },
  iconShow: {
    opacity: 100
  }
});
