import React, { Component } from 'react';
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Text,
  Icon,
  Left,
  Body,
  Right,
  Button,
  Title
} from 'native-base';
import { Image, StyleSheet } from 'react-native';
import Footer from '../footer/footer';

export default class Account extends Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    this.props.logout()
      .then(this.props.navigation.navigate('Login'));
  }

  render() {
    return (
      <Image
        source={{ uri: 'https://res.cloudinary.com/malice/image/upload/v1502485970/insulince-gradient_wofrfg.png' }}
        style={ styles.backgroundImage }>
        <Container>
          <Header>
            <Left>
              <Button transparent onPress={() => this.props.navigation.goBack()}>
                <Icon name="arrow-back" />
              </Button>
            </Left>
            <Body>
              <Title>Your Account</Title>
            </Body>
            <Right />
          </Header>
          <Content style={ styles.content }>
            <List>
              <ListItem icon>
                <Left>
                  <Icon name="ios-person" />
                </Left>
                <Body>
                  <Text>{ this.props.currentUser.username }</Text>
                </Body>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
              <ListItem icon>
                <Left>
                  <Icon name="ios-mail" />
                </Left>
                <Body>
                  <Text>{ this.props.currentUser.email }</Text>
                </Body>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
              <ListItem icon>
                <Left>
                  <Icon name="ios-key" />
                </Left>
                <Body>
                  <Text>Change your password</Text>
                </Body>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
              <ListItem icon
                onPress={ this.handleLogout }>
                <Left>
                  <Icon name="ios-log-out" />
                </Left>
                <Body>
                  <Text>Log out</Text>
                </Body>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
            </List>
          </Content>
          <Footer navigation={ this.props.navigation } />
        </Container>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover'
  },
  content: {
    backgroundColor: 'white'
  }
});
