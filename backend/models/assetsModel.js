const { db } = require("../db.js");

const AssetsModel = {
  async getAll() {
    const [rows] = await db.query("SELECT * FROM assets ORDER BY symbol ASC");
    return rows;
  },

  async getById(id) {
    const [rows] = await db.query("SELECT * FROM assets WHERE id = ?", [id]);
    return rows[0] || null;
  },

  async getBySymbol(symbol) {
    const [rows] = await db.query("SELECT * FROM assets WHERE symbol = ?", [symbol]);
    return rows[0] || null;
  }
};

module.exports = AssetsModel;