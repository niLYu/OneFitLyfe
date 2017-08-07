import React, { Component } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import Navbar from '../../../components/Navbar/Navbar.js';

class Data extends Component {
  constructor(props) {
    super(props);
    this.getTDEE = this.getTDEE.bind(this)
  }

  getTDEE() {
    const user = this.props.user
    if (user.sex === 'male') {
      return Math.round((10 * user.weight / 2.2046226218 + 6.25 * user.height * 2.54 - 5 * user.age + 5) * user.activity)
    } else {
      return Math.round((10 * user.weight / 2.2046226218 + 6.25 * user.height * 2.54 - 5 * user.age - 161) * user.activity)
    }
  }

  onSubmit() {
    this.props.navigation.navigate('Daily', this.getTDEE())
  }

  render() {
    return (
      <View>
        <Navbar prop={this.props} />
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text style={styles.textStyles}>+ 1lb per week, consume {this.getTDEE() + 500} calories daily</Text>
          <Text style={styles.textStyles}>To maintain, consume {this.getTDEE()} calories daily</Text>
          <Text style={styles.textStyles}>- 1lb per week, consume {this.getTDEE() - 500} calories daily</Text>
          <View style={styles.buttonContainer}>
            <Button
              onPress={() => this.onSubmit()}
              title="Track now!"
              color="#008000"
              accessibilityLabel="Track now!"
            />
          </View>
        </View>
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

const styles = StyleSheet.create({
  textStyles: {
    padding: 10
  },
  buttonContainer: {
    backgroundColor: '#68efad',
    borderRadius: 10,
    margin: 50,
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    height: 50,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 10,
    shadowOpacity: 0.25
  }
})

// For men: BMR = 10 x weight (kg) + 6.25 x height (cm) – 5 x age (years) + 5
// For women: BMR = 10 x weight (kg) + 6.25 x height (cm) – 5 x age (years) – 161

// https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4278349/

// https://www.nutritionix.com/business/api
