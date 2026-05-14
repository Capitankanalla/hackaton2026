const AssetsModel = require("../models/assetsModel");

module.exports = {
  async getMarkets(req, res) {
    try {
      const markets = await AssetsModel.getAvailableMarkets();
      res.json(markets);
    } catch (err) {
      console.error("Error getMarkets:", err);
      res.status(500).json({ error: "Error obtenint mercats" });
    }
  }
};
