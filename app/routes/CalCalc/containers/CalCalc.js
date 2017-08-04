import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet, Text, TextInput, View, PickerIOS, Button
} from 'react-native';
import Navbar from '../../../components/Navbar/Navbar.js';
import {assignUserInfo} from '../modules/calcalcReducer';

const PickerItemIOS = PickerIOS.Item;

const USER_SEX = ['male', 'female']

const USER_ACTIVITY = {
  'sedentary': 1.2, 'light activity': 1.375, 'active': 1.55, 'very active': 1.725
}

class CalCalc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sex: 'male',
      activity: 'sedentary',
      age: null,
      height: null,
      weight: null,
    }
  this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit (event) {
    this.props.assignUserInfo(this.state)
    console.log(this.state)
  }

  render() {
    console.log(this.props)
    return (
      <View style={styles.mainContainer}>
        <Navbar prop={this.props}></Navbar>
        <View style={styles.content}>
          <Text>Please select your gender:</Text>
          <PickerIOS
            style={styles.picker}
            itemStyle={{ height: 50 }}
            onValueChange={(sex) => this.setState({ sex })}
            selectedValue={this.state.sex}>
            {USER_SEX.map(sex => (
              <PickerItemIOS
                key={sex}
                value={sex}
                label={sex}
              />
            ))}
          </PickerIOS>
          <Text>Please select your level of activity:</Text>
          <PickerIOS
            style={styles.picker}
            itemStyle={{ height: 50 }}
            onValueChange={(activity) => this.setState({ activity })}
            selectedValue={this.state.activity}>
            {Object.keys(USER_ACTIVITY).map(activity => (
              <PickerItemIOS
                key={activity}
                value={activity}
                label={activity}
              />
            ))}
          </PickerIOS>
          <TextInput
            style={styles.textInput}
            placeholder='Enter your age' />
          <TextInput
            style={styles.textInput}
            placeholder='Enter your height' />
          <TextInput
            style={styles.textInput}
            placeholder='Enter your current weight' />
          <Button
            onPress={() => this.onSubmit()}
            title="Submit"
            color="#841584"
            accessibilityLabel="Submit"
          />
        </View>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  picker: {
    width: 150,
    padding: 0,
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  textInput: {
    padding: 10
  }
});

const mapDispatch = {assignUserInfo}

export default connect(null, mapDispatch)(CalCalc);

