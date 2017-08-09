import React from 'react';
import { AuthNav } from './config/router';

import { addNavigationHelpers } from 'react-navigation';
import { StackNavigator } from 'react-navigation';

const initialState = AppNavigator.router
.getStateForAction(AppNavigator.router.getActionForPathAndParams('Login'));

export const navReducer = (state = initialState, action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state);

  // return the original `state` if `nextState` is null or undefined.
  return nextState || state;
};


const AppNavigator = StackNavigator(AuthNav);

class AppWithNavigationState extends React.Component {
  render() {
    return (
      <AppNavigator navigation={addNavigationHelpers({
        dispatch: this.props.dispatch,
        state: this.props.nav,
      })} />
    );
  }
}

export default AppWithNavigationState;
