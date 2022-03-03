'use strict'

module.exports = (data, props) => {
  return {
    type: "flexible",
    fit: "tight",
    flex: 1,
    child:
    {
      type: "widget",
      name: "hello"
    }

  }
}

