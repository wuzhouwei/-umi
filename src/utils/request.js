import config from '../utils/config'
import axios from 'axios'
const {origin} = config

export const request = (url,method,sign,data) => {
console.log(sign,'0')
  let headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }

  if (sign !== 'login' && sign !== 'reg' && sign !== 'banner'){
    headers.token= sessionStorage.getItem("token")
  }

  return axios(`${origin}${url}`, {
    method,
    headers,
    data
  })
    .catch(e => console.log(e))
}
