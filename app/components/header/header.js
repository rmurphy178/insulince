import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native';



export default class Header extends React.Component {
  constructor(props){
  super(props);
}

  render() {
    const { textStyle, viewStyle } = styles;
    const { goBack } = this.props.navigation;
  return (
      <View style={viewStyle}>
        <Text style={textStyle}>{this.props.headerText}</Text>
          <Button
             onPress={() => goBack()}
             title="Go back"
           />
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
