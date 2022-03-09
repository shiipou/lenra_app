'use strict'
// Widgets

module.exports = async () => {
  return {
    widgets: {
      helloWorld: require('./widgets/helloWorld'),
      hello: require('./widgets/hello'),
    },
    listeners: {
      InitData: require('./listeners/initData'),
      //changeValue: require('./listeners/changeValue')
    },
    rootWidget: 'helloWorld'
  }
}