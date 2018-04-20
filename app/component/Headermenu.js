import { DrawerItems,DrawerNavigator, SafeAreaView } from 'react-navigation';
import React, { Component } from 'react';
import { ScrollView,Text} from 'react-native';

import Home from './Home';
import Cart from './Cart';

const Headermenu = DrawerNavigator({
  Home: {
    screen: Cart,
  },
  Bags: {
    screen : Cart,
  },
});
export default Headermenu;
