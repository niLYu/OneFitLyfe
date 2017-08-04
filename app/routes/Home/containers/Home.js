import React, { Component } from 'react';
import { Text, View, Button } from 'react-native'
import CalCalc from '../../CalCalc/containers/CalCalc.js';
import Navbar from '../../../components/Navbar/Navbar.js';
// import Button from '../../../components/Button';
// import styles from './styles;'

class Home extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Navbar prop={this.props}/>
        <Text>Home</Text>
        <Button
          onPress={() => navigate('Calculator', { CalCalc })}
          title="Start now"
        />
      </View>
    )
  }
}

export default Home;
