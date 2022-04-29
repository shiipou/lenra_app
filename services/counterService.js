'use strict'

const { default: axios } = require("axios");

module.exports = {
    get(api, counterId) {
        return axios.get(`${api.url}/app/datastore/Counter/data/${counterId}`, { headers: { Authorization: `Bearer ${api.token}` } }
        );
    },
    put(api, counter) {
        return axios.put(`${api.url}/app/datastore/Counter/data/${counter._id}`, counter, { headers: { Authorization: `Bearer ${api.token}` } });
    },
    new(api) {
        return axios.post(`${api.url}/app/datastore/Counter/data`, { "value": 0 }, { headers: { Authorization: `Bearer ${api.token}` } });
    },
    delete(api, counterId) {
        return axios.delete(`${api.url}/app/datastore/Counter/data/${counterId}`, { headers: { Authorization: `Bearer ${api.token}` } });

    },
    createDatastore(api) {
        return axios.post(`${api.url}/app/datastore`, { "name": "Counter" }, { headers: { Authorization: `Bearer ${api.token}` } });
    }
}
