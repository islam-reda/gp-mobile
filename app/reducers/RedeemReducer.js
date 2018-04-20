const INITAL_STATE = { error:'',loading:false};
import {
  GET_REDEEM_ATTEMP,
  GET_REDEEM_ATTEMP_SUCCESS,
  GET_REDEEM_ATTEMP_FAILED,
} from '../actions/types';
export default(state = INITAL_STATE,action) => {
  switch (action.type) {
    case GET_REDEEM_ATTEMP:
        return {...INITAL_STATE ,loading : true}
    case GET_REDEEM_ATTEMP_FAILED:
      return {...INITAL_STATE ,loading : false,error:action.message,points:0}
    case GET_REDEEM_ATTEMP_SUCCESS:
      return {...INITAL_STATE ,loading : false,points : action.points,error:''}
    default:
      return state;
  }
}
