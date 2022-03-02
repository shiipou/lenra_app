'use strict'

module.exports = (data, props) => {
  return {
    type: "flex",
    direction: "vertical",
    spacing: 1,
    // fillParent: true,
    mainAxisAlignment: "center",
    crossAxisAlignment: "center",
    children: [
      {
        type: "text",
        value: `Hello ${data.value},`
      },
      {
        type: "text",
        value: `How are you.`
      },
      {
        type: "textfield",
        value: data.value,
        onChanged: {
          action: "changeValue"
        }
      }
    ]
  }
}

