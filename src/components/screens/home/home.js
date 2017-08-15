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
      snackItems: "",
      calories: ""
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
            this.breakfastItems.push(breakfastItem['nf_calories']);
          });
        journalEntries.byId[this.currentEntryId].lunch
          .forEach(lunchItem => {
            this.lunchItems.push(lunchItem['nf_calories']);
          });
        journalEntries.byId[this.currentEntryId].dinner
          .forEach(dinnerItem => {
            this.dinnerItems.push(dinnerItem['nf_calories']);
        });
        journalEntries.byId[this.currentEntryId].snacks
          .forEach(snackItem => {
            this.snackItems.push(snackItem['nf_calories']);
          });
        this.setState({
          breakfastItems: this.breakfastItems.reduce((total, calories) => (Math.floor(Number(total) + Number(calories)))),
          lunchItems: this.lunchItems.reduce((total, calories) => (Math.floor(Number(total) + Number(calories)))),
          dinnerItems: this.dinnerItems.reduce((total, calories) => (Math.floor(Number(total) + Number(calories)))),
          snackItems: this.snackItems.reduce((total, calories) => (Math.floor(Number(total) + Number(calories)))),
          calories: (this.breakfastItems.reduce((total, calories) => (Math.floor(Number(total) + Number(calories)))) +
                      this.lunchItems.reduce((total, calories) => (Math.floor(Number(total) + Number(calories)))) +
                      this.dinnerItems.reduce((total, calories) => (Math.floor(Number(total) + Number(calories)))) +
                      this.snackItems.reduce((total, calories) => (Math.floor(Number(total) + Number(calories)))))
        });
      });
  }



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
    borderWidth: 0,
    borderRadius: 0,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
});
