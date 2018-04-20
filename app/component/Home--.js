import React, { Component } from 'react';
import { Container ,Content,View } from 'native-base';
import {
  Platform,
  StyleSheet,
  Text,
  ScrollView,
  RefreshControl,
  fetchData
} from 'react-native';
import Appheader from '../common/Appheader.js';
import Appfooter from '../common/Appfooter.js';
import News from './News.js';
import Categories from './Categories.js';
import Carouselhome from './Carouselhome.js';
import Homegetproducts from './Homegetproducts.js';
import Redeempoints from './Redeempoints.js';
import Voucher from './Voucher.js';
import Headermenu from './Headermenu.js';
import PTRView from 'react-native-pull-to-refresh';
import {connect } from 'react-redux';
import PushNotification  from 'react-native-push-notification';
// import {StackNavigator} from 'react-navigation';
// const footerlinks = StackNavigator({
//   Appfooter: {
//     screen: Categories,
//     navigationOptions: ({
//       title : 'Stores',
//       // headerMode : none,
//     }),
//   }
// });
class Home extends Component {
  // constructor(props){
  //   super(props);
  //   this.data = props.data;
  // }
  componentDidMount(){
    // setInterval(()=> {
    //   if(this.props.latitude && this.props.longitude){
    //     const lat = this.state.latitude;
    //     const long = this.state.longitude;
    //     this.props.getClosestStore({lat,long});
    //   }else{
    //     const lat = 30.0490194;
    //     const long = 31.474344;
    //     this.props.getClosestStore({lat,long});
    //   }
    // }, 300000);


  }
  componentWillReceiveProps(nextProps){
    console.log('Hoooooooooome');
    console.log(nextProps);
      if(nextProps.distance){
        PushNotification.localNotification({
          ticker: "There is Dejavu near you in "+nextProps.distance,
          message: "There is Dejavu near you in "+nextProps.distance, // (required)
          bigText: "You can arrive in "+nextProps.duration, // (optional) default: "message" prop
          vibrate: true, // (optional) default: true
          vibration: 300, // vibration length in milliseconds, ignored if vibrate=false, default: 1000
          title: nextProps.store_name, // (optional, for iOS this is only used in apple watch, the title will be the app name on other iOS devices)
        });
      }
  }
  constructor(props) {
      super(props);
      this.state = {
        refreshing: false,
      };
    }
  _onRefresh() {
    this.setState({refreshing: true});
    this.render();
    this.setState({refreshing: false});
  }
  handleClick(){
    this.props.navigation.navigate('Loginpage');
  }

  render() {
    return (
      <Container>
            <Content>
              <Carouselhome/>
              <Redeempoints/>
              <Voucher/>
              <News/>
              <Categories/>
              <Homegetproducts/>
            </Content>
          <Appfooter navigation = {this.props.navigation} />
      </Container>
    );
  }
}
const mapStateToProps = state => {
    return {
      error : state.location.error,
      latitude : state.location.latitude,
      longitude : state.location.longitude,
      latitude_store : state.location.latitude_store,
      longitude_store : state.location.longitude_store,
      store_name : state.location.name,
      loading : state.location.loading,
      distance : state.location.distance,
      duration : state.location.duration,
    }
}
export default Home;
