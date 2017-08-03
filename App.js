import React from 'react';
import { Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Navbar from './app/components/Navbar/Navbar.js';
import HomeScreen from './app/routes/Home/containers/Home.js';
import CalCalcScreen from './app/routes/CalCalc/containers/CalCalc.js';


const App = StackNavigator({
  Home: { screen: HomeScreen },
  Calculator: { screen: CalCalcScreen}
})

export default App;

