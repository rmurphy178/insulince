import React, { Component } from 'react';
import {
  Container,
  Content,
  List,
  ListItem,
  Text,
  Separator,
  Header,
  Left,
  Right,
  Title,
  Body,
  Button,
  Icon
} from 'native-base';
import { StyleSheet } from 'react-native';
import Footer from '../footer/footer';

export default class JournalEntries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentEntryId: this.props.journalEntries.allIds[this.props.journalEntries.allIds.length - 1]
    };
  }

  render() {
    const breakfastItems = [];
    const lunchItems = [];
    const dinnerItems = [];
    const snackItems = [];
    const ItemsInfo = [];
    const { journalEntries } = this.props;
    journalEntries.byId[this.state.currentEntryId].breakfast
      .forEach(breakfastItem => {
        breakfastItems.push(breakfastItem.item_name);
        ItemsInfo.push(`${breakfastItem.brand_name}, ${breakfastItem.nf_serving_size_qty} ${breakfastItem.nf_serving_size_unit}`);
      });
    journalEntries.byId[this.state.currentEntryId].lunch
      .forEach(lunchItem => {
        lunchItems.push(lunchItem.item_name);
        ItemsInfo.push(`${lunchItem.brand_name}, ${lunchItem.nf_serving_size_qty} ${lunchItem.nf_serving_size_unit}`);
      });
    journalEntries.byId[this.state.currentEntryId].dinner
      .forEach(dinnerItem => {
        dinnerItems.push(dinnerItem.item_name);
        ItemsInfo.push(`${dinnerItem.brand_name}, ${dinnerItem.nf_serving_size_qty} ${dinnerItem.nf_serving_size_unit}`);
      });
    journalEntries.byId[this.state.currentEntryId].snacks
      .forEach(snackItem => {
        snackItems.push(snackItem.item_name);
        ItemsInfo.push(`${snackItem.brand_name}, ${snackItem.nf_serving_size_qty} ${snackItem.nf_serving_size_unit}`);
      });
    let idx = -1;
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="md-arrow-back" />
            </Button>
          </Left>
          <Body style={ styles.headerBody }>
            <Icon
              style={ styles.headerIcons }
              name="ios-arrow-back" />
            <Title>
              Date
            </Title>
            <Icon
              style={ styles.headerIcons }
              name="ios-arrow-forward" />
          </Body>
          <Right />
        </Header>
        <Content>
          <Separator bordered
            style={ styles.separator }>
            <Text style={ styles.separatorText }>
              BREAKFAST
            </Text>
          </Separator>
          <List dataArray={ breakfastItems }
            renderRow={item => {
              idx += 1;
              return (
                <ListItem style={ styles.listItem }>
                  <Text
                    style={ styles.listItemName }>
                    { item }
                  </Text>
                  <Text
                    style={ styles.listItemDetails }>
                    { ItemsInfo[idx] }
                  </Text>
                </ListItem>
              );
            }}>
          </List>
          <Separator bordered
            style={ styles.separator }>
            <Text style={ styles.separatorText }>
              LUNCH
            </Text>
          </Separator>
          <List dataArray={lunchItems}
            renderRow={item => {
              idx += 1;
              return (
                <ListItem style={ styles.listItem }>
                  <Text
                    style={ styles.listItemName }>
                    { item }
                  </Text>
                  <Text
                    style={ styles.listItemDetails }>
                    { ItemsInfo[idx] }
                  </Text>
                </ListItem>
              );
            }}>
          </List>
          <Separator bordered
            style={ styles.separator }>
            <Text style={ styles.separatorText }>
              DINNER
            </Text>
          </Separator>
          <List dataArray={dinnerItems}
            renderRow={item => {
              idx += 1;
              return (
                <ListItem style={ styles.listItem }>
                  <Text
                    style={ styles.listItemName }>
                    { item }
                  </Text>
                  <Text
                    style={ styles.listItemDetails }>
                    { ItemsInfo[idx] }
                  </Text>
                </ListItem>
              );
            }}>
          </List>
          <Separator bordered
            style={ styles.separator }>
            <Text style={ styles.separatorText }>
              SNACKS
            </Text>
          </Separator>
          <List dataArray={snackItems}
            renderRow={item => {
              idx += 1;
              return (
                <ListItem style={ styles.listItem }>
                  <Text
                    style={ styles.listItemName }>
                    { item }
                  </Text>
                  <Text
                    style={ styles.listItemDetails }>
                    { ItemsInfo[idx] }
                  </Text>
                </ListItem>
              );
            }}>
          </List>
        </Content>
        <Footer navigation={ this.props.navigation } />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  separator: {
    backgroundColor: '#2A132B'
  },
  separatorText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700'
  },
  listItem: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  listItemName: {
    alignSelf: 'flex-start',
    fontSize: 16
  },
  listItemDetails: {
    alignSelf: 'flex-start',
    fontSize: 12
  },
  headerBody: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  headerIcons: {
    color: 'white'
  }
});
