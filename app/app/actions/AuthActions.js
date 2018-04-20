import {
  LOGIN_ATTEMPT,LOGIN_SUCCESS,LOGIN_FAILED,
  REGISTER_ATTEMPT,REGISTER_SUCCESS,REGISTER_FAILED,
  LOGIN_CODESUCCESS,LOGIN_CODEFAILED ,
  VERFY_USERSUCCESS,VERFY_USERFAILED ,
} from './types';
import axios from 'axios';
import Login from '../component/login.js';
import {AsyncStorage,Alert} from 'react-native';
import ls from 'react-native-local-storage';
export const loginuser = ({ username,password}) => {
  return (dispatch) => {
    dispatch({type: LOGIN_ATTEMPT});
    axios.post('http://2018.gp-fcih.egyprotech.com/login.php?function=login',
    {
      username,password,
    })
    .then(resp => handleResponse(dispatch,resp.data))
    .catch(error => console.log(error));
  };
}

const onLoginFailed = (dispatch,errormessage)  =>{
  console.log(errormessage);

  dispatch({type : LOGIN_FAILED,error:errormessage});
};

const onLoginSuccess = (dispatch,success,token)  => {
  dispatch({type : LOGIN_SUCCESS,phone_is_exist:success,token})
};
const handleResponse = (dispatch,data) =>{
  console.log('---------------');
  console.log(data.token);
  console.log('---------------');
  if(!data.success){
    onLoginFailed(dispatch,data.message);
  }else{
    console.log(data);
    if(data.status && data.token){
      ls.save('user_tokin', data.token);
    }
    onLoginSuccess(dispatch,data.success,data.token);
  }
};


export const verfycode = ({ vercode}) => {
  return (dispatch) => {
    dispatch({type: LOGIN_ATTEMPT});
    axios.post('http://192.168.1.107/mobileapp/login.php?function=verfycode',
    {
      vercode,
    })
    .then(resp => handlevercodeResponse(dispatch,resp.data))
    .catch(error => console.log(error));
  };
}
const handlevercodeResponse = (dispatch,data) =>{
  console.log(data);
  if(!data.success){
    dispatch({type : LOGIN_CODEFAILED,is_success:data.success,error : data.message});
  }else{
    ls.save('user_tokin', data.token);
    dispatch({type : LOGIN_CODESUCCESS,is_success:data.success,token : data.token})
  }
};



export const verfyuser = ({ token}) => {
  return (dispatch) => {
    dispatch({type: LOGIN_ATTEMPT});
    axios.post('http://192.168.1.107/mobileapp/login.php?function=verfyuser',
    {
      token,
    })
    .then(resp => handluserResponse(dispatch,resp.data))
    .catch(error => console.log(error));
  };
}
const handluserResponse = (dispatch,data) =>{
  console.log(data);
  if(!data.success){
    dispatch({type : VERFY_USERFAILED,is_success:data.success,status : data.status});
  }else{
    ls.save('user_tokin', data.token);
    dispatch({type : VERFY_USERSUCCESS,is_success:data.success,status : data.status})
  }
};

export const registeruser = ({ email,password}) => {
  return (dispatch) => {
    dispatch({type: REGISTER_ATTEMPT});
    axios.post('http://192.168.1.107/mobileapp/signup.php',
    {
      email,password,
    })
    .then(resp => handleResponseRegister(dispatch,resp.data))
    .catch(error => console.log(error));
  };
}
const onRegisterFailed = (dispatch,msg)  =>{
  dispatch({type : REGISTER_FAILED,msg});
};

const onRegisterSuccess = (dispatch,msg)  => {
    dispatch({type : REGISTER_SUCCESS,msg})
};
const handleResponseRegister = (dispatch,data) =>{
  if(!data.success){
    onRegisterFailed(dispatch,data.message);
  }else{
    onRegisterSuccess(dispatch,data.message);
  }
};
