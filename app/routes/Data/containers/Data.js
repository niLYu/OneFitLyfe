import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import Navbar from '../../../components/Navbar/Navbar.js';

class Data extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <Navbar prop={this.props}/>
        <Text>Data component</Text>
      </View>
    )
  }
}

const mapState = function (state) {
  return {
    user: state.calCalc.user
  }
}

export default connect(mapState, null)(Data);

// BMR = 88.362 + (13.397 x weight in kg) +
// (4.799 x height in cm) – (5.677 x age in years)

// BMR = 447.593 + (9.247 x weight in kg) +
// (3.098 x height in cm) – (4.330 x age in years)

// https://www.nutritionix.com/business/api
