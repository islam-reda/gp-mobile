const INITAL_STATE = {loading:false,collection:{}};
import {
  GET_CATEGORIES_ATTEMP,GET_CATEGORIES_ATTEMP_SUCCESS,GET_CATEGORIES_ATTEMP_FAILED,
  GET_CATEGORIES_PRODUCT_ATTEMP,GET_CATEGORIES_PRODUCT_ATTEMP_SUCCESS,GET_CATEGORIES_PRODUCT_ATTEMP_FAILED,
  GET_SINGLE_PRODUCT_ATTEMP,GET_SINGLE_PRODUCT_ATTEMP_SUCCESS,GET_SINGLE_PRODUCT_ATTEMP_FAILED
} from '../actions/types';
export default(state = INITAL_STATE,action) => {
  switch (action.type) {
    case GET_CATEGORIES_ATTEMP:
        return {...INITAL_STATE ,loading : true}
    case GET_CATEGORIES_ATTEMP_SUCCESS:
      return {...INITAL_STATE ,collection : action.categories}
    case GET_CATEGORIES_ATTEMP_FAILED:
      return {...INITAL_STATE ,error:action.error}
    

    case GET_CATEGORIES_PRODUCT_ATTEMP:
      return {...INITAL_STATE ,loading : true}
    case GET_CATEGORIES_PRODUCT_ATTEMP_SUCCESS:
      return {...INITAL_STATE ,collection : action.products}
    case GET_CATEGORIES_PRODUCT_ATTEMP_FAILED:
      return {...INITAL_STATE ,error:action.error}


    case GET_SINGLE_PRODUCT_ATTEMP:
      return {...INITAL_STATE ,loading : true}
    case GET_SINGLE_PRODUCT_ATTEMP_SUCCESS:
      return {...INITAL_STATE ,collection : action.products}
    case GET_SINGLE_PRODUCT_ATTEMP_FAILED:
      return {...INITAL_STATE ,error:action.error}
      
    default:
      return state;
  }
}
