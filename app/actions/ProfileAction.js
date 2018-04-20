import {
  GET_PROFILE_ATTEMP,GET_PROFILE_ATTEMP_SUCCESS,GET_PROFILE_ATTEMP_FAILED
} from './types';
import axios from 'axios';
export const getuser = ({ user_id}) => {
  return (dispatch) => {
    dispatch({type: GET_PROFILE_ATTEMP});
    axios.post('http://2018.gp-fcih.egyprotech.com/profile.php',
    {
      user_id,
    })
    .then(resp => handlgetuserResponse(dispatch,resp.data))
    .catch(error => console.log(error));
  };
}
const handlgetuserResponse = (dispatch,data) =>{
  console.log(data);
  if(data.success){
    dispatch({type : GET_PROFILE_ATTEMP_SUCCESS,name : data.name,email : data.email,image : data.profile_image,collection : data.rated_product});
  }else{
    dispatch({type : GET_PROFILE_ATTEMP_FAILED,error:data.error_message,phone : ''})
  }
};
