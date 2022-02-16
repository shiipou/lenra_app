'use strict'
// Widgets

module.exports = async () => {
  return {
    widgets: {
      helloWorld: require('./widgets/helloWorld'),
      testWidget: require('./widgets/testWidget'),
      hello: require('./widgets/hello')
    },
    listeners: {
      InitData:
        require('./listeners/initData')
    },
    rootWidget: 'helloWorld'
  }
}
