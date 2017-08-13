import React, { Component } from 'react';
import {
  Container,
  Header,
  Item,
  Input,
  Icon,
  Button,
  Text,
  Content,
  Left,
  Right,
  Title,
  Body
} from 'native-base';
import Footer from '../footer/footer';
import { StyleSheet, Image } from 'react-native';

export default class FoodShow extends Component {
  render() {
    const { item } = this.props.navigation.state.params;
    return(
      <Image
        source={{ uri: 'https://res.cloudinary.com/malice/image/upload/v1502485970/insulince-gradient_wofrfg.png' }}
        style={ styles.backgroundImage }>
        <Container>
          <Header>
            <Left>
              <Button transparent
                onPress={() => this.props.navigation.goBack()}>
                <Icon name="md-arrow-back" />
              </Button>
            </Left>
            <Body style={ styles.headerBody }>
              <Title>
                { item.item_name }
              </Title>
            </Body>
            <Right>
              <Button transparent>
                <Text>
                  Add
                </Text>
              </Button>
            </Right>
          </Header>
          <Content style={{ backgroundColor: 'white' }}>
            <Text>{ item.item_name }</Text>
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
  }
});
