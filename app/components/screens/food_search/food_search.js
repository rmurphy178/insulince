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
  Body,
  List,
  ListItem
} from 'native-base';
import Footer from '../footer/footer';

export default class FoodSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      searchResults: []
    };
    this.updateQuery = this.updateQuery.bind(this);
    this.search = this.search.bind(this);
    this.showFoodPage = this.showFoodPage.bind(this);
  }

  updateQuery(text) {
    this.setState({
      query: text
    });
  }

  search() {
    const searchResults = [];
    this.props.searchNutritionix(this.state.query)
      .then(results => {
        results.forEach(result => {
          searchResults.push(result.fields);
        });
        this.setState({
          searchResults: searchResults
        });
      });
  }

  showFoodPage(item) {
    return (
      () => this.props.navigation.navigate('FoodShow', { item })
    );
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
                { this.props.navigation.state.params.key }
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
            <List dataArray={ this.state.searchResults }
            renderRow={item =>
              <ListItem onPress={ this.showFoodPage(item) }>
                <Left style={ styles.resultInfo }>
                  <Text
                    style={{ alignSelf: 'flex-start' }}>
                    { item.item_name }
                  </Text>
                  <Text style={ styles.infoText }>
                    { `${item.brand_name}, ${item.nf_serving_size_qty} ${item.nf_serving_size_unit}` }
                  </Text>
                </Left>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
            }>
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
  resultInfo: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  infoText: {
    alignSelf: 'flex-start',
    fontSize: 12
  }
});
