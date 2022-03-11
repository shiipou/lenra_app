'use strict'
// Widgets

module.exports = () => {
  return {
    widgets: {
      app: require('./widgets/app'),
      menu: require('./widgets/menu'),
      helloWorld: require('./widgets/helloWorld')
    },
    listeners: {
      InitData: require('./listeners/initData'),
      changeValue: require('./listeners/changeValue')
    },
    rootWidget: 'app'
  }
}
