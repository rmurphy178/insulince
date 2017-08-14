import React, { Component } from 'react';
import {
  Content,
  Text,
  View,
  Header,
  Left,
  Icon,
  Button,
  Body,
  Title,
  Right,
  Container,
  H1
} from 'native-base';
import { StyleSheet, Image } from 'react-native';
import Footer from '../footer/footer';

import PieChart from '../charts/pie_charts/pie_chart';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breakfastItems: "",
      lunchItems: "",
      dinnerItems: "",
      snackItems: ""
    };
  }


  componentDidMount() {
    this.props.fetchAllJournalEntries()
      .then(()  => {
        const { journalEntries } = this.props;
        this.currentEntryId = journalEntries.allIds[journalEntries.allIds.length - 1];
        this.breakfastItems = [];
        this.lunchItems = [];
        this.dinnerItems = [];
        this.snackItems = [];
        journalEntries.byId[this.currentEntryId].breakfast
          .forEach(breakfastItem => {
            this.breakfastItems.push(breakfastItem);
          });
        journalEntries.byId[this.currentEntryId].lunch
          .forEach(lunchItem => {
            this.lunchItems.push(lunchItem);
          });
        journalEntries.byId[this.currentEntryId].dinner
          .forEach(dinnerItem => {
            this.dinnerItems.push(dinnerItem);
        });
        journalEntries.byId[this.currentEntryId].snacks
          .forEach(snackItem => {
            this.snackItems.push(snackItem);
          });
        this.setState({
          breakfastItems: this.breakfastItems,
          lunchItems: this.lunchItems,
          dinnerItems: this.dinnerItems,
          snackItems: this.snackItems
        });
      });
  }

  // getLastJournalEntry(props) {
  //   const entries = ;
  //   this.props.fetchLastJournalEntry()
  //     .then(results => {
  //       console.log(results.breakfast);
  //     });
  // }

  render() {
    console.log(this.state);
    const { currentUser } = this.props;
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
              <Title>Insulince</Title>
            </Body>
            <Right />
          </Header>
          <Content style={ styles.content }>
            <H1 style={ styles.h1 }>
              Welcome, { currentUser.username }!
            </H1>
            <View>{this.getChartData}</View>
              <View style={styles.chart}>
                <PieChart />
              </View>
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
    padding: 30,
    backgroundColor: 'white',
  },
  h1: {
    fontWeight: '700',
    alignSelf: 'center',
    color: '#431833'
  },
  chart: {
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 0,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 5,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
});
