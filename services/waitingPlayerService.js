'use strict'

const dataService = require("./lenraDataService.js");
const WaitingPlayer = require('../classes/WaitingPlayer.js');
const datastoreName = 'waitingPlayers';

module.exports = {
    datastoreName,
    /**
     * @param {*} api 
     * @param {WaitingPlayer} player 
     * @returns {Promise<WaitingPlayer>}
     */
    async createWaitingPlayer(api, player) {
        return dataService.createData(api, datastoreName, player);
    },
    /**
     * @param {*} api 
     * @param {number} difficulty The game difficulty index
     * @param {number} playerNumber number of players of the game
     * @returns {Promise<WaitingPlayer>}
     */
    async getWaitingPlayers(api, difficulty, playerNumber) {
        return dataService.executeQuery(api, {
            "$find": {
                "_datastore": datastoreName,
                difficulty,
                playerNumber
            }
        });
    },
    /**
     * @param {*} api 
     * @param {WaitingPlayer} player 
     * @returns {Promise<void>}
     */
    async deleteWaitingPlayer(api, player) {
        return await dataService.deleteData(api, datastoreName, player._id);
    }
}
