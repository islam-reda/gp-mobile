import {
  GET_REDEEM_ATTEMP,
  GET_REDEEM_ATTEMP_SUCCESS,
  GET_REDEEM_ATTEMP_FAILED,

} from './types';
import axios from 'axios';

export const getmypoints = ({token}) => {

  return(dispatch)=>{
    try{
      dispatch({type : GET_REDEEM_ATTEMP});
      axios.post('http://192.168.1.107/mobileapp/Redeempoints.php?function=getmypoints',
      {
        token,
      })
      .then(resp => handleResponse(dispatch,resp.data))
      .catch(error => console.log(error));
    }
    catch(e){
      console.log(e);
      dispatch({type : GET_REDEEM_ATTEMP_FAILED ,error : e});
    }

  };
}
const handleResponse = (dispatch,data) =>{
  console.log('--------------REDEEM--------------');
  console.log(data);
  console.log('----------------------------');
  if(data.success){
    dispatch({type : GET_REDEEM_ATTEMP_SUCCESS,points: data.points});
  }else{
    dispatch({type : GET_REDEEM_ATTEMP_FAILED ,error : data.message});
  }
};
