import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';
import search from '../common/search';
import Location from './Location';
import Stores from './Stores';
const Storetabnavigation = TabNavigator({
    Location: {
      screen: Location,
    },
    Stores: {
      screen: Stores,
    },
  },
);
export default Storetabnavigation;
