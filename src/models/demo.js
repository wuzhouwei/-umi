import {getlist,getimg} from '../services/demo'
export default {
  namespace: 'demo',    // 命名空间，如果省略，则以文件名作为命名空间
  state: {
    imglist:[],
    list:[]
  },
  effects: {
    *photo(action, {call, put}) {  //异步操作
      //发起请求
      const res = yield call(getimg)
      //派发异步action: initGoods
      console.log(res,'77')
      yield put({type:'initGoods', payload:res.data.list})
    },
    *listData(action, {call, put}) {  //异步操作
      //发起请求
      const res = yield call(getlist)
      console.log(res,'88')
      //派发异步action: initGoods
      yield put({type:'lists', payload:res.data.list})
    },

  },
  reducers: {
    initGoods(state, {payload: imglist}) {
      return { ...state, imglist }
    },
    lists(state, {payload: list}) {
      return { ...state, list }
    }
  }
}
