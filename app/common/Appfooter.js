import React, { Component } from 'react';
import { Footer, FooterTab, Button, Icon, Text } from 'native-base';
import {
  StyleSheet,
} from 'react-native';
export default class Appfooter extends Component {
  _catNavigate(){
      const navigation = this.props.navigation;
      navigation.navigate('Categories');
  }
  _VisitedNavigate(){
      const navigation = this.props.navigation;
      navigation.navigate('VisitedPlaces');
  }
  _profileNavigate(){
      const navigation = this.props.navigation;
      navigation.navigate('Profile');
  }
    _HomeNavigate(){
      const navigation = this.props.navigation;
      navigation.navigate('Home');
  }
  render() {
    return (
      <Footer>
        <FooterTab style = {styles.footer}>
          <Button  vertical onPress={() => this._HomeNavigate() }>
            <Icon name="home" style={styles.black} />
            <Text style={styles.black}>Home</Text>
          </Button>
          <Button vertical onPress={() => this._catNavigate() }>
            <Icon name="apps" style={styles.black} />
            <Text style={styles.black}>Categories</Text>
          </Button>
          <Button vertical onPress={() => this._VisitedNavigate() }>
            <Icon active name="cart" style={styles.black}/>
            <Text style={styles.black}>Visited</Text>
          </Button>
          <Button vertical>
            <Icon name="person" onPress={() => this._profileNavigate() } style={styles.black} />
            <Text style={styles.black}>Profile</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}
const styles = StyleSheet.create({
  black : {
    color : '#fff',
  },
  footer: {
    backgroundColor:'#000',
    flexDirection:'row',
  },
});
