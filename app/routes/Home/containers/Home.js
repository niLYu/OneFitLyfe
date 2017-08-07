import React, { Component } from 'react';
import { Text, View, Button, Image, StyleSheet } from 'react-native'
import CalCalc from '../../CalCalc/containers/CalCalc.js';
import Navbar from '../../../components/Navbar/Navbar.js';

class Home extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ flex: 1 }}>
        <Navbar prop={this.props} />
        <Image
          style={styles.backgroundImage}
          source={require('../assets/images/home.jpg')}>
        </Image>
        <View style = {styles.buttonContainer}>
        <Button
          color='#rgba(0, 0, 0, 0.45)'
          onPress={() => navigate('Calculator')}
          title="Begin your journey" />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'contain',
    width: null,
  },
  buttonContainer: {
    backgroundColor: '#68efad',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 10,
    shadowOpacity: 0.25
  }
})

export default Home;
