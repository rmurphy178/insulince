import React, { Component } from "react";
import { StyleSheet } from 'react-native';
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Footer,
  FooterTab,
  Text,
  Body,
  Left,
  Right,
  Icon,
  Fab,
  View
} from "native-base";

export default class FooterNav extends Component {
  componentWillMount() {
    let activeTab;
    if (this.props.navigation.state.routeName === 'Home') activeTab = 'tab1';
    if (this.props.navigation.state.routeName === 'JournalEntries') activeTab = 'tab2';
    if (this.props.navigation.state.routeName === 'Progress') activeTab = 'tab3';
    if (this.props.navigation.state.routeName === 'Account') activeTab = 'tab4';
    this.setState({
      [activeTab]: true
    });
  }

  constructor(props) {
    super(props);
    this.state = {
      tab1: false,
      tab2: false,
      tab3: false,
      tab4: false,
      add: false
    };
  }

  toggleTab1() {
    this.setState({
      tab1: true,
      tab2: false,
      tab3: false,
      tab4: false,
      add: false
    }, () => {
      if (this.props.navigation.state.routeName !== 'Home') {
        this.props.navigation.navigate('Home');
      }
    });
  }

  toggleTab2() {
    this.setState({
      tab1: false,
      tab2: true,
      tab3: false,
      tab4: false,
      add: false
    }, () => {
      if (this.props.navigation.state.routeName !== 'JournalEntries') {
        this.props.navigation.navigate('JournalEntries');
      }
    });
  }

  toggleTab3() {
    this.setState({
      tab1: false,
      tab2: false,
      tab3: true,
      tab4: false,
      add: false
    }, () => {
      if (this.props.navigation.state.routeName !== 'Progress') {
        this.props.navigation.navigate('Progress');
      }
    });
  }

  toggleTab4() {
    this.setState({
      tab1: false,
      tab2: false,
      tab3: false,
      tab4: true,
      add: false
    }, () => {
      if (this.props.navigation.state.routeName !== 'Account') {
        this.props.navigation.navigate('Account');
      }
    });
  }

  toggleAdd() {
    this.setState({
      tab1: false,
      tab2: false,
      tab3: false,
      tab4: false,
      add: true
    });
  }

  render() {
    return (
        <Footer>
          <FooterTab>
            <Button
              active={ this.state.tab1 }
              onPress={() => this.toggleTab1()}>
              <Icon
                active={ this.state.tab1 }
                name="ios-home" />
              <Text>Home</Text>
            </Button>
            <Button
              active={ this.state.tab2 }
              onPress={() => this.toggleTab2()}>
              <Icon
                active={ this.state.tab2 }
                name="ios-bookmarks" />
              <Text>Entries</Text>
            </Button>
            <Button
              active={ this.state.add }
              onPress={() => this.toggleAdd()}>
              <Icon
                active={ this.state.add }
                name="ios-add-circle" />
            </Button>
            <Button
              active={ this.state.tab3 }
              onPress={() => this.toggleTab3()}>
              <Icon
                active={ this.state.tab3 }
                name="ios-stats" />
              <Text>Progress</Text>
            </Button>
            <Button
              active={ this.state.tab4 }
              onPress={() => this.toggleTab4()}>
              <Icon
                active={ this.state.tab4 }
                name="ios-person" />
              <Text>Account</Text>
            </Button>
          </FooterTab>
        </Footer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF"
  },
  text: {
    alignSelf: "center",
    marginBottom: 7
  },
  mb: {
    marginBottom: 15
  }
});
