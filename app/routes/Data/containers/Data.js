import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import Navbar from '../../../components/Navbar/Navbar.js';

class Data extends Component {
  constructor(props) {
    super(props);
    this.getBMR = this.getBMR.bind(this)
  }

  getBMR() {
    const user = this.props.user
    if (user.sex === 'male') {
      return 10 * user.weight / 2.2046226218 + 6.25 * user.height * 2.54 - 5 * user.age + 5
    } else {
      return 10 * user.weight / 2.2046226218 + 6.25 * user.height * 2.54 - 5 * user.age - 161
    }
  }

  render() {
    return (
      <View>
        <Navbar prop={this.props} />
        <Text>Data component</Text>
        <Text>{this.getBMR()}</Text>
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

// For men: BMR = 10 x weight (kg) + 6.25 x height (cm) – 5 x age (years) + 5
// For women: BMR = 10 x weight (kg) + 6.25 x height (cm) – 5 x age (years) – 161

// https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4278349/

// https://www.nutritionix.com/business/api
