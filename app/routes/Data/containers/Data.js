import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import Navbar from '../../../components/Navbar/Navbar.js';

class Data extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log('data', this.props)
    return (
      <View>
        <Navbar prop={this.props}/>
        <Text>Data component</Text>
      </View>
    )
  }
}

const mapState = function (state) {
  return {
    user: state
  }
}

export default connect(mapState, null)(Data);
