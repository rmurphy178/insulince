// import React, { Component } from 'react';
// import { Text } from "react-native";
// import { Provider, connect } from "react-redux";
// import { StackNavigator, addNavigationHelpers, navigationActions } from "react-navigation";
// import RootReducer from './reducer/root_reducer';
// import Routes from './config/routes';
// //
// // class AppWithNavigationState extends React.Component {
// //   render() {
// //     return (
// //       <AppNavigator navigation={addNavigationHelpers({
// //         dispatch: this.props.dispatch,
// //         state: this.props.nav,
// //       })} />
// //     );
// //   }
// // }
// //
// // export default AppWithNavigationState;
//
//
//
// const AppNavigator = StackNavigator(Routes, {
//     navigationOptions: {
//         title: ({ state }) => {
//             if (state.params) {
//                 return `${state.params.title}`;
//             }
//         }
//     }
// });
//
// export const navReducer = (state, action) => {
//     const newState = AppNavigator.router.getStateForAction(action, state);
//     return newState || state;
// };
//
//
//
// class AppWithNavigationState extends Component {
//     render() {
//         return (
//             <AppNavigator
//                 navigation={addNavigationHelpers({
//                     dispatch: this.props.dispatch,
//                     state: this.props.nav
//                 })}
//             />
//         );
//     }
// }
//
// const mapStateToProps = (state) => ({
//   nav: state.nav
// });
//
//
// export default connect(mapStateToProps)(AppWithNavigationState);
