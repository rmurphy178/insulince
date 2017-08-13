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

class Measurements extends Component {
  componentDidMount() {
    this.props.fetchAllMeasurements();
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

    this.handleUpdate = this.handleUpdate.bind(this);
    this.update = this.update.bind(this);
    this.updatePressed = this.updatePressed.bind(this);

  }

  handleUpdate(event) {
    const updateInput = document.getElementById(this.update.name);
    updateInput.classList.remove('hidden');
    updateInput.focus();
  }

  update(event) {

  }

  updatePressed() {
    this.props.update({
      chest: this.state.chest,
      waist: this.state.waist,
      hips: this.state.hips,
      weight: this.state.weight,
      height: this.state.height
    });
    // should this redirect or just update?
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
              <Separator bordered
                style={ styles.separator }>
                <Text style={ styles.separatorText }>
                  DATE
                </Text>
              </Separator>
              <List
                style={{ backgroundColor: 'white' }}
                dataSource={this.ds.cloneWithRows()}
                renderRow={data =>
                  <ListItem>
                    <Text style={{ paddingLeft: 14 }}> {data} </Text>
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
