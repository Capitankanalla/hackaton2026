const AssetsModel = require("../models/assetsModel");

module.exports = {
  async getAssetsByMarket(req, res) {
    try {
      const { market } = req.params;
      const assets = await AssetsModel.getAssetsByMarket(market);
      res.json(assets);
    } catch (err) {
      console.error("Error getAssetsByMarket:", err);
      res.status(500).json({ error: "Error obtenint actius del mercat" });
    }
  },

  async getAssetBySymbol(req, res) {
    try {
      const { symbol } = req.params;
      const asset = await AssetsModel.getBySymbol(symbol);
      res.json(asset);
    } catch (err) {
      console.error("Error getAssetBySymbol:", err);
      res.status(500).json({ error: "Error obtenint actiu" });
    }
  }
};
