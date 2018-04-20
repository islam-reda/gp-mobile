import React, { Component } from 'react';
import { DrawerNavigator } from 'react-navigation';
import search from '../common/search';
import Categories from './Categories';
const Drawernavigation = DrawerNavigator({
    Home: {
      screen: search,
    },
    categories: {
      screen: Categories,
    },
  },
  {
    drawerPosition : 'right',
  }
);
export default Drawernavigation;
