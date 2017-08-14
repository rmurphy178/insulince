# Insulince

### Insulince is a project aiming to help anyone with Insulin Resistance Syndrome to track nutrition and food intake.

![Login](https://res.cloudinary.com/unravled/image/upload/v1502720739/IMG_3420_undzod.png)

* [Demo Site](https://insulince-demo.herokuapp.com/public/home.html)<br />
* [Backend Github](https://github.com/achen118/insulince-api)<br />
* [Frontend Github](https://github.com/rmurphy178/insulince)

## Background and Overview
#### What is insulin?
Insulin plays a major role in metabolism—the way the body uses digested food for energy. The digestive tract breaks down carbohydrates—sugars and starches found in many foods—into glucose. Glucose is a form of sugar that enters the bloodstream. With the help of insulin, cells throughout the body absorb glucose and use it for energy.

#### What is insulin resistance?
In insulin resistance, muscle, fat, and liver cells do not respond properly to insulin and thus cannot easily absorb glucose from the bloodstream. As a result, the body needs higher levels of insulin to help glucose enter cells.

Over time, insulin resistance can lead to type 2 diabetes and prediabetes because the beta cells fail to keep up with the body's increased need for insulin. Without enough insulin, excess glucose builds up in the bloodstream, leading to diabetes, prediabetes, and other serious health disorders.

#### What can be done about insulin resistance?
Adopting healthy eating habits can help people lose a modest amount of weight and reverse insulin resistance. Experts encourage people to slowly adopt healthy eating habits that they can maintain, rather than trying extreme weight-loss solutions. Insulince can help people make better choices to help maintain or reverse insulin resistance.

## Features
* Users have secure authenticity and can sign up or create an account
* Users can see their goals for the day on the home page
* Users can see their list of food items they have eaten that day
* Users can add foods to Breakfast, lunch, or dinner to save to their account
* Users can look through measurements and macro tracker
* Users can update their measurements

### Frontend Technology
* JavaScript
* React-Native
* Redux
* Expo

### Backend Technology
* Rails-API
* Nutritionix API
* PostgreSQL

![Login](https://res.cloudinary.com/unravled/image/upload/v1502720739/IMG_3421_r84rmj.png)

* for the page above we used a backend API as our database.  Below is the way the Journal Entries page logic works.

```
export default class JournalEntries extends Component {
  componentDidMount() {
    this.props.fetchAllJournalEntries()
      .then(()  => {
        const { journalEntries } = this.props;
        this.breakfastItems = [];
        this.lunchItems = [];
        this.dinnerItems = [];
        this.snackItems = [];
        if (this.props.navigation.state && this.props.navigation.state.params && this.props.navigation.state.params.currentEntryId) {
          this.currentEntryId = this.props.navigation.state.params.currentEntryId;
          this.currentEntryDate = new  Date(journalEntries.byId[this.currentEntryId].created_at);
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
        } else {
          this.currentEntryId = journalEntries.allIds[0];
          this.currentEntryDate = new  Date(journalEntries.byId[this.currentEntryId].created_at);
        }
        this.setState({
          currentEntryId: this.currentEntryId,
          currentEntryDate: this.currentEntryDate,
          breakfastItems: this.breakfastItems,
          lunchItems: this.lunchItems,
          dinnerItems: this.dinnerItems,
          snackItems: this.snackItems
        });
        this.checkLeftForEntry();
        this.checkRightForEntry();
      });
  }

  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      currentEntryId: "",
      currentEntryDate: "",
      basic: true,
      breakfastItems: "",
      lunchItems: "",
      dinnerItems: "",
      snackItems: "",
      right: false,
      left: false
    };
    this.addFood = this.addFood.bind(this);
    this.deleteRow = this.deleteRow.bind(this);
    this.leftDate = this.leftDate.bind(this);
    this.rightDate = this.rightDate.bind(this);
  }

  addFood(key) {
    return () => {
      this.props.navigation.navigate('FoodSearch', {
        key: key,
        journalEntryId: this.state.currentEntryId
      });
    };
  }

  deleteRow(secId, rowId, rowMap) {
    rowMap[`${secId}${rowId}`].props.closeRow();
    const newData = [...this.state.listViewData];
    newData.splice(rowId, 1);
    this.setState({ listViewData: newData });
  }

  leftDate() {
    let currentIdx = this.props.journalEntries.indexOf(this.state.currentEntryId);
    this.props.navigation.navigate('JournalEntries', { currentEntryId: this.props.journalEntries.allIds[currentIdx + 1] });
  }

  rightDate() {
    let currentIdx = this.props.journalEntries.indexOf(this.state.currentEntryId);
    this.props.navigation.navigate('JournalEntries', { currentEntryId: this.props.journalEntries.allIds[currentIdx - 1] });
  }

  checkLeftForEntry() {
    const { journalEntries } = this.props;
    const { currentEntryId, currentEntryDate } = this.state;
    if (currentEntryId) {
      let idx = journalEntries.allIds.indexOf(currentEntryId);
      if (idx > 0 && !this.state.left) {
        this.setState({
          left: true
        });
      } else {
        if (idx === 0 && this.state.left) {
          this.setState({
            left: false
          });
        }
      }
    }
  }

  checkRightForEntry() {
    const { journalEntries } = this.props;
    const { currentEntryId, currentEntryDate } = this.state;
    if (currentEntryId) {
      let idx = journalEntries.allIds.indexOf(currentEntryId);
      if (idx < journalEntries.allIds.length - 1 && !this.state.right) {
        this.setState({
          right: true
        });
      } else {
        if (idx === journalEntries.allIds.length - 1 && this.state.right) {
          this.setState({
            right: false
          });
        }
      }
    }
  }


```


### Future implementation
* Create personal recipes
* Alerts/Reminders (water, time between eating)
* Badges/Achievements
* Recipe Search (+ quick add)
* Step tracker/timer
* Mental Health tracking
* Additional curated meal plans and randomization
