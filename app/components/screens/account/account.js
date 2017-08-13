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
} from 'native-base';

export default class ListIconExample extends Component {
  render() {
    return (
      <Content>
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
          <ListItem icon>
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
    );
  }
}
