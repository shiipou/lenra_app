'use strict'

const counterService = require("../services/counterService");


module.exports = (props, event, api) => {
    console.log("OnEnvStart")
    return counterService.createDatastore(api).then(function (response) {
        console.log("response" + response)
        response.data
    });
}