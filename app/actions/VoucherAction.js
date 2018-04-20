import {
  GET_VOCHER_ATTEMP,
  GET_VOCHER_ATTEMP_SUCCESS,
  GET_VOCHER_ATTEMP_FAILED
} from './types';
import axios from 'axios';
export const getmyvoucher = ({token}) => {

  return(dispatch)=>{
    try{
      dispatch({type : GET_VOCHER_ATTEMP});
      axios.post('http://192.168.1.107/mobileapp/Redeempoints.php?function=getmyvoucher',
      {
        token,
      })
      .then(resp => handleVoucherResponse(dispatch,resp.data))
      .catch(error => console.log(error));
    }
    catch(e){
      console.log(e);
      dispatch({type : GET_VOCHER_ATTEMP_FAILED ,error : e});
    }

  };
}
const handleVoucherResponse = (dispatch,data) =>{
  console.log('----------Daaaaaaaata --------');
  console.log(data);
  console.log('----------Daaaaaaaata --------');
  if(data.success){
    dispatch({type : GET_VOCHER_ATTEMP_SUCCESS,collection : data.data});
  }else{
    dispatch({type : GET_VOCHER_ATTEMP_FAILED ,error : data.message});
  }
};
