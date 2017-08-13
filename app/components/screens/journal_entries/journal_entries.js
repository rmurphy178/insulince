import React, { Component } from 'react';
import { fetchAllJournalEntries } from '../../../util/journal_entries_api_util';
import { Container, Content, List, ListItem, Text, Separator } from 'native-base';
import { StyleSheet } from 'react-native';


class JournalEntries extends React.Component {
  componentDidMount() {
    this.props.fetchAllJournalEntries();
  }

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
    journalEntries.allIds.forEach(id => {
      journalEntries.byId[id].breakfast.forEach(breakfastItem => {
        breakfastItems.push(breakfastItem.item_name);
        ItemsInfo.push(`${breakfastItem.brand_name}, ${breakfastItem.nf_serving_size_qty} ${breakfastItem.nf_serving_size_unit}`);
      });
      journalEntries.byId[id].lunch.forEach(lunchItem => {
        lunchItems.push(lunchItem.item_name);
        ItemsInfo.push(`${lunchItem.brand_name}, ${lunchItem.nf_serving_size_qty} ${lunchItem.nf_serving_size_unit}`);
      });
      journalEntries.byId[id].dinner.forEach(dinnerItem => {
        dinnerItems.push(dinnerItem.item_name);
        ItemsInfo.push(`${dinnerItem.brand_name}, ${dinnerItem.nf_serving_size_qty} ${dinnerItem.nf_serving_size_unit}`);
      });
      journalEntries.byId[id].snacks.forEach(snackItem => {
        snackItems.push(snackItem.item_name);
        ItemsInfo.push(`${snackItem.brand_name}, ${snackItem.nf_serving_size_qty} ${snackItem.nf_serving_size_unit}`);
      });
    });
    let idx = -1;
    return (
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
    );
  }
}

export default JournalEntries;

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
  }
});
