import {get,put,post} from "./http";

// 对所有接口统一封装
export default {
  loginRequest:(params)=>post('/auth/login',params),
  registerRequest:(params)=>post('/auth/register',params),
  sendCode:(phone)=>get('/auth/sendCode/'+phone),
  socialUserId:(userId)=>get('/auth/social/'+userId),
  requestVO:(params)=>post('/auth/updatePassword',params),
  uploadFiles:(params)=>post('/file/upload',params),
  authUpdate:(_)=>put('/auth',_)
}
