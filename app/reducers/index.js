import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer.js'
import SigninReducer from './SigninReducer.js'
import CategoriesReducer from './CategoriesReducer.js'
import RedeemReducer from './RedeemReducer.js'
import VoucherReducer from './VoucherReducer.js';
import NewsReducer from './NewsReducer.js';
import ProfileReducer  from './ProfileReducer.js';
import HomeReducer from './HomeReducer';
import VisitedPlacesReducer from './VisitedPlacesReducer';
export default combineReducers({
  'login' : AuthReducer,
  'signup' : SigninReducer,
  'categories' : CategoriesReducer,
  'points' : RedeemReducer,
  'voucher' : VoucherReducer,
  'news' : NewsReducer,
  'profile' : ProfileReducer,
  'homePost': HomeReducer,
  'visitedPlaces': VisitedPlacesReducer
});
