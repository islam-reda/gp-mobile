const INITAL_STATE = { news : [{}],error : '',loading:false};
import {
  GET_NEWS_ATTEMP,
  GET_NEWS_ATTEMP_SUCCESS,
  GET_NEWS_ATTEMP_FAILED
} from '../actions/types';

export default(state = INITAL_STATE,action) => {
  switch (action.type) {
    case GET_NEWS_ATTEMP:
    console.log('----------Neeeeeeews Leeeeeter--------');
    console.log(action);
    console.log('----------Neeeeeeews Leeeeeter--------');
        return {...INITAL_STATE ,loading : true}
    case GET_NEWS_ATTEMP_SUCCESS:
    console.log('----------Neeeeeeews --------');
    console.log(action);
    console.log('----------Neeeeeeews --------');
        return {...INITAL_STATE ,news : action.news,loading : false}
    case GET_NEWS_ATTEMP_FAILED:
    console.log('----------Neeeeeeews Leeeeeter--------');
    console.log(action);
    console.log('----------Neeeeeeews Leeeeeter--------');
        return {...INITAL_STATE ,error:action.error,news : [],loading : false}
    default:
      return state;
  }
}
