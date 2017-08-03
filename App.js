import React from 'react';
import { Text, View } from 'react-native';
import Navbar from './app/components/Navbar/navbar.js'

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Navbar></Navbar>
        <Text>Changesss you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

