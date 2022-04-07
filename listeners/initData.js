'use strict'

const https = require('https')

module.exports = module.exports = (data, props, event, httpOptions) => {
  httpOptions.method = 'POST'
  httpOptions.path = '/datastore/UserDatas/data'
  httpOptions.body = { value: "world" }
  https.request(httpOptions, res => { res })
}
