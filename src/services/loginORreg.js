import {request} from '../utils/request'

//登录
export async  function login(can) {
  return  request('/user/login','post','login',can)
}
//注册
export async  function reg(can) {
  return  request('/user/reg','post','reg',can)
}
