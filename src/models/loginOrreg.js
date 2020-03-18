import {login,reg} from '../services/loginORreg'
import {message} from 'antd'
export default {
  namespace: 'loginORreg',    // 命名空间，如果省略，则以文件名作为命名空间
  state: {
    lo:'',
    re:''
  },
  effects: {
    *loginle(action, {call, put}) {  //异步操作
      //发起请求
      const res = yield call(login,action.payload)
      //派发异步action: initGoods
      if (res.data.status === 200){
        message.success('登录成功')
        sessionStorage.setItem('token',res.data.token)
      }else {
        message.error(res.data.msg)
      }
      yield put({type:'loge',payload:res.data.status === 200? false : true})

    },
    *regle(action, {call, put}) {  //异步操作
      //发起请求
      const res = yield call(reg,action.payload)
      if (res.data.status === 200){
        message.success(res.data.msg)
      }else {
        message.error(res.data.msg)
      }
      //派发异步action: initGoods
      yield put({type:'regl', payload:res.data.status === 200? false : true})
    },

  },
  reducers: {
    loge(state, action) {
      return {lo: action.payload}
    },
    regl(state, action) {
      return {re : action.payload}
    },
  }
}
