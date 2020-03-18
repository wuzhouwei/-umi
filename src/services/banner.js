import {request} from '../utils/request'


//banner
export async  function banner() {
  return  request('/banner','get','banner')
}
