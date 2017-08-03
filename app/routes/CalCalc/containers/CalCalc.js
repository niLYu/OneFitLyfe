import React from 'react';
import {
  StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View, PickerIOS,
} from 'react-native';

const PickerItemIOS = PickerIOS.Item;

const USER_SEX = ['male', 'female']

const USER_ACTIVITY = [
    'sedentary', 'light activity', 'active', 'very active'
]

const CalCalc = React.createClass({
  getInitialState: function() {
    return {
      sex: 'male',
      activity: 'sedentary'
    };
  },

  render: function() {
    return(
      <View>
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
      </View>
    )
  }
})

var styles = StyleSheet.create({
  picker: {
    width: 100,
  },
});

export default CalCalc;

