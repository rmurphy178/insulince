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
      breakfastItems_calories: "",
      lunchItems_calories: "",
      dinnerItems_calories: "",
      snackItems_calories: "",
      calories: "",

      breakfastItems_sugar: "",
      lunchItems_sugar: "",
      dinnerItems_sugar: "",
      snackItems_sugar: "",
      sugar: "",


      breakfastItems_fat: "",
      lunchItems_fat: "",
      dinnerItems_fat: "",
      snackItems_fat: "",
      fat: "",


      breakfastItems_carbs: "",
      lunchItems_carbs: "",
      dinnerItems_carbs: "",
      snackItems_carbs: "",
      carbs: "",

      breakfastItems_protein: "",
      lunchItems_protein: "",
      dinnerItems_protein: "",
      snackItems_protein: "",
      protein: ""
    };
  }


  componentDidMount() {
    this.props.fetchAllJournalEntries()
      .then(()  => {
        const { journalEntries } = this.props;
        this.currentEntryId = journalEntries.allIds[journalEntries.allIds.length - 1];
        this.breakfastItems_calories = [];
        this.breakfastItems_sugar = [];
        this.breakfastItems_fat = [];
        this.breakfastItems_carbs = [];
        this.breakfastItems_protein = [];

        this.lunchItems_calories = [];
        this.lunchItems_sugar = [];
        this.lunchItems_fat = [];
        this.lunchItems_carbs = [];
        this.lunchItems_protein = [];

        this.dinnerItems_calories = [];
        this.dinnerItems_sugar = [];
        this.dinnerItems_fat = [];
        this.dinnerItems_carbs = [];
        this.dinnerItems_protein = [];

        this.snackItems_calories = [];
        this.snackItems_sugar = [];
        this.snackItems_fat = [];
        this.snackItems_carbs = [];
        this.snackItems_protein = [];

        journalEntries.byId[this.currentEntryId].breakfast
          .forEach(breakfastItem => {
            this.breakfastItems_calories.push(breakfastItem['nf_calories']);
            this.breakfastItems_sugar.push(breakfastItem['nf_sugars']);
            this.breakfastItems_fat.push(breakfastItem['nf_total_fat']);
            this.breakfastItems_carbs.push(breakfastItem['nf_total_carbohydrate']);
            this.breakfastItems_protein.push(breakfastItem['nf_protein']);
          });
        journalEntries.byId[this.currentEntryId].lunch
          .forEach(lunchItem => {
            this.lunchItems_calories.push(lunchItem['nf_calories']);
            this.lunchItems_sugar.push(lunchItem['nf_sugars']);
            this.lunchItems_fat.push(lunchItem['nf_total_fat']);
            this.lunchItems_carbs.push(lunchItem['nf_total_carbohydrate']);
            this.lunchItems_protein.push(lunchItem['nf_protein']);
          });
        journalEntries.byId[this.currentEntryId].dinner
          .forEach(dinnerItem => {
            this.dinnerItems_calories.push(dinnerItem['nf_calories']);
            this.dinnerItems_sugar.push(dinnerItem['nf_sugars']);
            this.dinnerItems_fat.push(dinnerItem['nf_total_fat']);
            this.dinnerItems_carbs.push(dinnerItem['nf_total_carbohydrate']);
            this.dinnerItems_protein.push(dinnerItem['nf_protein']);
        });
        journalEntries.byId[this.currentEntryId].snacks
          .forEach(snackItem => {
            this.snackItems_calories.push(snackItem['nf_calories']);
            this.snackItems_sugar.push(snackItem['nf_sugars']);
            this.snackItems_fat.push(snackItem['nf_total_fat']);
            this.snackItems_carbs.push(snackItem['nf_total_carbohydrate']);
            this.snackItems_protein.push(snackItem['nf_protein']);
          });

        this.setState({
          breakfastItems_calories: this.breakfastItems_calories.reduce((total, calories) => (Math.floor(Number(total) + Number(calories)))),
          breakfastItems_sugar: this.breakfastItems_sugar.reduce((total, sugar) => (Math.floor(Number(total) + Number(sugar)))),
          breakfastItems_fat: this.breakfastItems_fat.reduce((total, fat) => (Math.floor(Number(total) + Number(fat)))),
          breakfastItems_carbs: this.breakfastItems_carbs.reduce((total, carbs) => (Math.floor(Number(total) + Number(carbs)))),

          lunchItems_calories: this.lunchItems_calories.reduce((total, calories) => (Math.floor(Number(total) + Number(calories)))),
          lunchItems_sugar: this.lunchItems_sugar.reduce((total, sugar) => (Math.floor(Number(total) + Number(sugar)))),
          lunchItems_fat: this.lunchItems_fat.reduce((total, fat) => (Math.floor(Number(total) + Number(fat)))),
          lunchItems_carbs: this.lunchItems_carbs.reduce((total, carbs) => (Math.floor(Number(total) + Number(carbs)))),

          dinnerItems_calories: this.dinnerItems_calories.reduce((total, calories) => (Math.floor(Number(total) + Number(calories)))),
          dinnerItems_sugar: this.dinnerItems_sugar.reduce((total, sugar) => (Math.floor(Number(total) + Number(sugar)))),
          dinnerItems_fat: this.dinnerItems_fat.reduce((total, fat) => (Math.floor(Number(total) + Number(fat)))),
          dinnerItems_carbs: this.dinnerItems_carbs.reduce((total, carbs) => (Math.floor(Number(total) + Number(carbs)))),

          snackItems_calories: this.snackItems_calories.reduce((total, calories) => (Math.floor(Number(total) + Number(calories)))),
          snackItems_sugar: this.snackItems_sugar.reduce((total, sugar) => (Math.floor(Number(total) + Number(sugar)))),
          snackItems_fat: this.snackItems_fat.reduce((total, fat) => (Math.floor(Number(total) + Number(fat)))),
          snackItems_carbs: this.snackItems_carbs.reduce((total, carbs) => (Math.floor(Number(total) + Number(carbs)))),

          calories: (this.breakfastItems_calories.reduce((total, calories) => (Math.floor(Number(total) + Number(calories)))) +
                      this.lunchItems_calories.reduce((total, calories) => (Math.floor(Number(total) + Number(calories)))) +
                      this.dinnerItems_calories.reduce((total, calories) => (Math.floor(Number(total) + Number(calories)))) +
                      this.snackItems_calories.reduce((total, calories) => (Math.floor(Number(total) + Number(calories))))),

          sugar: (this.breakfastItems_sugar.reduce((total, sugar) => (Math.floor(Number(total) + Number(sugar)))) +
                      this.lunchItems_sugar.reduce((total, sugar) => (Math.floor(Number(total) + Number(sugar)))) +
                      this.dinnerItems_sugar.reduce((total, sugar) => (Math.floor(Number(total) + Number(sugar)))) +
                      this.snackItems_sugar.reduce((total, sugar) => (Math.floor(Number(total) + Number(sugar))))),

          fat: (this.breakfastItems_fat.reduce((total, fat) => (Math.floor(Number(total) + Number(fat)))) +
                      this.lunchItems_fat.reduce((total, fat) => (Math.floor(Number(total) + Number(fat)))) +
                      this.dinnerItems_fat.reduce((total, fat) => (Math.floor(Number(total) + Number(fat)))) +
                      this.snackItems_fat.reduce((total, fat) => (Math.floor(Number(total) + Number(fat))))),

          carbs: (this.breakfastItems_carbs.reduce((total, carbs) => (Math.floor(Number(total) + Number(carbs)))) +
                      this.lunchItems_carbs.reduce((total, carbs) => (Math.floor(Number(total) + Number(carbs)))) +
                      this.dinnerItems_carbs.reduce((total, carbs) => (Math.floor(Number(total) + Number(carbs)))) +
                      this.snackItems_carbs.reduce((total, carbs) => (Math.floor(Number(total) + Number(carbs))))),

          protein: (this.breakfastItems_protein.reduce((total, protein) => (Math.floor(Number(total) + Number(protein)))) +
                      this.lunchItems_protein.reduce((total, protein) => (Math.floor(Number(total) + Number(protein)))) +
                      this.dinnerItems_protein.reduce((total, protein) => (Math.floor(Number(total) + Number(protein)))) +
                      this.snackItems_protein.reduce((total, protein) => (Math.floor(Number(total) + Number(protein)))))
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
