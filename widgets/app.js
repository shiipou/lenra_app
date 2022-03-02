'use strict'

module.exports = (data, props) => {
  return {
    type: "flex",
    direction: "vertical",
    fillParent: true,
    crossAxisAlignment: "stretch",
    children: [
      {
        type: "widget",
        name: "menu",
        props: {
          page: "Hello World"
        }
      },
      {
        type: "flexible",
        // child: {
        //   type: 'text',
        //   value: 'Coucou'
        // }
        child: {
          type: "widget",
          name: "helloWorld"
        }
      }
    ]
  }
}

