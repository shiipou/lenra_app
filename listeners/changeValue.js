'use strict'

module.exports = (data, _props, event) => {
    httpOptions.method = 'PATCH'
    httpOptions.path = '/datastore/UserDatas/data/' + data.id
    httpOptions.body = { value: event.value }
    https.request(httpOptions, res => { res })
}