import React, {Component} from 'react';
import { StyleSheet, View, Text } from 'react-native'
import NavBar, { NavButton, NavButtonText, NavTitle } from 'react-native-nav'
import Home from '../../routes/Home/containers/Home.js'

export default class NavBarIOSColored extends Component {
  render() {
    const { navigate } = this.props.prop.navigation;
    return (
      <NavBar style={styles} statusBar={StatusBarConfig}>
        <NavButton onPress={() => navigate('Home', { Home })}>
          <NavButtonText style={styles.buttonText}>
            {"Home"}
          </NavButtonText>
        </NavButton>
        <NavTitle style={styles.title}>
          {"fitDevil"}
        </NavTitle>
        <NavButton onPress={() => alert('hi')}>
          <NavButtonText style={styles.buttonText}>
            {"User"}
          </NavButtonText>
        </NavButton>
      </NavBar>
    )
  }
}

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: '#68efad',
  },
  navBar: {
    backgroundColor: '#68efad',
    marginBottom: 20,
  },
  title: {
    color: '#rgba(0, 0, 0, 0.65)',
  },
  buttonText: {
    color: '#rgba(0, 0, 0, 0.45)',
  },
})

StatusBarConfig = {
  animated: true,
  hidden: false,
  barStyle: 'default',
  networkActivityIndicatorVisible: false,
  showHideTransition: 'fade',
}
