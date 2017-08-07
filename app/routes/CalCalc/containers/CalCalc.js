import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet, Text, TextInput, View, PickerIOS, Button,
  KeyboardAvoidingView
} from 'react-native';
import Data from '../../Data/containers/Data';
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
      activity: 1.2,
      age: null,
      height: null,
      weight: null,
    }
  }

  onSubmit = () => {
    this.props.assignUserInfo(this.state)
    this.props.navigation.navigate('Data')
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
            {Object.keys(USER_ACTIVITY).map(activity => (
              <PickerItemIOS
                key={activity}
                value={USER_ACTIVITY[activity]}
                label={activity}
              />
            ))}
          </PickerIOS>
          <TextInput
            style={styles.textInput}
            onChangeText={age => this.setState({age})}
            placeholder='Enter your age (yrs)' />
          <TextInput
            style={styles.textInput}
            onChangeText={height => this.setState({height})}
            placeholder='Enter your height (inches)' />
          <TextInput
            style={styles.textInput}
            onChangeText={weight => this.setState({weight})}
            placeholder='Enter your weight (lbs)' />
          <Button
            onPress={() => this.onSubmit()}
            title="Submit"
            color="#008000"
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
    width: 200,
    borderColor: 'gray',
    padding: 0,
  },
  content: {
    flex: 1,
    alignItems: 'center',
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    textAlign: 'center',
  }
});

const mapDispatch = {assignUserInfo}

export default connect(null, mapDispatch)(CalCalc);

