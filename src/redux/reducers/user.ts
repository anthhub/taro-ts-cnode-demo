import  {setCahce,getCache}  from  '../utils/cache';
const cacheKey='cnode-user-key';
const user_cache=getCache(cacheKey)?getCache(cacheKey):{};//读取缓存
const  USER_STATE={...user_cache}
export  default  function  user(prestate=USER_STATE,action){
    switch(action.type){
        case 'loginSuccess':
        let  successState={...prestate,...action};
        setCahce(cacheKey,successState)//设置到缓存中
        return successState
        case 'loginFail':
        let failState= {...prestate,accesstoken:action.accesstoken,loginname:action.loginname}
        setCahce(cacheKey,failState)//设置到缓存中
        return failState;
        default:
        return  {...prestate};
    }
}