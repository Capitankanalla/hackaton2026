const { db } = require("../db.js");

const AssetPricesModel = {
  async getLatestByAssetId(assetId) {
    const [rows] = await db.query(
      `SELECT *
       FROM asset_prices
       WHERE asset_id = ?
       ORDER BY timestamp DESC
       LIMIT 1`,
      [assetId]
    );
    return rows[0] || null;
  },

  async getHistoryByAssetId(assetId, limit = 100) {
    const [rows] = await db.query(
      `SELECT *
       FROM asset_prices
       WHERE asset_id = ?
       ORDER BY timestamp DESC
       LIMIT ?`,
      [assetId, limit]
    );
    return rows;
  },

  async insertPrice(assetId, price) {
    const [result] = await db.query(
      `INSERT INTO asset_prices (asset_id, price, timestamp)
       VALUES (?, ?, NOW())`,
      [assetId, price]
    );
    return result.insertId;
  }
};

module.exports = AssetPricesModel;