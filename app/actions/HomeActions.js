import axios from 'axios';
import {
  GET_HOME_ATTEMP,
  GET_HOME_ATTEMP_SUCCESS,
  GET_HOME_ATTEMP_FAILED,
  SAVE_RATE_FAILED,
  SAVE_RATE_SUCCESS
  } from './types.js';


export const saveRate = ({ user_id, product_id, rate_number, description }) => {
  return (dispatch) => {
    axios.post('http://2018.gp-fcih.egyprotech.com/Rate.php', {
      user_id,
      product_id,
      rate_number,
      description
    })
    .then(resp => rateSuccess(dispatch,resp.data))
    .catch(() => rateFailed(dispatch));
  };
};

const rateSuccess = (dispatch,data) => {
  dispatch({
  type: SAVE_RATE_SUCCESS,
  success : data.success,
});

};
const rateFailed = (dispatch) => {
  dispatch({
  type: SAVE_RATE_FAILED
});
};

export const getUserPosts = () => {
  return (dispatch) => {
    dispatch({ type: GET_HOME_ATTEMP });
    axios.post('http://2018.gp-fcih.egyprotech.com/products.php?function=homeproduct')
    .then(response => DataDelivered(dispatch, response.data))
    .catch(() => DataFailure(dispatch));
  };
};

const DataDelivered = (dispatch, data) => {
  console.log('response', data);
  dispatch({
  type: GET_HOME_ATTEMP_SUCCESS,
  payload: data
});
};


const DataFailure = (dispatch) => {
dispatch({ type: GET_HOME_ATTEMP_FAILED });
};
