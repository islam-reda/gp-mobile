import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Image,
} from 'react-native';
import { Button , Text } from 'native-base';
import {connect } from 'react-redux';
import MapView from 'react-native-maps';
import {Spinner } from '../common/Spinner.js';
import PushNotification  from 'react-native-push-notification';

const styles = StyleSheet.create({
  container: {
     position: 'absolute',
     top: 0,
     left: 0,
     right: 0,
     bottom: 0,
     justifyContent: 'flex-end',
     alignItems: 'center',
    },
    map: {
     position: 'absolute',
     top: 0,
     left: 0,
     right: 0,
     bottom: 0,
    },
    markerImg : {
        width: 50,
       height: 50,
       borderWidth:2,
       borderRadius:25/2,
       overflow:'hidden',
    }
});

class Location extends Component<{}> {
  componentWillReceiveProps(nextProps){
      if(nextProps.latitude_store && nextProps.longitude_store){
          const changeregion = {
              latitude: nextProps.latitude_store,
              longitude: nextProps.longitude_store,
              latitudeDelta:  0.009,
              longitudeDelta: 0.009,
          };
          this.setState({ region : changeregion });
      }
      if(nextProps.latitude && nextProps.longitude){
          const myLocation = {
              latitude: nextProps.latitude,
              longitude: nextProps.longitude,
              latitudeDelta:  0.009,
              longitudeDelta: 0.009,
          };
          this.setState({ region : myLocation });
      }
      if(nextProps.markers){
          this.setState({ markers : nextProps.markers });
      }
      console.log('Next markers');
      console.log(nextProps);
  }
  componentDidMount(){
    // this.props.getMarkers();
    PushNotification.cancelAllLocalNotifications();
    // this.props.getCurrentLocation();
    // PushNotification.localNotificationSchedule({
    //   message: "My Notification Message", // (required)
    //   date: new Date(Date.now() + (5 * 1000)), // in 60 secs
    //   bigText: "My big text that will be shown when notification is expanded", // (optional) default: "message" prop
    //   subText: "This is a subText", // (optional) default: none
    //   color: "red", // (optional) default: system default
    //   vibrate: true, // (optional) default: true
    //   vibration: 300, // vibration length in milliseconds, ignored if vibrate=false, default: 1000
    //   tag: 'some_tag', // (optional) add tag to message
    //   group: "group", // (optional) add group to message
    //   ongoing: false, // (optional) set whether this is an "ongoing" notification
    //   title: "My Notification Title", // (optional, for iOS this is only used in apple watch, the title will be the app name on other iOS devices)
    //   number: '10', // (optional) Valid 32 bit integer specified as string. default: none (Cannot be zero)
    //   actions: '["Yes", "No"]',  // (Android only) See the doc for notification actions to know more
    // });
  }
constructor(){

   super();
   this.state = {
     region: {
       latitude: 30.0445745,
       longitude: 31.2359008,
       latitudeDelta: 0.922,
       longitudeDelta: 0.421,
     },
     markers: [{
        key: 1,
        title: 'store 1',
        coordinates: {
          latitude: 37.78825,
          longitude: 40.4366
        },
      },
      {
        key: 2,
        title: 'Cairo',
        coordinates: {
          latitude: 30.0289498,
          longitude: 31.406495
        },
      }]
   };
}
getClosestStore(){

  // if(this.state.region.latitude && this.state.region.longitude){
  //   const lat = this.state.latitude;
  //   const long = this.state.longitude;
  //   this.props.getClosestStore({lat,long});
  // }else{
    const lat = 30.0490194;
    const long = 31.474344;
    this.props.getClosestStore({lat,long});
  // }

}
onRegionChange(region) {
  this.setState({ region });
}
_renderButton(){
  if(!this.props.loading){
    return (
      <Button block dark
        onPress = {this.getClosestStore.bind(this)}
        >
         <Text>Find Nearest Store</Text>
       </Button>
    );
  }
  return <Spinner/>;
}
  render() {
    return (
      <View style ={styles.container}>
        
      </View>
    );
  }
}
export default Location;
