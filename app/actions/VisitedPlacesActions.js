import axios from 'axios';
import {
  GET_PLACES_ATTEMP,
  GET_PLACES_ATTEMP_SUCCESS,
  GET_PLACES_ATTEMP_FAILED } from './types.js';


export const getUserPlaces = ({ user_id }) => {
  return (dispatch) => {
    dispatch({ type: GET_PLACES_ATTEMP });
    axios.post('http://2018.gp-fcih.egyprotech.com/products.php?function=vistedplaces', {
      user_id
    })
    .then(response => DataDelivered(dispatch, response.data))
    .catch(() => DataFailure(dispatch));
  };
};

const DataDelivered = (dispatch, data) => {
  console.log('response', data);
  dispatch({
  type: GET_PLACES_ATTEMP_SUCCESS,
  payload: data
});
};


const DataFailure = (dispatch) => {
dispatch({ type: GET_PLACES_ATTEMP_FAILED });
};
