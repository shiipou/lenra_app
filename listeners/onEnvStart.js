'use strict'

const counterService = require("../services/counterService");


module.exports = (props, event, api) => {
    print("OnEnvStart")
    return counterService.createDatastore(api).then(function (response) {
        print("response" + response)
        response.data
    }).catch((e => { }));
}