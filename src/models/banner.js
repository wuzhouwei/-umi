import {banner} from '../services/banner'
import {message} from 'antd'
export default {
  namespace: 'bannerList',    // 命名空间，如果省略，则以文件名作为命名空间
  state: {
    banners:[],
  },
  effects: {
    *bannerff(action, {call, put}) {  //异步操作
      //发起请求
      const res = yield call(banner)
      //派发异步action: initGoods
      console.log(res.data.data,'00')
      yield put({type:'ban',payload:res.data.data})

    },

  },
  reducers: {
    ban(state, action) {
      return {banners: action.payload}
    },
  }
}
