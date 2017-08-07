'use strict'

import React, { Component } from 'react';
import { View, TextInput, Text, StyleSheet, Button, TouchableHighlight } from 'react-native';

import { Bar } from 'react-native-pathjs-charts'
import Navbar from '../../../components/Navbar/Navbar.js';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
  },
  textStyling: {
    marginBottom: 20,
    textAlign: 'center'
  },
  textWithButton: {
    flexDirection: 'row'
  },
});

class Daily extends Component {
  constructor(props) {
    super(props)
    this.state = {
      meal: 0,
      meals: [],
    }
  }

  pressDelete = () => {
    let copyState = this.state.meals.slice(0);

  }

  onSubmit = () => {
    this.setState(previousState => ({
      meals: [...previousState.meals, previousState.meal],
    }));
    this._textInput.setNativeProps({ text: '' })
  }

  render() {
    let options = {
      width: 200,
      height: 150,
      margin: {
        top: 20,
        left: 25,
        bottom: 50,
        right: 20
      },
      color: '#2980B9',
      gutter: 20,
      animate: {
        type: 'oneByOne',
        duration: 200,
        fillTransition: 3
      },
      axisX: {
        showAxis: true,
        showLines: true,
        showLabels: true,
        showTicks: true,
        zeroAxis: false,
        orient: 'bottom',
        label: {
          fontFamily: 'Arial',
          fontSize: 8,
          fontWeight: true,
          fill: '#34495E',
          rotate: 45,
        }
      },
      axisY: {
        showAxis: true,
        showLines: true,
        showLabels: true,
        showTicks: true,
        zeroAxis: false,
        orient: 'left',
        label: {
          fontFamily: 'Arial',
          fontSize: 8,
          fontWeight: true,
          fill: '#34495E'
        }
      }
    }

    let totalCal = this.state.meals.reduce((a, b) => {
      return +a + +b
    }, 0)

    let data = [
      [{
        "v": 0,
        "name": ""
      }, {
        "v": this.props.navigation.state.params,
        "name": "target"
      }],
      [{
        "v": totalCal,
        "name": "current"
      }, {
        "v": 0,
        "name": ""
      }]
    ]
    return (
      <View style={{ flex: 1 }}>
        <Navbar prop={this.props}></Navbar>
        <Text style={styles.textStyling}>Daily calorie consumption: </Text>
        <View style={styles.container}>
          <Bar data={data} options={options} accessorKey='v' />
          {this.state.meals.length > 0 &&
            this.state.meals.map(meal => {
              return (
                <View key={meal} style={styles.textWithButton}>
                  <Text>{meal} calories       </Text>
                  <TouchableHighlight style={styles.customButton}>
                    <Text style={{color: "#b22222"}} onPress={() => alert('WIP')}>X</Text>
                  </TouchableHighlight>
                </View>
              )
            })
          }
          <Text style={styles.textStyling}>Total calories: {this.state.meals.reduce((a, b) => {
            return +a + +b
          }, 0)}</Text>
          <View style={{ alignSelf: 'stretch' }}>
            <TextInput
              ref={component => this._textInput = component}
              style={styles.textStyling}
              onChangeText={meal => this.setState({ meal })}
              placeholder='Enter calories for your meal'
            />
            <Button
              onPress={() => this.onSubmit()}
              title="Submit"
              color="#008000"
              accessibilityLabel="Submit"
            />
          </View>
        </View>
      </View>
    )
  }
}

export default Daily;
