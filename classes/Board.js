const LenraData = require('./LenraData.js');

module.exports = class Board extends LenraData {
    /**
     * @param {number} _id Data id
     * @param {string} _datastore The datastore where the data is stored
     * @param {number[]} _refs The data references to other datas
     * @param {number[]} _refBy The other datas referencing the current data
     * @param {number[][]} cells The game cells
     */
    constructor(_id, _datastore, _refs, _refBy, cells) {
        super(_id, _datastore, _refs, _refBy);
        this.cells = cells;
    }
}