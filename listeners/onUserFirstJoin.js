'use strict'

const counterService = require("../services/counterService")


module.exports = (props, event, api) => {
    print("OnUSerFirstJoin")
    return counterService.new(api).then(function (response) {
        print("response" + response)
        response.data
    });
}