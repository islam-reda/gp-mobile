//login
const INITAL_STATE = {loading : false,  error : '', name : '',products : {}};
import {
  GET_PROFILE_ATTEMP,GET_PROFILE_ATTEMP_SUCCESS,GET_PROFILE_ATTEMP_FAILED
} from '../actions/types';
export default(state = INITAL_STATE,action) => {
  switch (action.type) {

    case GET_PROFILE_ATTEMP:
      return {...INITAL_STATE ,loading : true}
    case GET_PROFILE_ATTEMP_FAILED:
      return {...INITAL_STATE ,loading : false,error: action.error,name:'Not found Data',products:{}}
    case GET_PROFILE_ATTEMP_SUCCESS:      
      return {...INITAL_STATE ,loading : false,name: action.name,email: action.email,image: action.image,products: action.collection}


    default:
      return state;
  }
}
