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
  Icon,
  Spinner
} from 'native-base';
import { StyleSheet, Platform, ListView, Image } from 'react-native';
import Footer from '../footer/footer';

const datas = [
  'Simon Mignolet',
  'Nathaniel Clyne',
  'Dejan Lovren',
  'Mama Sakho',
  'Alberto Moreno',
  'Emre Can',
  'Joe Allen',
  'Phil Coutinho',
];

export default class JournalEntries extends Component {
  componentDidMount() {
    this.props.fetchAllJournalEntries()
      .then(()  => {
        const { journalEntries } = this.props;
        this.currentEntryId = journalEntries.allIds[journalEntries.allIds.length - 1];
        this.breakfastItems = [];
        this.lunchItems = [];
        this.dinnerItems = [];
        this.snackItems = [];
        this.ItemsInfo = [];
        journalEntries.byId[this.currentEntryId].breakfast
        .forEach(breakfastItem => {
          this.breakfastItems.push(breakfastItem.item_name);
          this.ItemsInfo.push(`${breakfastItem.brand_name}, ${breakfastItem.nf_serving_size_qty} ${breakfastItem.nf_serving_size_unit}`);
        });
        journalEntries.byId[this.currentEntryId].lunch
        .forEach(lunchItem => {
          this.lunchItems.push(lunchItem.item_name);
          this.ItemsInfo.push(`${lunchItem.brand_name}, ${lunchItem.nf_serving_size_qty} ${lunchItem.nf_serving_size_unit}`);
        });
        journalEntries.byId[this.currentEntryId].dinner
        .forEach(dinnerItem => {
          this.dinnerItems.push(dinnerItem.item_name);
          this.ItemsInfo.push(`${dinnerItem.brand_name}, ${dinnerItem.nf_serving_size_qty} ${dinnerItem.nf_serving_size_unit}`);
        });
        journalEntries.byId[this.currentEntryId].snacks
        .forEach(snackItem => {
          this.snackItems.push(snackItem.item_name);
          this.ItemsInfo.push(`${snackItem.brand_name}, ${snackItem.nf_serving_size_qty} ${snackItem.nf_serving_size_unit}`);
        });
        this.setState({
          currentEntryId: this.currentEntryId,
          breakfastItems: this.breakfastItems,
          lunchItems: this.lunchItems,
          dinnerItems: this.dinnerItems,
          snackItems: this.snackItems
        });
      });
  }

  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      currentEntryId: "",
      basic: true,
      breakfastItems: "",
      lunchItems: "",
      dinnerItems: "",
      snackItems: ""
    };
  }

  deleteRow(secId, rowId, rowMap) {
    rowMap[`${secId}${rowId}`].props.closeRow();
    const newData = [...this.state.listViewData];
    newData.splice(rowId, 1);
    this.setState({ listViewData: newData });
  }

  render() {
    let content = <Content><Spinner color='#621E2F' /></Content>;
    if (this.state.currentEntryId) {
      content =
        <Content>
          <Separator bordered
            style={ styles.separator }>
            <Text style={ styles.separatorText }>
              BREAKFAST
            </Text>
          </Separator>
          <List
            dataSource={this.ds.cloneWithRows(this.state.breakfastItems)}
            renderRow={data =>
              <ListItem>
                <Text> {data} </Text>
              </ListItem>}
            renderLeftHiddenRow={data =>
              <Button full onPress={() => alert(data)}>
                <Icon active name="information-circle" />
              </Button>}
            renderRightHiddenRow={(data, secId, rowId, rowMap) =>
              <Button full danger onPress={_ => this.deleteRow(secId, rowId, rowMap)}>
                <Icon active name="trash" />
              </Button>}
            leftOpenValue={75}
            rightOpenValue={-75}
          />
          <Separator bordered
            style={ styles.separator }>
            <Text style={ styles.separatorText }>
              LUNCH
            </Text>
          </Separator>
          <List
            dataSource={this.ds.cloneWithRows(this.state.lunchItems)}
            renderRow={data =>
              <ListItem>
                <Text> {data} </Text>
              </ListItem>}
            renderLeftHiddenRow={data =>
              <Button full onPress={() => alert(data)}>
                <Icon active name="information-circle" />
              </Button>}
            renderRightHiddenRow={(data, secId, rowId, rowMap) =>
              <Button full danger onPress={_ => this.deleteRow(secId, rowId, rowMap)}>
                <Icon active name="trash" />
              </Button>}
            leftOpenValue={75}
            rightOpenValue={-75}
          />
          <Separator bordered
            style={ styles.separator }>
            <Text style={ styles.separatorText }>
              DINNER
            </Text>
          </Separator>
          <List
            dataSource={this.ds.cloneWithRows(this.state.dinnerItems)}
            renderRow={data =>
              <ListItem>
                <Text> {data} </Text>
              </ListItem>}
            renderLeftHiddenRow={data =>
              <Button full onPress={() => alert(data)}>
                <Icon active name="information-circle" />
              </Button>}
            renderRightHiddenRow={(data, secId, rowId, rowMap) =>
              <Button full danger onPress={_ => this.deleteRow(secId, rowId, rowMap)}>
                <Icon active name="trash" />
              </Button>}
            leftOpenValue={75}
            rightOpenValue={-75}
          />
          <Separator bordered
            style={ styles.separator }>
            <Text style={ styles.separatorText }>
              SNACKS
            </Text>
          </Separator>
          <List
            dataSource={this.ds.cloneWithRows(this.state.snackItems)}
            renderRow={data =>
              <ListItem>
                <Text> {data} </Text>
              </ListItem>}
            renderLeftHiddenRow={data =>
              <Button full onPress={() => alert(data)}>
                <Icon active name="information-circle" />
              </Button>}
            renderRightHiddenRow={(data, secId, rowId, rowMap) =>
              <Button full danger onPress={_ => this.deleteRow(secId, rowId, rowMap)}>
                <Icon active name="trash" />
              </Button>}
            leftOpenValue={75}
            rightOpenValue={-75}
          />
        </Content>;
    }
    let idx = -1;
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
          { content }
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
  separator: {
    backgroundColor: 'transparent'
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
    color: Platform.OS === "ios" ? '#007aff' : 'white'
  }
});
