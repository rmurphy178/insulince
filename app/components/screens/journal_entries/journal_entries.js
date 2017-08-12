import { View, Text } from 'react-native';
import React, { Component } from 'react';
import { fetchAllJournalEntries } from '../../../util/journal_entries_api_util';


class JournalEntries extends React.Component {
  componentWillMount() {
    // this.props.fetchAllJournalEntries()
    //   .then(response => this.setState({ JournalEntries: response.data }));
  }


  render() {
    return (
      <Text>
        JournalEntries
      </Text>
    );
  }
}


export default JournalEntries;
