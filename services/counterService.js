'use strict'

const { default: axios } = require("axios");

module.exports = {
    get(api, counterId) {
        return axios.get(`${api.url}/app/datastore/Counter/data/${counterId}`);
    },
    put(api, counter) {
        return axios.put(`${api.url}/app/datastore/Counter/data/${counter._id}`, counter);
    },
    new(api) {
        return axios.post(`${api.url}/app/datastore/Counter/data`, { "value": 0 });
    },
    delete(api, counterId) {
        return axios.delete(`${api.url}/app/datastore/Counter/data/${counterId}`);

    },
    createDatastore(api) {
        return axios.post(`${api.url}/app/datastore`, { "name": "Counter" });
    }
}
