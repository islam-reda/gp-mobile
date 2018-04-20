import {
  GET_PLACES_ATTEMP,
  GET_PLACES_ATTEMP_SUCCESS,
  GET_PLACES_ATTEMP_FAILED } from '../actions/types.js';

  const INITIAL_STATE = {
    loading: false,
    error: '',
    data: ''
  };

  export default(state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_PLACES_ATTEMP:
        return { ...INITIAL_STATE, loading: true }
    case GET_PLACES_ATTEMP_SUCCESS:
        return {
           loading: 'false',
           data: action.payload,
           error: ''
          }
    case GET_PLACES_ATTEMP_FAILED:
        return { loading: false, error: 'Somethin went wrong' }
    default:
      return state;
    }
  };
