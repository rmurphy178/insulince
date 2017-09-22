import 'react-native';
import React from 'react';
import App from './App';
import { AppRegistry } from 'react-native';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <Index />
  );
});


AppRegistry.registerComponent('App', () => App);
