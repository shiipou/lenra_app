'use strict'

module.exports = (data, _props, event) => {
    data.value = event.value
    data.path = "testWidget"
    return data
}