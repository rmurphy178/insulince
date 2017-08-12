import React, { Component } from 'react';
import { fetchAllJournalEntries } from '../../../util/journal_entries_api_util';
import { Container, Content, List, ListItem, Text, Separator } from 'native-base';


class JournalEntries extends React.Component {
  componentDidMount() {
    this.props.fetchAllJournalEntries();
  }

  constructor(props) {
    super(props);
  }

  render() {
    var items = ['Simon Mignolet','Nathaniel Clyne','Dejan Lovren','Mama Sakho','Emre Can'];
    return (
      <Container>
        <Content>
          <Separator bordered>
            <Text>BREAKFAST</Text>
          </Separator>
          <List dataArray={items}
            renderRow={(item) =>
              <ListItem>
                <Text>{item}</Text>
              </ListItem>
            }>
          </List>
          <Separator bordered>
            <Text>LUNCH</Text>
          </Separator>
          <List dataArray={items}
            renderRow={(item) =>
              <ListItem>
                <Text>{item}</Text>
              </ListItem>
            }>
          </List>
          <Separator bordered>
            <Text>DINNER</Text>
          </Separator>
          <List dataArray={items}
            renderRow={(item) =>
              <ListItem>
                <Text>{item}</Text>
              </ListItem>
            }>
          </List>
          <Separator bordered>
            <Text>SNACKS</Text>
          </Separator>
          <List dataArray={items}
            renderRow={(item) =>
              <ListItem>
                <Text>{item}</Text>
              </ListItem>
            }>
          </List>
        </Content>
      </Container>
    );
  }
}


export default JournalEntries;
