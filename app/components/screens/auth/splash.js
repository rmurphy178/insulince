import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import { Icon } from 'react-native-elements';
import { headerContentStyle } from '../styles/styles';
import Header from '../../header/header';

export default class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.goToLogin = this.goToLogin.bind(this);
  }

  // componentWillMount() {
  //   this.getToken();
  // }

  // async getToken() {
  //   try {
  //     let authToken = await this.props.getItem('authToken');
  //     if(!authToken) {
  //       console.log("Token not set");
  //       this.props.navigation.navigate('LogIn');
  //     } else {
  //       this.verifyToken(authToken)
  //     }
  //   } catch(error) {
  //     console.log("Something went wrong");
  //   }
  // }

  // async verifyToken(authToken) {
  //   try {
  //     let response = await fetch('https://later-chat.herokuapp.com/api/verify?session%5Baccess_token%5D='+authToken);
  //     let res = await response.text();
  //     if (response.status >= 200 && response.status < 300) {
  //       let userSession = await fetch('https://later-chat.herokuapp.com/api/session?auth_token%5D='+authToken);
  //       let sessionRes = await userSession.json();
  //       if(!sessionRes.leaders) {
  //         sessionRes.leaders = {}
  //       }
  //       if(!sessionRes.followers) {
  //         sessionRes.followers = {}
  //       }
  //       this.props.receiveCurrentUser(sessionRes);
  //       //Verified authToken means user is logged in so we redirect him to home.
  //       this.props.navigation.navigate('Tabs');
  //     } else {
  //       //Handle error
  //       this.props.navigation.navigate('Login');
  //       let error = res;
  //       throw error;
  //     }
  //   } catch(error) {
  //     console.log("error response: " + error);
  //   }
  // }

  goToLogin(){
    this.props.navigation.navigate('LoginContainer');
  }

  render () {
    return(
      <View style={{ flex: 1 }}>
        <Header />
        <Text>
          Welcome to Insulince!
        </Text>
    </View>
    );
  }
 }
