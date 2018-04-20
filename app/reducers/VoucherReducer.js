const INITAL_STATE = {collection:'', error:'',loading:false};
import {
  GET_VOCHER_ATTEMP,
  GET_VOCHER_ATTEMP_SUCCESS,
  GET_VOCHER_ATTEMP_FAILED

} from '../actions/types';
export default(state = INITAL_STATE,action) => {
  switch (action.type) {
    case GET_VOCHER_ATTEMP:
        return {...INITAL_STATE ,loading : true}
    case GET_VOCHER_ATTEMP_FAILED:
      return {...INITAL_STATE ,loading : false,error:action.message,collection : []}
    case GET_VOCHER_ATTEMP_SUCCESS:
      return {...INITAL_STATE ,loading : false,collection : action.collection}
    default:
      return state;
  }
}
