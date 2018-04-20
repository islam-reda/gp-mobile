//login
const INITAL_STATE = {loading : false,  error : '', user : null};
import {
  REGISTER_ATTEMPT,REGISTER_SUCCESS,REGISTER_FAILED
} from '../actions/types';
export default(state = INITAL_STATE,action) => {
  switch (action.type) {
    case REGISTER_ATTEMPT:
      return {...state ,loading : true}
    case REGISTER_SUCCESS:
      return {...INITAL_STATE ,loading : false,user: action.msg}
    case REGISTER_FAILED:
      return {...INITAL_STATE ,loading : false,error: action.msg}

    default:
      return state;
  }
}
