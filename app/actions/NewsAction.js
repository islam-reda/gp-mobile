import {
  GET_NEWS_ATTEMP,
  GET_NEWS_ATTEMP_SUCCESS,
  GET_NEWS_ATTEMP_FAILED
} from './types';
import axios from 'axios';
export const getmynews = ({token}) => {
  return(dispatch)=>{
    try{
      dispatch({type : GET_NEWS_ATTEMP});
      axios.post('http://192.168.1.107/mobileapp/News.php?function=getnews',
      {
        token,
      })
      .then(resp => handleResponse(dispatch,resp.data))
      .catch(error => console.log(error));
    }
    catch(e){
      dispatch({type : GET_NEWS_ATTEMP_FAILED ,error : e});
    }
  };
}
const handleResponse = (dispatch,data) =>{
  console.log('----------Neeeeeeews --------');
  console.log(data);
  console.log('----------Neeeeeeews --------');
  if(data.success){
    dispatch({type : GET_NEWS_ATTEMP_SUCCESS,news : data.news});
  }else{
    dispatch({type : GET_NEWS_ATTEMP_FAILED ,error : data.message});
  }
};
