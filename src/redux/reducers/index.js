import { combineReducers } from 'redux'
import  menu  from './menu';
import  topiclist from  './topic';
import  user  from  './user';
export default combineReducers({
   menu,topiclist,user
})
