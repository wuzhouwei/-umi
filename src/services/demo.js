import {request} from '../utils/request'

export async  function getimg() {
  return  request('/img','get')
}
export async  function getlist() {
  return  request('/list','post')
}
