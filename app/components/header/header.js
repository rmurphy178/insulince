import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native';
import baseStyles from '../screens/styles/styles';



export default class Header extends React.Component {
  constructor(props){
  super(props);

}




  render() {
    const { textStyle, viewStyle } = styles;
  return (
     <View style={viewStyle}>
        <Text style={textStyle}>
          Insulince
       </Text>
     </View>
    );
  }
}


const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'

  },
  textStyle: {
    fontSize: 20
  }
});
