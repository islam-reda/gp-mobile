import React, { Component } from 'react';
import { Container} from 'native-base';
import RootNavigator from './component/RootNavigator.js'
import Storetabnavigation from './component/Storetabnavigation.js'
export default class Navigator extends Component {
  render() {
    return <RootNavigator/>
  }
}
