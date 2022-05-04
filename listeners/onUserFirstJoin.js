'use strict'

const counterService = require("../services/counterService")


module.exports = (props, event, api) => {
    console.log("OnUSerFirstJoin")
    return counterService.new(api).then(function (response) {
        console.log("response" + response)
        response.data
    });
}