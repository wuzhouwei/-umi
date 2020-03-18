import mockjs from  'mockjs'

export default {
  //method url
    'GET /api/img': mockjs.mock({
      'list|10': [{ src: '@image' }],
    }),

  'post /api/list': mockjs.mock({
    'list|1-20':[{name:'@FIRST'}],

  })
  }

