const AssetsModel = require("../models/assetsModel");
const loadMarket = require("../marketLoader");

module.exports = {
  async getMarkets(req, res) {
    try {
      const markets = await AssetsModel.getAvailableMarkets();
      res.json(markets);
    } catch (err) {
      console.error("Error getMarkets:", err);
      res.status(500).json({ error: "Error obtenint mercats" });
    }
  },

  async getMarketAssets(req, res) {
    try {
      const market = req.params.market.toLowerCase();

      // 1️⃣ Carregar/actualitzar automàticament
      await loadMarket(market);

      // 2️⃣ Retornar dades des de la DB
      const assets = await AssetsModel.getAssetsByMarket(market.toUpperCase());
      res.json(assets);

    } catch (err) {
      console.error("Error getMarketAssets:", err);
      res.status(500).json({ error: "Error obtenint actius del mercat" });
    }
  }
};
