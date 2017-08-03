import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navbar from './app/components/Navbar/navbar.js'

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Navbar></Navbar>
        <Text style={styles.bigRed}>Changesss you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bigRed: {
    backgroundColor: 'red'
  }
});

