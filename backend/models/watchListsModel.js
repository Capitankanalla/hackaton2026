const { db } = require("../db.js");

const WatchlistModel = {
    async getAllByUser(user_id) {
        const [rows] = await db.query(
            `SELECT * FROM watchlists 
            WHERE user_id = ?`,
            [user_id]
        );
        return rows;
    },

    async insertWatchlist(user_id, name) {
        const [result] = await db.query(
            `INSERT INTO watchlists (user_id, name) 
            VALUES (?, ?)`,
            [user_id, name]
        );
        return result;
    },

    async deleteWatchlist(id) {
        const [result] = await db.query(
            `DELETE FROM watchlists 
            WHERE id = ?`,
            [id]
        );
        return result;
    }
};

module.exports = WatchlistModel;