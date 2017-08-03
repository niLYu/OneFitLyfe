import React from 'react';
import { StyleSheet } from 'react-native'
import NavBar, { NavButton, NavButtonText, NavTitle } from 'react-native-nav'

export default class NavBarIOSColored extends React.Component {
  render() {
    return (
      <NavBar style={styles}>
        <NavButton onPress={() => alert('hi')}>
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
  navBar: {
    backgroundColor:  '#68efad',
  },
  title: {
    color: '#rgba(0, 0, 0, 0.65)',
  },
  buttonText: {
    color: '#rgba(0, 0, 0, 0.45)',
  },
})
