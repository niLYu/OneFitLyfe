import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';
import HomeScreen from './app/routes/Home/containers/Home.js';
import CalCalcScreen from './app/routes/CalCalc/containers/CalCalc.js';

import Routes from './app/routes';
import getStore from './app/store/createStore.js';

const AppNavigator = StackNavigator(Routes, {headerMode: 'none'});

const navReducer = (state, action) => {
  const newState = AppNavigator.router.getStateForAction(action, state);
  return newState || state;
}

@connect(state => ({
  nav: state.nav
}))

class AppWithNavigationState extends Component {
  render() {
    return (
      <AppNavigator
        navigation={addNavigationHelpers({
          dispatch: this.props.dispatch,
          state: this.props.nav
        })}
      />
    );
  }
}

const store = getStore(navReducer);

export default function NCAP() {
  return (
    <Provider store={store}>
      <AppWithNavigationState />
    </Provider>
  )
};

// const App = StackNavigator({
//   Home: { screen: HomeScreen },
//   Calculator: { screen: CalCalcScreen},

// }, {headerMode: 'none'})

