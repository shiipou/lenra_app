'use strict'

const dataService = require("./lenraDataService.js");
const Game = require("../classes/Game.js");
const datastoreName = 'games';

module.exports = {
    datastoreName,
    /**
     * @param {*} api 
     * @param {Game} game The game 
     * @returns {Promise<Game>}
     */
    async createGame(api, game) {
        return dataService.createData(api, datastoreName, game);
    },
    /**
     * @param {*} api 
     * @param {number} gameId The game id
     * @returns {Promise<Game>}
     */
    async getGame(api, gameId) {
        return dataService.getData(api, datastoreName, gameId);
    },
    /**
     * @param {*} api 
     * @param {Game} game 
     * @returns {Promise<Game>}
     */
    async updateGame(api, game) {
        return await dataService.updateData(api, datastoreName, game);
    }
}
