const LenraData = require('./LenraData.js');

module.exports = class Game extends LenraData {
    /**
     * @param {number} _id Data id
     * @param {string} _datastore The datastore where the data is stored
     * @param {number[]} _refs The data references to other datas
     * @param {number[]} _refBy The other datas referencing the current data
     * @param {number} difficulty The game difficulty index
     * @param {number} playerNumber number of players of the game
     * @param {number} firstPlayer Id of the player that play first
     * @param {number} lastPlayer Id of the last player
     * @param {number} lastPlayDate Timestamp of the last play
     * @param {boolean} finished if true, the game is finished
     * @param {number} winner Id of game winner
     */
    constructor(_id, _datastore, _refs, _refBy, difficulty, playerNumber, firstPlayer, lastPlayer, lastPlayDate, finished, winner) {
        super(_id, _datastore, _refs, _refBy);
        this.difficulty = difficulty;
        this.playerNumber = playerNumber;
        this.firstPlayer = firstPlayer;
        this.lastPlayer = lastPlayer;
        this.lastPlayDate = lastPlayDate;
        this.finished = finished;
        this.winner = winner;
    }
}