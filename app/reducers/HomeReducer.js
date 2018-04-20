import {
  GET_HOME_ATTEMP,
  GET_HOME_ATTEMP_SUCCESS,
  GET_HOME_ATTEMP_FAILED,
  SAVE_RATE_FAILED,SAVE_RATE_SUCCESS} from '../actions/types.js';

  const INITIAL_STATE = {
    loading: false,
    error: '', 
    data: '',
    success : false,
  };

  export default(state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_HOME_ATTEMP:
        return { ...INITIAL_STATE, loading: true,success : false }
    case GET_HOME_ATTEMP_SUCCESS:
        return {
           loading: 'false',
           data: action.payload,
           error: ''
          }
    case GET_HOME_ATTEMP_FAILED:
        return { loading: false, error: 'Somethin went wrong' }
    case SAVE_RATE_FAILED:
        return { ...state, loading: 'false', error: 'something went wrong' }
    case SAVE_RATE_SUCCESS:
 

        return { ...state, loading: 'false', success: action.success }
    default:
      return state;
    }
  };
