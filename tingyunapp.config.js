module.exports = {
  // android: {
  //   appKey: 'xxx', //替换为报表应用的 AppKey
  //   redirectURL: 'xxx', //redirect 地址，请联系技术支持获取
  //   httpEnable: false, //默认以 https 协议上传数据
  //   locationEnable: false, //默认不采集地址位置信息
  //   options: 511 //首次启动功能开关 默认只启动crash模块
  // },
  ios: {
    appKey: 'XXXX',
    redirectURL: 'XXXX',
    httpEnable: false,
    locationEnable: false,
    options: 511
  },
  react: {
    filter: {
      /**
       * Allows you to filter the instrumentation
       * True = Will be instrumented
       */
      instrument: (filename) => {
        return true
      }
    }
  }
}
