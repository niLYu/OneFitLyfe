'use strict'

import React, { Component } from 'react';
import { View, TextInput, Text, StyleSheet, Button } from 'react-native';

import { Bar } from 'react-native-pathjs-charts'
import Navbar from '../../../components/Navbar/Navbar.js';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
  },
  textStyling: {
    marginBottom: 20
  }
});

// this.setState(previousState => ({
//     myArray: [...previousState.myArray, 'new value']
// }));

class Daily extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        [{
          "v": 0,
          "name": ""
        }, {
          "v": this.props.navigation.state.params,
          "name": "target"
        }],
        [{
          "v": 0,
          "name": "current"
        }, {
          "v": 0,
          "name": ""
        }]
      ],
      meals: [25],
    }
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    console.log(event)
    this.setState(previousState => ({
      myArray: [...previousState.meals, event.value]
    }));
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

    return (
      <View style={{ flex: 1 }}>
        <Navbar prop={this.props}></Navbar>
        <View style={styles.container}>
          <Bar data={this.state.data} options={options} accessorKey='v' />
          <Text style={styles.textStyling}>Daily calorie consumption: </Text>
          {this.state.meals.length > 0 &&
            this.state.meals.map(meal => {
              return <Text key={meal}>{meal}</Text>
            })
          }
          <View style={{ alignSelf: 'stretch' }}>
            <TextInput
              returnKeyType='Done'
              onSubmitEditing={(event) => this.onSubmit(event)}
              placeholder='enter calories for your meal'
            />
          </View>
        </View>
      </View>
    )
  }
}

export default Daily;
