import React, {Component} from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import { Icon } from 'react-native-elements';

export default class SplashScreen extends Component {
  constructor(props) {
    super(props);
  }

  // componentWillMount() {
  //   this.getToken();
  // }
  //
  // async getToken() {
  //   try {
  //     let authToken = await this.props.getItem('token');
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

  // async verifyToken(token) {
  //   try {
  //     let response = await fetch('https://later-chat.herokuapp.com/api/verify?session%5Baccess_token%5D='+token);
  //     let res = await response.text();
  //     if (response.status >= 200 && response.status < 300) {
  //       let userSession = await fetch('https://later-chat.herokuapp.com/api/session?auth_token%5D='+token);
  //       let sessionRes = await userSession.json();
  //       if(!sessionRes.leaders) {
  //         sessionRes.leaders = {}
  //       }
  //       if(!sessionRes.followers) {
  //         sessionRes.followers = {}
  //       }
  //       this.props.receiveCurrentUser(sessionRes);
  //       //Verified token means user is logged in so we redirect him to home.
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


  render () {
    return(
      <View>
      </View>
    );
  }
 }
