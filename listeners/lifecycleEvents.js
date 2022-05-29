'use strict'

const boardService = require('../services/boardService.js');
const gameService = require('../services/gameService.js');
const lenraDataService = require("../services/lenraDataService.js");
const navigationService = require('../services/navigationService.js');
const playerService = require('../services/playerService.js');
const waitingPlayerService = require('../services/waitingPlayerService.js');

const datastores = [gameService.datastoreName, boardService.datastoreName, playerService.datastoreName, waitingPlayerService.datastoreName];

function onEnvStart(props, event, api) {
    const promises = datastores.map(ds => lenraDataService.createDatastore(api, ds).catch((e => { })));
    return Promise.all(promises);
}

function onEnvStop(props, event, api) {
    // TODO: do something
}

function onUserFirstJoin(props, event, api) {
    return navigationService.home(api);
}

function onUserQuit(props, event, api) {
    // TODO: remove user data
}

function onSessionStart(props, event, api) {
    // TODO: do something
}

function onSessionStop(props, event, api) {
    // TODO: do something
}

module.exports = {
    onEnvStart,
    onEnvStop,
    onUserFirstJoin,
    onUserQuit,
    onSessionStart,
    onSessionStop
}