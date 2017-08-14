import React, { Component } from 'react';
import { StyleSheet, Image, KeyboardAvoidingView } from 'react-native';
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
  Separator,
  ListItem,
  List
} from 'native-base';
import Footer from '../footer/footer';
import MeasurementForm from './measurement_form';

class Measurements extends Component {
  componentDidMount() {
    this.props.fetchAllMeasurements()
      .then(()  => {
        const { measurements } = this.props;
        this.currentMeasurementId = measurements.allIds[measurements.allIds.length - 1];
        this.chest = '';
        this.waist = '';
        this.hips = '';
        this.weight= '';
        this.height = '';

        this.setState({
          currentMeasurementId: this.currentMeasurementId,
          chest: this.chest,
          waist: this.waist,
          hips: this.hips,
          weight: this.weight,
          height: this.height
        });
      });
  }

  constructor() {
    super();
    this.state = {
      chest: '',
      waist: '',
      hips: '',
      weight: '',
      height: '',
      errors: []
    };
    this.redirectToMeasurementForm = this.redirectToMeasurementForm.bind(this);
  }

  redirectToMeasurementForm() {
    this.props.navigation.navigate('MeasurementForm');
  }

  render() {
    return (
      <Image
        source={{ uri: 'https://res.cloudinary.com/malice/image/upload/v1502485970/insulince-gradient_wofrfg.png' }}
        style={ styles.backgroundImage }>
        <KeyboardAvoidingView
          style={styles.view}
          behavior={'padding'}>
          <Container>
            <Header>
              <Left>
                <Button transparent onPress={() => this.props.navigation.goBack()}>
                  <Icon name="arrow-back" />
                </Button>
              </Left>
              <Body>
                <Title>Measurements</Title>
              </Body>
              <Right />
            </Header>
            <Content style={{ backgroundColor: 'white' }}>


              <Container style={styles.container}>
                 <Content>
                   <List>
                     <ListItem>
                       <Body>
                         <Text style={styles.text} >Date</Text>
                       </Body>
                     </ListItem>
                     <ListItem>
                       <Body>
                         <Text style={styles.text} >Weight</Text>
                         <Text style={styles.userinfo} > { this.state.weight } </Text>
                       </Body>
                     </ListItem>
                     <ListItem>
                       <Body>
                         <Text style={styles.text}>Chest</Text>
                         <Text style={styles.userinfo} > { this.state.chest } </Text>
                       </Body>
                     </ListItem>
                     <ListItem>
                       <Body>
                         <Text style={styles.text}>Waist</Text>
                         <Text style={styles.userinfo} > { this.state.waist } </Text>
                       </Body>
                     </ListItem>
                     <ListItem>
                       <Body>
                         <Text style={styles.text}>Hips</Text>
                         <Text style={styles.userinfo} > { this.state.hips } </Text>
                       </Body>
                     </ListItem>
                     <ListItem>
                       <Body>
                         <Text style={styles.text}>Height</Text>
                         <Text style={styles.userinfo} > { this.state.height } </Text>
                       </Body>
                     </ListItem>
                   </List>
                   <Button bordered transparent warning
                     onPress={this.redirectToMeasurementForm}
                     style={styles.newbutton}>
                     <Text style={styles.plaintext}>Add New</Text>
                   </Button>
                 </Content>
               </Container>


            </Content>
          </Container>
        </KeyboardAvoidingView>
        <Footer navigation={ this.props.navigation } />
      </Image>
    );
  }

}

export default Measurements;

const styles = StyleSheet.create({
  view: {
    flex: 1
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover'
  },
  separator: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 16
  },
  separatorText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
  }
});
