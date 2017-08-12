import { View, Text } from 'react-native';
import React, { Component } from 'react';
import { fetchAllJournalEntries } from '../../../util/journal_entries_api_util';


class JournalEntries extends React.Component {
  componentDidMount() {
    this.props.fetchAllJournalEntries();
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
