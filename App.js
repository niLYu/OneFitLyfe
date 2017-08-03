import React from 'react';
import { Text, View, Button } from 'react-native';
import Navbar from './app/components/Navbar/Navbar.js'
import Home from './app/routes/Home/containers/Home.js'

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Navbar></Navbar>
        <Home></Home>
        <Button
          title='Start now!'
        />
      </View>
    );
  }
}
