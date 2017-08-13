import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';
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

export default class FoodSearch extends Component {

  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };
    this.updateQuery = this.updateQuery.bind(this);
    this.search = this.search.bind(this);
  }

  updateQuery(text) {
    this.setState({
      query: text
    });
  }

  search() {
    this.props.searchNutritionix(this.state.query);
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
                <Icon name="md-arrow-back" />
              </Button>
            </Left>
            <Body style={ styles.headerBody }>
              <Title>
                Food Search
              </Title>
            </Body>
            <Right />
          </Header>
          <Header searchBar rounded>
            <Item>
              <Icon name="ios-search" />
              <Input
                onChangeText={ text => this.updateQuery(text) }
                placeholder="Search for a food" />
            </Item>
            <Button transparent
              onPress={ this.search }>
              <Text>Search</Text>
            </Button>
          </Header>
          <Content style={{ backgroundColor: 'white' }}>

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
