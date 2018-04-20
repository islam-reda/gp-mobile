import Login from './login';
// import Home from './Home';
import Signup from './Signup';
import Stores from './Stores';
import Splash from '../common/Splash';
import Location from './Location.js';
import Cart from './Cart.js';
import Profile from './Profile.js';
import {StackNavigator} from 'react-navigation';
import Categories from './Categories.js';
import Products from './Products.js';
import Product from '../common/Product.js';
import Home from './Home.js';
import VisitedPlaces from './VisitedPlaces.js';
const RootNavigator = StackNavigator({
  Splash: {
    screen: Splash,
    navigationOptions: ({
      header: null,
    }),
  },
  Product: {
    screen: Products,
    navigationOptions: ({
      header: null,
    }),
  },
  VisitedPlaces: {
    screen: VisitedPlaces,
    navigationOptions: ({
      header: null,
    }),
  },
  SingleProduct: {
    screen: Product,
    navigationOptions: ({
      title : 'Product View',
    }),
  },
  
  Profile: {
    screen: Profile,
    navigationOptions: ({
      title : 'My profile',
    }),
  },

  Categories: {
    screen: Categories,
    navigationOptions: ({
      title : 'Categories',
    }),
  },
  Cart: {
    screen: Cart,
    navigationOptions: ({
      title : 'Dejavu.shoes',
    }),
  },

  Loginpage: {
    screen: Login,
    navigationOptions: ({
      title : 'none',
      header: null,
      // headerMode : none,
    }),
  },
  Home: {
    screen: Home,
    navigationOptions: ({
      title : 'none',
      header: null,
      // headerMode : none,
    }),
  },
  Signup: {
    screen: Signup,
    navigationOptions: ({
      title : 'Register account',
      // headerMode : none,
    }),
  },

});
export default RootNavigator;
