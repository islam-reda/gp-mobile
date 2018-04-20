import {
  GET_CLOSEST_STORE,
  GET_CLOSEST_STORE_ATTEMPT,
  GET_STORES_MARKERS
} from './types';
import axios from 'axios';
export const getClosestStore = ({ lat,long}) => {
  return(dispatch)=>{
      dispatch({type : GET_CLOSEST_STORE_ATTEMPT});
      axios.post('http://192.168.1.107/mobileapp/location.php?function=getClosestStore',
      {
        lat,
        long,
      })
      .then(resp => handleResponse(dispatch,resp.data))
      .catch(error => console.log(error));
  };
}
const handleResponse = (dispatch,data) =>{
  console.log('Closest Store');
  console.log(data);
  if(!data.success){
    dispatch({type : GET_CLOSEST_STORE,error: data.error});
  }else{
    dispatch({type : GET_CLOSEST_STORE ,distance : data.disttext,duration : data.duration,name : data.storename,dist_val:data.distvalue ,store_name : data.storename ,store_lat : data.lat , store_long : data.long})
  }
};

export const getMarkers = () => {
  return(dispatch)=>{
      dispatch({type : GET_STORES_MARKERS});
      axios.post('http://192.168.1.107/mobileapp/location.php?function=getMarkers',
      {
      })
      .then(resp => handleMarkersResponse(dispatch,resp.data))
      .catch(error => console.log(error));
  };
}
const handleMarkersResponse = (dispatch,data) =>{

  if(!data.success){
    dispatch({type : GET_STORES_MARKERS,error: data.error});
  }else{
    dispatch({type : GET_STORES_MARKERS ,markers : data.markers})
  }
};
