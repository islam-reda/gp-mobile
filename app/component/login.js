import React, { Component } from 'react';
import {Card,Button, FormLabel, FormInput,FormValidationMessage } from 'react-native-elements';
import {
  StyleSheet,
  View,
  Image,
  AsyncStorage,
  Keyboard,
  Alert
} from 'react-native';
import ls from 'react-native-local-storage';
import {loginuser} from '../actions/AuthActions.js'
import {connect } from 'react-redux';
import {Spinner } from '../common/Spinner.js';
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
 class Login extends Component<{}> {
   static myInstance = null;
   token = "";
   //singlton
   static getInstance() {
       if (this.myInstance === null) {
           this.myInstance = new Login();
       }
       return this.myInstance;
   }
   getToken() {
       return this.token;
   }
   setToken(token) {
       this.token = token;
   }
  constructor(){
     super();
     this.state = {
       email : '',
       password : '',
       is_verfy : false,
     };
  }
  componentWillReceiveProps(nextProps){
      if(nextProps.error){
        this.setState({
            error: '',
        });
      }
      console.warn(nextProps);
      if(nextProps.is_success){
        this.props.navigation.navigate('Home');
      }
  }

  _OnPressRegister(){
    this.props.navigation.navigate('Signup');
  }
  _OnPressLogin(){
    const {email,password} = this.state;
    if(!email && !password){
      this.setState({
          error: 'Right email and password is requied',
      });
    }else{
        this.props.loginuser({email,password});
    }

    // this.props.navigation.navigate('Home');
  }

  _renderFields(){
      return (
        <View>
            <FormLabel>Email</FormLabel>
            <FormInput
                      keyboardType = "email-address" autoFocus = {true} returnKeyType = 'next'
                      onSubmitEditing = {this._onKeyboardDone()}

                      placeholder="Enter your email" autoCapitalize = 'none' autoCorrect = {false}  onChangeText={(email)=>this.setState({email})}>
            </FormInput>
            <FormLabel>Password</FormLabel>
            <FormInput
                      returnKeyType = 'next'
                      secureTextEntry = {true}
                      onSubmitEditing = {this._onKeyboardDone()}
                      placeholder="Enter your Password" autoCapitalize = 'none' autoCorrect = {false}  onChangeText={(password)=>this.setState({password})}>
            </FormInput>
          </View>
          );
  }
  _renderButton(){
    if(!this.props.loading){
        return (
            <Button
              buttonStyle={styles.button}
              containerViewStyle={styles.button}
              raised
              onPress = {this._OnPressLogin.bind(this)}
              icon={{name: 'lock'}}
              title='Login' />
          );
    }
    return <Spinner/>;
  }
  _onKeyboardVerfy(){
    // this.keyboardDidShowListener = Keyboard.addListener('keyboardDidHide',()=>{
    //     const {vercode} = this.state;
    //     if(vercode){
    //       this.props.verfycode({vercode});
    //     }
    //     if(!vercode ){
    //       this.setState({
    //           error: 'Verfication is requied',
    //       });
    //     }
    //   });
  }
  _onKeyboardDone(){
    // this.keyboardDidShowListener = Keyboard.addListener('keyboardDidHide',()=>{
    //     const {phone} = this.state;
    //     if(phone){
    //       this.props.loginuser({phone});
    //     }
    //     if(!phone ){
    //       this.setState({
    //           error: 'Phone is requied',
    //       });
    //     }
    //
    // });
  }
ComponentWillUnMount(){
  this.keyboardDidShowListener.remove();
}
  render() {
    return (
      <View style={styles.container}>
        <Card title="Login" containerStyle={{}}>
          {this._renderFields()}
          <FormValidationMessage>
            {this.props.error}
            { this.state.error}
          </FormValidationMessage>
          {this._renderButton()}
            <Button
              raised
              onPress = {this._OnPressRegister.bind(this)}
              icon={{name: 'add'}}
              title='Sign Up' />
        </Card>
      </View>
    );
  }
}
// <Button
//   raised
//   onPress = {this._OnPressRegister.bind(this)}
//   icon={{name: 'add'}}
//   title='Sign Up' />
const mapStateToProps = state => {
    return {
      error : state.login.error,
      loading : state.login.loading,
      token : state.login.token,
      is_success : state.login.is_success,
    }
}
export default connect(mapStateToProps,{loginuser})(Login);
