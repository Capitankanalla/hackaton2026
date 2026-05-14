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
  },

  // ─────────────────────────────────────────────
  // Funció que afegeix o actualitza dades a la db
  // ─────────────────────────────────────────────
  async insertOrUpdateAsset(asset) {
    const { symbol, name, type, exchange, currency, region, market } = asset;

    // Comprovar si existeix
    const [rows] = await db.query(
      "SELECT id FROM assets WHERE symbol = ?",
      [symbol]
    );

    if (rows.length > 0) {
      // UPDATE
      await db.query(
        `UPDATE assets 
         SET name = ?, type = ?, exchange = ?, currency = ?, region = ?, market = ?
         WHERE symbol = ?`,
        [name, type, exchange, currency, region, market, symbol]
      );
      return rows[0].id;
    }

    // INSERT
    const [result] = await db.query(
      `INSERT INTO assets (symbol, name, type, exchange, currency, region, market)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [symbol, name, type, exchange, currency, region, market]
    );

    return result.insertId;
  }
};

module.exports = AssetsModel;
