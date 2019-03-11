import  Taro from  '@tarojs/taro';
import api from  '../constants/api';
import  {getJSON,postJSON} from '../utils/request';  
//验证accesstoken
export  function  accessUserToken(params){
  return  async dispatch=>{
     let result= await  postJSON(api.checkusertoken,params);
     if(result&&result.data&&result.data.success){
         dispatch({type:"loginSuccess",accesstoken:params.accesstoken,loginname:result.data.loginname,avatar_url:result.data.avatar_url})
         return result.data;
     }else{
        dispatch({type:"loginFail",accesstoken:null,loginname:null})
     }
     return false;
  }
}
//获取用户信息
export async  function  getUserInfo(params){
    let  result= await getJSON(api.getuserinfo+params.loginname);
    if(result&&result.data&&result.data.success){
        return result.data
    }else{
       Taro.showToast({title:'拉取用户信息失败'})
    }
}
//验证用户信息
export  async  function  validateUser(params){
     if(params&&params.accesstoken){
         return true;
     }
     Taro.navigateTo({url:'/pages/login/login'})
     return  false;
}