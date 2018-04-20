import React, { Component } from 'react';
import {Card,Button, FormLabel, FormInput,FormValidationMessage } from 'react-native-elements';
import {
  StyleSheet,
  View,
  Image
} from 'react-native';
export default class Login extends Component<{}> {
  constructor(){
     super();
     this.state = {
       email : '',
       password : '',
       errormsg : '',
     };
  }
  _OnPressLogin(){
    // this.state.err = this.state.password;
    this.props.navigation.navigate('Home');
  }
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.image} >
        <Image source={require('../files/logo.png')} />
      </View>
        <Card title="Login" containerStyle={{}}>
          <FormLabel>Email</FormLabel>
          <FormInput onChangeText={(useremail)=>this.setState({email : useremail})}/>
          <FormLabel>Password</FormLabel>
          <FormInput onChangeText={(userpassword)=>this.setState({password : userpassword})}/>
          <FormValidationMessage>
            {this.state.errormsg}
          </FormValidationMessage>
          <Button
            buttonStyle={styles.button}
            containerViewStyle={styles.button}
            raised
            onPress = {this._OnPressLogin.bind(this)}
            icon={{name: 'lock'}}
            title='Login' />
          <Button
            raised
            onPress = {this._OnPressLogin.bind(this)}
            icon={{name: 'add'}}
            title='Sign Up' />
        </Card>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  button : {
    marginBottom : 10,
    backgroundColor: '#000',
  },
  image : {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: 'rgb(247, 244, 247)',
    justifyContent: 'center',
    flex : 1,
  },
});
