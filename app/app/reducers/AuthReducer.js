//login
const INITAL_STATE = {loading : false,  error : '', user : null};
import {
  LOGIN_ATTEMPT,LOGIN_SUCCESS,LOGIN_FAILED
} from '../actions/types';
export default(state = INITAL_STATE,action) => {
  switch (action.type) {
    case LOGIN_ATTEMPT:
      return {...state ,loading : true}
    case LOGIN_FAILED:
      return {...INITAL_STATE ,loading : false,error: action.error}
    case LOGIN_SUCCESS:
      return {...INITAL_STATE ,loading : false,is_success: action.success,token:action.token}
    default:
      return state;
  }
}
