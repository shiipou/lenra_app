'use strict'

const dataService = require("./lenraDataService.js");
const Player = require('../classes/Player.js');
const datastoreName = 'players';

module.exports = {
    datastoreName,
    /**
     * @param {*} api 
     * @param {Player} player 
     * @returns {Promise<Player>}
     */
    async createPlayer(api, player) {
        return dataService.createData(api, datastoreName, player);
    },
    /**
     * @param {*} api 
     * @param {number} playerId 
     * @returns {Promise<Player>}
     */
    async getPlayer(api, playerId) {
        return dataService.getData(api, datastoreName, playerId);
    },
    /**
     * @param {*} api 
     * @param {number} gameId 
     * @returns {Promise<Player[]>}
     */
    async getGamePlayers(api, gameId) {
        return dataService.executeQuery(api, {
            "$find": {
                "_datastore": datastoreName,
                "_refs": {
                    "$contains": gameId
                }
            }
        });
    },
    /**
     * @param {*} api 
     * @param {Player} player 
     * @returns {Promise<Player>}
     */
    async updatePlayer(api, player) {
        return await dataService.updateData(api, datastoreName, player);
    }
}
