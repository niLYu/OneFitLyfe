import React, {Component} from 'react';
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

  render () {
    return (
      <View>
      <Navbar prop={this.props}></Navbar>
        <Text>Please select your gender:</Text>
        <PickerIOS
          style={styles.picker}
          onValueChange={(sex) => this.setState({sex})}
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
          onValueChange={(activity) => this.setState({activity})}
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
    )
  }
}

var styles = StyleSheet.create({
  picker: {
    width: 100,
  },
});

export default CalCalc;

