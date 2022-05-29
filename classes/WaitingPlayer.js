const LenraData = require('./LenraData.js');

module.exports = class WaitingPlayer extends LenraData {
    /**
     * @param {number} _id Data id
     * @param {string} _datastore The datastore where the data is stored
     * @param {number[]} _refs The data references to other datas
     * @param {number[]} _refBy The other datas referencing the current data
     * @param {number} difficulty The game difficulty index
     * @param {number} playerNumber number of players of the game
     */
    constructor(_id, _datastore, _refs, _refBy, difficulty, playerNumber) {
        super(_id, _datastore, _refs, _refBy);
        this.difficulty = difficulty;
        this.playerNumber = playerNumber;
    }
}