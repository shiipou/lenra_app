'use strict'

module.exports = (data, props) => {
  return {
    type: "widget",
    name: data.path,
    props: {}
  }
}
