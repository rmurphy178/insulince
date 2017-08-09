import React, { Component } from 'react';
import configureStore from '../store/store';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Provider } from 'react-redux';
<<<<<<< HEAD
=======
// import  SignUp from './screens/auth/signup';
// import  Login from './screens/auth/login';
>>>>>>> 937bad76dcc538cb64366ccfed6093dce8ec32d9
import { AuthNav } from './config/router';



export default class App extends Component {
  constructor(props) {
    super(props);
    this.store = configureStore();

  }

  render () {
    return (
      <Provider store={this.store}>
<<<<<<< HEAD
        <AuthNav />
=======


        <AuthNav />


>>>>>>> 937bad76dcc538cb64366ccfed6093dce8ec32d9
      </Provider>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
