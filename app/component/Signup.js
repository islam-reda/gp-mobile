import React, { Component } from 'react';
import { Container, Content, Form, Item, Input, Label,Button,Text,Picker,ActionSheet,Root } from 'native-base';
import {connect } from 'react-redux';
import {registeruser} from '../actions/AuthActions.js';
import {Spinner } from '../common/Spinner.js';
var BUTTONS = [
  { text: "select gender"},
  { text: "male", icon: "male", iconColor: "#2c8ef4" },
  { text: "female", icon: "female", iconColor: "#f42ced" },
];
var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;
 class Signup extends Component {
   _OnSignUp(){
     const {email,password,gender,name} = this.state;
     console.log(email);
     console.log(password);
     console.log(name);
     if(email && password && name){
      const rdata = {
        name,email,password,gender : gender.text
      };
       this.props.registeruser(rdata);
     }
   }
   _renderButton(){
     if(!this.props.loading){
       return (
         <Button block dark onPress = {this._OnSignUp.bind(this)}>
             <Text>Sign In</Text>
          </Button>
       );
     }
     return <Spinner/>;
   }
   componentWillReceiveProps(nextProps){
       this.setState({
            error: '',
            gender: {
              text : "male",
            },
            name: "",
            email: "",
            password: "",
         });
       if(nextProps.user){
         this.props.navigation.navigate('Loginpage');
       }
   }
  render() {
    return (
      <Container style = {{backgroundColor: '#fff'}}>
        <Content>
        <Form>
            <Item stackedLabel last>
              <Label>Name</Label>
              <Input autoCapitalize = 'none' autoCorrect = {false}  onChangeText={(name)=>this.setState({name})}/>
            </Item>
            <Root>
             <Button  block light
                onPress={() =>
                ActionSheet.show(
                  {
                    options: BUTTONS,
                    cancelButtonIndex: CANCEL_INDEX,
                    destructiveButtonIndex: DESTRUCTIVE_INDEX,
                    title: "select gender"
                  },
                  buttonIndex => {
                    this.setState({ gender : BUTTONS[buttonIndex] });
                  }
                )}
              >
            <Text>Select Gender</Text>
          </Button>
          </Root>
            <Item stackedLabel>
              <Label>Email</Label>
              <Input autoCapitalize = 'none' autoCorrect = {false}  onChangeText={(email)=>this.setState({email})}/>
            </Item>
            <Item stackedLabel last>
              <Label>Password</Label>
              <Input secureTextEntry autoCapitalize = 'none' autoCorrect = {false}  onChangeText={(password)=>this.setState({password})}/>
            </Item>
            {this._renderButton()}
        </Form>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => {
    return {
      msg : state.signup.error,
      loading : state.signup.loading,
      user : state.signup.user,
    }
}
export default connect(mapStateToProps,{registeruser})(Signup);
