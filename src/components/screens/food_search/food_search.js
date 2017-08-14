import React, { Component } from 'react';
import { StyleSheet, Image, KeyboardAvoidingView } from 'react-native';
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
  ListItem,
  Toast,
  Root,
  View
} from 'native-base';
import Footer from '../footer/footer';

export default class FoodSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      searchResults: [],
      noResults: false
    };
    this.updateQuery = this.updateQuery.bind(this);
    this.search = this.search.bind(this);
    this.showFoodPage = this.showFoodPage.bind(this);
  }

  updateQuery(text) {
    this.setState({
      query: text,
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
          searchResults: searchResults,
          noResults: searchResults.length === 0
        });
      });
  }

  showFoodPage(item) {
    const { key, journalEntryId } = this.props.navigation.state.params;
    return (
      () => this.props.navigation.navigate('FoodShow', {
        item,
        key,
        journalEntryId
      })
    );
  }

  render() {
    const { key } = this.props.navigation.state.params;
    return (
      <Image
        source={{ uri: 'https://res.cloudinary.com/malice/image/upload/v1502485970/insulince-gradient_wofrfg.png' }}
        style={ styles.backgroundImage }>
        <KeyboardAvoidingView
          style={ styles.view }
          behavior={ 'padding' }>
        <Root>
          <Container>
            <Header>
              <Left>
                <Button transparent onPress={() => this.props.navigation.goBack()}>
                  <Icon name="md-arrow-back" />
                </Button>
              </Left>
              <Body style={ styles.headerBody }>
                <Title>
                  {
                    `Add ${key.charAt(0).toUpperCase()}${key.slice(1)}`
                  }
                </Title>
              </Body>
              <Right />
            </Header>
            <Header searchBar rounded>
              <Item>
                <Icon name="ios-search" />
                <Input
                  autoFocus={ true }
                  onChangeText={ text => this.updateQuery(text) }
                  placeholder="Search for a food" />
              </Item>
              <Button transparent
                onPress={ this.search }>
                <Text>Search</Text>
              </Button>
            </Header>
            <Content style={{ backgroundColor: 'white' }}>
              <List
                dataArray={ this.state.searchResults }
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
        </Root>
      </KeyboardAvoidingView>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover'
  },
  view: {
    flex: 1,
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
