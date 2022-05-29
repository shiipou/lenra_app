'use strict'

const dataService = require("./lenraDataService.js");
const Board = require('../classes/Board.js');
const datastoreName = 'boards';

module.exports = {
    datastoreName,
    /**
     * @param {*} api 
     * @param {Board} board The board 
     * @returns {Promise<Board>}
     */
    async createBoard(api, board) {
        return dataService.createData(api, datastoreName, board);
    },
    /**
     * @param {*} api 
     * @param {number} boardId The board id
     * @returns {Promise<Board>}
     */
    async getBoard(api, boardId) {
        return dataService.getData(api, datastoreName, boardId);
    },
    /**
     * @param {*} api 
     * @param {Board} board 
     * @returns {Promise<Board>}
     */
    async updateBoard(api, board) {
        return await dataService.updateData(api, datastoreName, board);
    }
}
