'use strict'

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Bar } from 'react-native-pathjs-charts'
import Navbar from '../../../components/Navbar/Navbar.js';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
  },
});

class Daily extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Bar (Column) - Basic`,
  });
  render() {
    let data = [
      [{
        "v": 0,
        "name": ""
      }, {
        "v": 3000,
        "name": "target"
      }],
      [{
        "v": 2500,
        "name": "current"
      }, {
        "v": 0,
        "name": ""
      }]
    ]

    let options = {
      width: 200,
      height: 200,
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
          rotate: 45
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
      <View style={{flex: 1}}>
        <Navbar prop={this.props}></Navbar>
        <View style={styles.container}>
          <Bar data={data} options={options} accessorKey='v'/>
        </View>
      </View>
    )
  }
}

export default Daily;
