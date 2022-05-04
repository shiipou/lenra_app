'use strict'

module.exports = (data, props) => {
    var userData = data[0]
    return {
        type: "text",
        value: `Email : test@test.te` //${userData._user.email}`
    }
}

