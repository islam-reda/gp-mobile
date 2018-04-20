import {
  GET_CATEGORIES_ATTEMP,GET_CATEGORIES_ATTEMP_SUCCESS,GET_CATEGORIES_ATTEMP_FAILED,
  GET_CATEGORIES_PRODUCT_ATTEMP,GET_CATEGORIES_PRODUCT_ATTEMP_SUCCESS,GET_CATEGORIES_PRODUCT_ATTEMP_FAILED,
    GET_SINGLE_PRODUCT_ATTEMP,GET_SINGLE_PRODUCT_ATTEMP_SUCCESS,GET_SINGLE_PRODUCT_ATTEMP_FAILED
} from './types';
import axios from 'axios';

export const getCategories = () => {
  return(dispatch)=>{
    try{
      dispatch({type : GET_CATEGORIES_ATTEMP});
      axios.post('http://2018.gp-fcih.egyprotech.com/get_parent_category.php',
      {
      })
      .then(resp => handleResponse(dispatch,resp.data))
      .catch(error =>   dispatch({type : GET_CATEGORIES_ATTEMP_FAILED ,error}));
    }
    catch(e){
      dispatch({type : GET_CATEGORIES_ATTEMP_FAILED ,error : e});
    }
  };
}
const handleResponse = (dispatch,data) =>{
  if(data.status){
    dispatch({type : GET_CATEGORIES_ATTEMP_SUCCESS,categories : data.categories});
  }else{
    dispatch({type : GET_CATEGORIES_ATTEMP_FAILED ,error : data.error_message});
  }
};



export const getProductbyCategory = (category_id) => {
  return(dispatch)=>{
    try{
      console.log('hello get product');
      dispatch({type : GET_CATEGORIES_PRODUCT_ATTEMP});
      axios.post('http://2018.gp-fcih.egyprotech.com/products.php?function=products_by_category',
      {
        category_id
      })
      .then(resp => handleProductResponse(dispatch,resp.data))
      .catch(error =>   dispatch({type : GET_CATEGORIES_PRODUCT_ATTEMP_FAILED ,error}));
    }
    catch(e){
      dispatch({type : GET_CATEGORIES_PRODUCT_ATTEMP_FAILED ,error : e});
    }
  };
}
const handleProductResponse = (dispatch,data) =>{
  if(data.status){
    dispatch({type : GET_CATEGORIES_PRODUCT_ATTEMP_SUCCESS,products : data.products});
  }else{
    dispatch({type : GET_CATEGORIES_PRODUCT_ATTEMP_FAILED ,error : data.error_message});
  }
};






export const getSingleProduct = (product_id) => {

  return(dispatch)=>{
    try{
      dispatch({type : GET_SINGLE_PRODUCT_ATTEMP});
      axios.post('http://2018.gp-fcih.egyprotech.com/products.php?function=getSingleProduct',
      {
        product_id
      })
      .then(resp => handleSingleProductResponse(dispatch,resp.data))
      .catch(error =>   dispatch({type : GET_SINGLE_PRODUCT_ATTEMP_FAILED ,error}));
    }
    catch(e){
      dispatch({type : GET_SINGLE_PRODUCT_ATTEMP_FAILED ,error : e});
    }
  };
}
const handleSingleProductResponse = (dispatch,data) =>{

  if(data.status){
    dispatch({type : GET_SINGLE_PRODUCT_ATTEMP_SUCCESS,products : data.products});
  }else{
    dispatch({type : GET_SINGLE_PRODUCT_ATTEMP_FAILED ,error : data.error_message});
  }
};