import React, { Component } from 'react';
import {Header } from 'react-native-elements';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Search from './search.js';
class Appheader extends Component<{}> {
  render() {
    return <Search  navigation = {this.props.navigation}/>
  }
}
export default Appheader;
