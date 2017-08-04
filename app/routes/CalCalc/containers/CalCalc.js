import React, { Component } from 'react';
import {
  StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View, PickerIOS,
} from 'react-native';
import Navbar from '../../../components/Navbar/Navbar.js';

const PickerItemIOS = PickerIOS.Item;

const USER_SEX = ['male', 'female']

const USER_ACTIVITY = [
  'sedentary', 'light activity', 'active', 'very active'
]

class CalCalc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sex: 'male',
      activity: 'sedentary'
    }
  }

  render() {
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
            {USER_ACTIVITY.map(activity => (
              <PickerItemIOS
                key={activity}
                value={activity}
                label={activity}
              />
            ))}
          </PickerIOS>
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
    justifyContent: 'center'
  },
});

export default CalCalc;

