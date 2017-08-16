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
      calories: "",
      sugar: "",
      fat: "",
      carbs: "",
      protein: ""
    };
  }


  componentDidMount() {
    this.props.fetchAllJournalEntries()
      .then(()  => {
        const { journalEntries } = this.props;
        this.currentEntryId = journalEntries.allIds[journalEntries.allIds.length - 1];

        this.calories = [];
        this.sugar = [];
        this.fat = [];
        this.carbs = [];
        this.protein = [];


        journalEntries.byId[this.currentEntryId].breakfast
          .forEach(breakfastItem => {
            this.calories.push(breakfastItem['nf_calories']);
            this.sugar.push(breakfastItem['nf_sugars']);
            this.fat.push(breakfastItem['nf_total_fat']);
            this.carbs.push(breakfastItem['nf_total_carbohydrate']);
            this.protein.push(breakfastItem['nf_protein']);
          });
        journalEntries.byId[this.currentEntryId].lunch
          .forEach(lunchItem => {
            this.calories.push(lunchItem['nf_calories']);
            this.sugar.push(lunchItem['nf_sugars']);
            this.fat.push(lunchItem['nf_total_fat']);
            this.carbs.push(lunchItem['nf_total_carbohydrate']);
            this.protein.push(lunchItem['nf_protein']);
          });
        journalEntries.byId[this.currentEntryId].dinner
          .forEach(dinnerItem => {
            this.calories.push(dinnerItem['nf_calories']);
            this.sugar.push(dinnerItem['nf_sugars']);
            this.fat.push(dinnerItem['nf_total_fat']);
            this.carbs.push(dinnerItem['nf_total_carbohydrate']);
            this.protein.push(dinnerItem['nf_protein']);
        });
        journalEntries.byId[this.currentEntryId].snacks
          .forEach(snackItem => {
            this.calories.push(snackItem['nf_calories']);
            this.sugar.push(snackItem['nf_sugars']);
            this.fat.push(snackItem['nf_total_fat']);
            this.carbs.push(snackItem['nf_total_carbohydrate']);
            this.protein.push(snackItem['nf_protein']);
          });

        this.setState({
          calories: (this.calories.reduce((total, calories) => (Math.floor(Number(total) + Number(calories))))),
          sugar: (this.sugar.reduce((total, sugar) => (Math.floor(Number(total) + Number(sugar))))),
          fat: (this.fat.reduce((total, fat) => (Math.floor(Number(total) + Number(fat))))),
          carbs: (this.carbs.reduce((total, carbs) => (Math.floor(Number(total) + Number(carbs))))),
          protein: (this.protein.reduce((total, protein) => (Math.floor(Number(total) + Number(protein)))))
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
